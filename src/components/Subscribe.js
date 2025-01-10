import React from 'react'

const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <a 
        href="/rss.xml" 
        target="_blank" 
        rel="noopener noreferrer"
        className="rss-button"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="rss-icon"
        >
          <path d="M4 11a9 9 0 0 1 9 9" />
          <path d="M4 4a16 16 0 0 1 16 16" />
          <circle cx="5" cy="19" r="1" />
        </svg>
        訂閱 RSS
      </a>
    </div>
  )
}

export default Subscribe 