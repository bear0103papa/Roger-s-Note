// ask_script.js
const questionInput = document.getElementById('question-input');
const submitButton = document.getElementById('submit-button');
const loadingDiv = document.getElementById('loading');
const resultArea = document.getElementById('result-area');
const answerDiv = document.getElementById('answer');
const sourcesUl = document.querySelector('#sources ul');
const errorMessageDiv = document.getElementById('error-message');

// !! 重要 !! 將 'YOUR_RENDER_APP_URL' 換成你的 Render 服務 URL
const backendAskUrl = 'https://roger-letter-back.onrender.com/api/ask-blog'; // 例如: 'https://your-app-name.onrender.com/api/ask-blog'

submitButton.addEventListener('click', async () => {
    const question = questionInput.value.trim();
    if (!question) {
        alert('請輸入問題！');
        return;
    }

    // 重設 UI
    loadingDiv.style.display = 'block';
    resultArea.style.display = 'none';
    answerDiv.textContent = '';
    sourcesUl.innerHTML = ''; // 清空來源列表
    errorMessageDiv.textContent = '';
    submitButton.disabled = true;
    questionInput.disabled = true;

    try {
        const response = await fetch(backendAskUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question: question })
        });

        if (!response.ok) {
             let errorData;
             try {
                 errorData = await response.json();
             } catch (e) {
                 throw new Error(`伺服器錯誤! 狀態: ${response.status}`);
             }
             throw new Error(errorData.error || `請求失敗! 狀態: ${response.status}`);
        }

        const data = await response.json();

        // 顯示結果
        answerDiv.textContent = data.answer || '抱歉，沒有收到回答。'; // 處理空回答
        if (data.sources && data.sources.length > 0) {
            data.sources.forEach(source => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = source.url;
                a.textContent = source.title || source.url; // 如果沒標題就用 URL
                a.target = '_blank'; // 在新分頁開啟
                li.appendChild(a);
                sourcesUl.appendChild(li);
            });
            document.getElementById('sources').style.display = 'block';
        } else {
             document.getElementById('sources').style.display = 'none'; // 如果沒有來源就隱藏區塊
        }
        resultArea.style.display = 'block'; // 顯示結果區域

    } catch (error) {
        console.error('呼叫問答 API 時發生錯誤:', error);
        errorMessageDiv.textContent = `發生錯誤: ${error.message}`;
        resultArea.style.display = 'block'; // 即使錯誤也要顯示區域以展示錯誤訊息
        document.getElementById('sources').style.display = 'none'; // 隱藏來源
        answerDiv.textContent = ''; // 清空可能存在的舊答案
    } finally {
        // 無論成功或失敗都恢復 UI
        loadingDiv.style.display = 'none';
        submitButton.disabled = false;
        questionInput.disabled = false;
    }
});