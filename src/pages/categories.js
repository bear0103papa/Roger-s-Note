import * as React from "react"
import { Link, graphql, navigate } from "gatsby"
import Layout from "../components/layout"

const Categories = ({ data, location }) => {
  // 獲取所有唯一的分類
  const allCategories = Array.from(
    new Set(
      data.allMarkdownRemark.nodes.flatMap(
        node => node.frontmatter.categories || []
      )
    )
  ).sort()

  // 從 URL 獲取當前選中的分類
  const currentCategory = location.hash.slice(1).replace(/%20/g, " ")

  // 處理分類點擊
  const handleCategoryClick = (category) => {
    navigate(`/categories/#${category.replace(/ /g, "%20")}`)
  }

  // 過濾當前分類的文章
  const filteredPosts = currentCategory
    ? data.allMarkdownRemark.nodes.filter(
        node => node.frontmatter.categories?.includes(currentCategory)
      )
    : data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title="分類檢索">
      <div className="categories-container">
        {/* 搜索框 */}
        <input
          type="text"
          placeholder="搜尋文章..."
          className="search-input"
        />

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