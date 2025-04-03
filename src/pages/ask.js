// src/pages/ask.js
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Layout from '../components/layout'
import './ask.css'

const AskPage = () => {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [sources, setSources] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const backendAskUrl = 'https://roger-letter-back.onrender.com/api/ask-blog'

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!question.trim()) {
      alert('請輸入問題！')
      return
    }

    setIsLoading(true)
    setError('')
    setAnswer('')
    setSources([])

    try {
      const response = await fetch(backendAskUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: question.trim() })
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `請求失敗! 狀態: ${response.status}`)
      }

      const data = await response.json()
      setAnswer(data.answer || '抱歉，沒有收到回答。')
      setSources(data.sources || [])

    } catch (error) {
      console.error('呼叫問答 API 時發生錯誤:', error)
      setError(`發生錯誤: ${error.message}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Layout>
      <div className="ask-container">
        <h1>詢問部落格內容</h1>
        <p>輸入你想了解關於本部落格內容的問題，AI 會嘗試根據相關文章回答。</p>

        <form onSubmit={handleSubmit} className="ask-form">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows="4"
            placeholder="請輸入你的問題..."
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? '思考中...' : '送出問題'}
          </button>
        </form>

        {error && <div className="error-message">{error}</div>}

        {(answer || sources.length > 0) && (
          <div className="answer-section">
            <h2>回答：</h2>
            <div className="answer">
              <ReactMarkdown>{answer}</ReactMarkdown>
            </div>
            
            {sources.length > 0 && (
              <div className="sources">
                <h3>參考來源：</h3>
                <ol>
                  {sources.map((source, index) => (
                    <li key={index}>
                      <a href={source.url} target="_blank" rel="noopener noreferrer">
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default AskPage