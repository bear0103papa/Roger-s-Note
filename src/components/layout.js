import * as React from "react"
import { Link } from "gatsby"
import Navigation from "./navigation"
import "../style.css"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location?.pathname === rootPath

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <div className="site-title">
          <Link to="/">Roger's Note</Link>
          <div className="site-subtitle">Investor, Operator, Philosopher</div>
        </div>
        <nav className="site-nav">
          <ul>
            <li><Link to="/">首頁</Link></li>
            <li><Link to="/archive">文章歸檔</Link></li>
            <li><Link to="/categories">分類檢索</Link></li>
            <li><Link to="/ask">Ask AI</Link></li>
            <li><Link to="/rss.xml">訂閱 RSS</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout
