import React from "react"
import { Link } from "gatsby"
import './navigation.css'

const Navigation = () => {
  return (
    <nav className="site-navigation">
      <ul className="nav-links">
        <li><Link to="/" activeClassName="active">首頁</Link></li>
        <li><Link to="/archive" activeClassName="active">文章歸檔</Link></li>
        <li><Link to="/categories" activeClassName="active">分類檢索</Link></li>
        <li className="rss-link">
          <a
            href="/rss.xml"
            target="_blank"
            rel="noopener noreferrer"
            className="rss-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
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
            <span>訂閱 RSS</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation 