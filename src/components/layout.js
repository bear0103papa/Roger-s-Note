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
        <Navigation />
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        © {new Date().getFullYear()} Roger's Note
      </footer>
    </div>
  )
}

export default Layout
