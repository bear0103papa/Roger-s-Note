require('dotenv').config(); // 確保可以讀取到 API Key
const fs = require('fs').promises; // 使用 Promise 版本的 fs
const path = require('path');
const glob = require('glob');
const matter = require('gray-matter'); // 解析 Markdown Front Matter
const { GoogleGenerativeAI, TaskType } = require('@google/generative-ai');
const { remark } = require('remark');
const { toString: mdastUtilToString } = require('mdast-util-to-string');

// --- 設定 ---
const contentDir = path.join(__dirname, '..', 'content', 'blog'); // 部落格內容相對路徑
const outputIndexFile = path.join(__dirname, 'blog_index.json'); // 輸出的索引檔
// !!重要!! 請換成你的部落格實際的基礎 URL
const blogBaseUrl = 'https://bear0103papa.github.io/Roger-s-Note/ask'; // 例如: https://rogerchen.github.io/my-blog
const maxChunkSize = 500; // 將文章切分成大約多少字符的區塊 (可調整)
const embeddingModelName = "models/embedding-001"; // Google AI 的 Embedding 模型
// --- ---

const apiKey = process.env.GOOGLE_AI_API_KEY;
if (!apiKey) {
  console.error("錯誤：建立索引需要 GOOGLE_AI_API_KEY 環境變數。");
  process.exit(1);
}
const genAI = new GoogleGenerativeAI(apiKey);
const embeddingModel = genAI.getGenerativeModel({ model: embeddingModelName });

// 將 Markdown 轉為純文字的函數 (更新版)
async function markdownToText(markdownContent) {
  // 建立 remark 處理器 (remark-parse 是預設 parser)
  const processor = remark();
  // 解析 Markdown 成語法樹 (AST)
  const tree = processor.parse(markdownContent);
  // 從語法樹提取純文字
  const text = mdastUtilToString(tree);
  return text;
}

// 將文字切分成區塊的函數
function chunkText(text, chunkSize) {
  const chunks = [];
  let currentChunk = '';
  // 簡單以句子或段落邊界切分，避免截斷詞語中間
  const sentences = text.split(/([.!?\n]+)/); // 按標點或換行分割，保留分隔符

  for (let i = 0; i < sentences.length; i += 2) {
      const sentence = sentences[i] + (sentences[i+1] || ''); // 合併句子和後面的分隔符
      if (currentChunk.length + sentence.length <= chunkSize) {
          currentChunk += sentence;
      } else {
          // 如果當前區塊非空，則儲存
          if (currentChunk.trim()) {
              chunks.push(currentChunk.trim());
          }
          // 如果句子本身就超過大小，則強制分割 (或作為一個獨立區塊)
          if (sentence.length > chunkSize) {
              // 可以進一步細分長句子，但我們先直接加入
              chunks.push(sentence.trim());
              currentChunk = '';
          } else {
             currentChunk = sentence; // 開始新的區塊
          }
      }
  }
  // 加入最後一個區塊
  if (currentChunk.trim()) {
      chunks.push(currentChunk.trim());
  }
  return chunks;
}

// 產生 Embedding 的函數 (加入錯誤處理和延遲)
async function getEmbedding(text, retries = 3, delay = 1000) {
    for (let i = 0; i < retries; i++) {
        try {
            const result = await embeddingModel.embedContent({
                content: { parts: [{ text: text }] }, // 使用標準的 Content 格式
                taskType: TaskType.RETRIEVAL_DOCUMENT // 指定任務類型為文件檢索
            });
            if (result && result.embedding && result.embedding.values) {
                 return result.embedding.values;
            } else {
                throw new Error('Embedding result is missing embedding values.');
            }
        } catch (error) {
            console.warn(`產生 Embedding 失敗 (嘗試 ${i + 1}/${retries}): ${error.message}`);
            if (error.message && (error.message.includes('API key not valid') || error.message.includes('PERMISSION_DENIED'))) {
                console.error("Google AI API 金鑰無效或權限不足。請檢查環境變數。");
                return null;
            }
            if (error.message && error.message.includes('429')) {
                console.warn("達到請求頻率上限，增加延遲時間...");
                delay = (delay < 10000) ? 10000 : delay * 2;
            }
            if (i < retries - 1) {
                console.log(`等待 ${delay / 1000} 秒後重試...`);
                await new Promise(resolve => setTimeout(resolve, delay));
                delay *= 2;
            } else {
                console.error("多次重試後 Embedding 仍然失敗:", text.substring(0, 100) + "...");
                return null;
            }
        }
    }
}

async function buildIndex() {
  console.log("開始建立部落格內容索引...");
  const markdownFiles = glob.sync(path.join(contentDir, '**/*.md').replace(/\\/g, '/')); // 確保路徑格式兼容
  console.log(`找到 ${markdownFiles.length} 個 Markdown 檔案。`);

  const indexData = [];
  let processedFiles = 0;
  let failedEmbeddings = 0;

  for (const filePath of markdownFiles) {
    try {
      console.log(`處理檔案: ${filePath}`);
      const fileContent = await fs.readFile(filePath, 'utf-8');
      const { data: frontmatter, content: markdownContent } = matter(fileContent); // 解析 frontmatter

      const title = frontmatter.title || path.basename(filePath, '.md'); // 使用 frontmatter 的標題，否則用檔名

      // --- 從檔案路徑推斷 URL ---
      // 移除 contentDir 部分和 .md 副檔名
      let relativePath = path.relative(contentDir, filePath);
      // 移除檔名部分，只保留到資料夾
      relativePath = path.dirname(relativePath);
      // 將反斜線轉換為正斜線 (用於 URL)
      const slugPath = relativePath.replace(/\\/g, '/');
      const url = `${blogBaseUrl}/${slugPath}/`; // 組合 URL
      // --- ---

      console.log(`  標題: ${title}`);
      console.log(`  URL: ${url}`);

      const plainText = await markdownToText(markdownContent);
      const chunks = chunkText(plainText, maxChunkSize);
      console.log(`  切分成 ${chunks.length} 個區塊。`);

      for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        if (!chunk) continue; // 跳過空區塊

        const embedding = await getEmbedding(chunk);

        if (embedding) {
          indexData.push({
            url: url,
            title: title,
            content: chunk,
            embedding: embedding,
          });
        } else {
            failedEmbeddings++;
            console.warn(`    => 無法產生區塊 ${i + 1} 的 Embedding。`);
        }
      }
      processedFiles++;

    } catch (error) {
      console.error(`處理檔案 ${filePath} 時發生錯誤:`, error);
    }
  }

  console.log(`\n索引建立完成。共處理 ${processedFiles} 個檔案。`);
  if (failedEmbeddings > 0) {
      console.warn(`有 ${failedEmbeddings} 個內容區塊的 Embedding 產生失敗。`);
  }
  console.log(`總共產生 ${indexData.length} 個包含 Embedding 的內容區塊。`);

  // 將索引寫入 JSON 檔案
  try {
    await fs.writeFile(outputIndexFile, JSON.stringify(indexData, null, 2)); // 格式化輸出便於查看
    console.log(`索引已儲存到: ${outputIndexFile}`);
  } catch (error) {
    console.error("儲存索引檔時發生錯誤:", error);
  }
}

buildIndex();
