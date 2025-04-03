import * as React from "react"
import { Link, graphql, navigate } from "gatsby"
import Layout from "../components/layout"

const Categories = ({ data, location }) => {
  const [searchTerm, setSearchTerm] = React.useState("")
  
  // 獲取所有唯一的分類
  const allCategories = Array.from(
    new Set(
      data.allMarkdownRemark.nodes.flatMap(
        node => node.frontmatter.categories || []
      )
    )
  ).sort()

  // 從 URL 獲取當前選中的分類
  const currentCategory = React.useMemo(() => {
    if (!location.hash) return ""
    try {
      return decodeURIComponent(location.hash.slice(1))
    } catch (e) {
      console.error("解碼分類失敗:", e)
      return ""
    }
  }, [location.hash])

  // 處理分類點擊
  const handleCategoryClick = (category) => {
    if (!category) {
      navigate(`/categories`)
    } else {
      navigate(`/categories#${encodeURIComponent(category)}`)
    }
  }

  // 過濾文章（根據分類和搜尋詞）
  const filteredPosts = data.allMarkdownRemark.nodes
    .filter(node => {
      // 先檢查分類
      const matchesCategory = !currentCategory || 
        (node.frontmatter.categories || []).some(cat => 
          cat === currentCategory
        )
      
      // 再檢查搜尋詞（包含全文搜尋）
      const searchTermLower = searchTerm.toLowerCase()
      const matchesSearch = !searchTerm || 
        node.frontmatter.title.toLowerCase().includes(searchTermLower) ||
        node.frontmatter.description?.toLowerCase().includes(searchTermLower) ||
        node.excerpt.toLowerCase().includes(searchTermLower) ||
        node.html.toLowerCase().includes(searchTermLower)
      
      return matchesCategory && matchesSearch
    })

  return (
    <Layout location={location} title="分類檢索">
      <div className="categories-container">
        {/* 搜索框 */}
        <div className="search-box">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="搜尋全文..."
            className="search-input"
          />
          {searchTerm && (
            <button 
              className="clear-search"
              onClick={() => setSearchTerm("")}
              aria-label="清除搜尋"
            >
              ×
            </button>
          )}
        </div>

        {/* 分類標籤 */}
        <div className="category-tags">
          <button
            className={!currentCategory ? "active" : ""}
            onClick={() => handleCategoryClick("")}
          >
            全部文章
          </button>
          {allCategories.map(category => (
            <button
              key={category}
              className={category === currentCategory ? "active" : ""}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 搜尋結果計數 */}
        <div className="search-results-count">
          找到 {filteredPosts.length} 篇文章
        </div>

        {/* 文章列表 */}
        <div className="posts-list">
          {filteredPosts.map(post => (
            <article key={post.fields.slug} className="post-list-item">
              <Link to={post.fields.slug}>
                <h2>{post.frontmatter.title}</h2>
                <small>{post.frontmatter.date}</small>
                {post.frontmatter.description && (
                  <p>{post.frontmatter.description}</p>
                )}
                {searchTerm && (
                  <p className="search-excerpt">
                    {post.excerpt}
                  </p>
                )}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Categories

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        excerpt(pruneLength: 200)
        html
        fields {
          slug
        }
        frontmatter {
          date(formatString: "YYYY-MM-DD")
          title
          description
          categories
        }
      }
    }
  }
` 