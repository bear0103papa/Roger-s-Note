import React from "react"
import { Link } from "gatsby"

const Navigation = () => {
  return (
    <nav className="site-navigation">
      <ul className="nav-links">
        <li>
          <Link to="/">首頁</Link>
        </li>
        <li>
          <Link to="/archive">文章歸檔</Link>
        </li>
        <li>
          <Link to="/categories">分類檢索</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation 