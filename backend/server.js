require('dotenv').config(); // 載入 .env 檔案中的環境變數 (僅供本機開發)
const express = require('express');
const { GoogleGenerativeAI, TaskType } = require('@google/generative-ai');
const cors = require('cors');
const path = require('path');
const fs = require('fs').promises;
const ndarray = require('ndarray'); // 用於向量操作
const cosineSimilarity = require('compute-cosine-similarity');

const app = express();
const port = process.env.PORT || 3000; // Render 會自動設定 PORT 環境變數

// --- 安全性設定 ---
// 取得你的 GitHub Pages 網址 (或是先用 '*' 允許所有來源，之後再限縮)
const allowedOrigins = [
    'https://bear0103papa.github.io', // 例如: 'https://your-username.github.io'
    'http://localhost:8000' // 如果你在本地端測試前端，也加入本地的來源
];

app.use(cors({
  origin: function (origin, callback) {
    // 允許沒有 origin 的請求 (例如 curl, Postman) 或來自允許清單的請求
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// --- 中介軟體 (Middleware) ---
app.use(express.json()); // 解析請求中的 JSON body

// --- Google AI 設定 ---
const apiKey = process.env.GOOGLE_AI_API_KEY;
if (!apiKey) {
  console.error("錯誤：請設定 GOOGLE_AI_API_KEY 環境變數");
  // 在實際部署中，你可能不想在這裡結束進程，但至少要記錄錯誤
  // process.exit(1); // 在本地開發時可以取消註解，強制需要 API Key
}
const genAI = new GoogleGenerativeAI(apiKey);
const generativeModel = genAI.getGenerativeModel({ model: "gemini-2.5-pro-exp-03-25" }); // 用於生成回答
const embeddingModelName = "models/embedding-001"; // 用於查詢 Embedding
const embeddingModel = genAI.getGenerativeModel({ model: embeddingModelName });

// --- 載入部落格索引 ---
const indexFilePath = path.join(__dirname, 'blog_index.json');
let blogIndex = []; // 記憶體中的索引

async function loadIndex() {
    try {
        console.log(`嘗試載入索引檔: ${indexFilePath}`);
        const indexJson = await fs.readFile(indexFilePath, 'utf-8');
        blogIndex = JSON.parse(indexJson);
        
        // 添加 URL 檢查和修正
        blogIndex = blogIndex.map(item => {
            if (item.url) {
                // 1. 移除 /ask/
                item.url = item.url.replace('/ask/', '/');
                
                // 2. 確保基礎 URL 正確
                if (!item.url.startsWith('https://')) {
                    item.url = `https://bear0103papa.github.io/Roger-s-Note${item.url}`;
                }
                
                // 3. 處理 Content 路徑
                if (!item.url.endsWith('/Content/')) {
                    // 移除可能的結尾斜線
                    item.url = item.url.replace(/\/$/, '');
                    // 添加 /Content/
                    item.url = `${item.url}/Content/`;
                }
            }
            return item;
        });
        
        console.log(`成功載入 ${blogIndex.length} 個內容區塊到記憶體索引。`);
    } catch (error) {
        console.error("錯誤：無法載入部落格索引檔 blog_index.json。", error);
        console.error("請確保在部署前執行了索引建立腳本 (npm run build:index 或 node build_index.js)。");
        blogIndex = [];
    }
}

// --- 輔助函數：尋找最相關的區塊 ---
async function findRelevantChunks(query, topN = 3) {
    if (blogIndex.length === 0) {
        console.warn("部落格索引為空，無法尋找相關區塊。");
        return [];
    }
    if (!query) {
        return [];
    }

    try {
        // 1. 產生查詢的 Embedding
        const queryEmbeddingResult = await embeddingModel.embedContent(query);
        const queryVector = queryEmbeddingResult.embedding.values;

        // 2. 計算相似度
        const similarities = blogIndex.map((item, index) => {
            // 確保 item.embedding 是有效的陣列
            if (!item.embedding || !Array.isArray(item.embedding)) {
                console.warn(`索引項目 ${index} 的 embedding 無效，跳過。`);
                return { score: -1, index: index }; // 給予最低分
            }
            try {
                const score = cosineSimilarity(queryVector, item.embedding);
                return { score: score, index: index };
            } catch (calcError) {
                console.warn(`計算索引 ${index} 的餘弦相似度時出錯: ${calcError.message}`);
                return { score: -1, index: index };
            }
        });

        // 3. 排序並取得 Top N
        similarities.sort((a, b) => b.score - a.score); // 降序排列

        const relevantDocs = similarities.slice(0, topN)
                                       .filter(sim => sim.score > 0.5) // 過濾掉相似度過低的結果 (閾值可調)
                                       .map(sim => blogIndex[sim.index]);

        console.log(`為查詢找到 ${relevantDocs.length} 個相關區塊 (Top ${topN}, Score > 0.5)。`);
        return relevantDocs;

    } catch (error) {
        console.error("尋找相關區塊時發生錯誤:", error);
        return []; // 出錯時回傳空陣列
    }
}

// --- API 端點：處理部落格問答 ---
app.post('/api/ask-blog', async (req, res) => {
    if (!apiKey) {
        return res.status(500).json({ error: '伺服器 API 金鑰未設定' });
    }
    if (blogIndex.length === 0) {
        return res.status(503).json({ error: '部落格索引尚未準備好，請稍後再試。' });
    }

    const { question } = req.body;
    if (!question) {
        return res.status(400).json({ error: '缺少 question 欄位' });
    }

    console.log('收到部落格問題:', question);

    try {
        // 1. 尋找相關內容區塊
        const relevantChunks = await findRelevantChunks(question, 30);

        // 2. 建構 Prompt
        let context = "提供的部落格內容：\n";
        let sourceUrls = []; // 改名為 sourceUrls

        if (relevantChunks.length > 0) {
            relevantChunks.forEach((chunk, i) => {
                context += `--- [來源 ${i+1}: ${chunk.title}] ---\n`;
                context += `${chunk.content}\n`;
                // 收集不重複的來源連結和標題
                if (!sourceUrls.some(s => s.url === chunk.url)) {
                    sourceUrls.push({ 
                        title: chunk.title, 
                        url: chunk.url.startsWith('https://') 
                            ? chunk.url 
                            : `https://bear0103papa.github.io/Roger-s-Note${chunk.url}`
                    });
                }
            });
        } else {
            context = "沒有找到直接相關的部落格內容。\n";
        }

        const prompt = `
請根據以下提供的部落格文章內容來回答使用者的問題。
請優先使用提供的內容進行回答。
如果提供的內容無法回答問題，請委婉地告知使用者，在提供的部落格文章中找不到相關資訊。
避免編造內容中沒有的資訊。

${context}
---
使用者問題：
${question}

回答：
`;

        console.log("--- 生成的 Prompt ---");
        console.log(prompt.substring(0, 500) + "..."); // 只顯示部分 Prompt
        console.log("--- ---");

        // 3. 呼叫 Google AI 生成回答
        const result = await generativeModel.generateContent(prompt);
        const response = await result.response;
        const answer = await response.text();

        console.log('Google AI 回應:', answer);

        // 4. 回傳結果給前端
        res.json({
            answer: answer,
            sources: sourceUrls // 使用已處理過的 sourceUrls
        });

    } catch (error) {
        console.error("處理 /api/ask-blog 時發生錯誤:", error);
        res.status(500).json({ error: '處理請求時發生內部錯誤' });
    }
});

// --- 原有的 /api/generate 端點 (保持不變) ---
app.post('/api/generate', async (req, res) => {
  if (!apiKey) {
      return res.status(500).json({ error: 'API 金鑰未設定' });
  }

  try {
    const { prompt } = req.body; // 從請求的 body 中取得 prompt

    if (!prompt) {
      return res.status(400).json({ error: '缺少 prompt 欄位' });
    }

    console.log('收到的 Prompt:', prompt); // 在後端日誌中顯示收到的 prompt

    // 呼叫 Google AI API
    const result = await generativeModel.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    console.log('Google AI 回應:', text); // 在後端日誌中顯示 AI 回應

    // 將 Google AI 的回應傳回給前端
    res.json({ generatedText: text });

  } catch (error) {
    console.error("Google AI API 呼叫失敗:", error);
    // 避免將詳細的錯誤資訊（可能包含敏感內容）直接傳給前端
    // 可以考慮記錄更詳細的錯誤在後端日誌
    if (error.message.includes('API key not valid')) {
        res.status(401).json({ error: 'Google AI API 金鑰無效或過期' });
    } else if (error.message.includes('429')) { // 額度限制
        res.status(429).json({ error: '達到 Google AI API 請求頻率或額度上限' });
    }
    else {
        res.status(500).json({ error: '呼叫 Google AI API 時發生內部錯誤' });
    }
  }
});

// --- 啟動伺服器 ---
// 將 loadIndex 放在 listen 前面，確保索引先載入
loadIndex().then(() => {
    app.listen(port, () => {
      console.log(`後端伺服器正在監聽 port ${port}`);
      if (blogIndex.length === 0) {
           console.warn("警告：伺服器已啟動，但部落格索引為空或載入失敗。RAG 功能將不可用。");
      }
    });
}).catch(error => {
    console.error("伺服器啟動失敗，無法載入索引:", error);
    process.exit(1); // 索引載入失敗則無法啟動
});
