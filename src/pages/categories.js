import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const CategoriesPage = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  
  const posts = data.allMarkdownRemark.nodes
  const categories = Array.from(
    new Set(
      posts.flatMap(post => post.frontmatter.categories || [])
    )
  )

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (hash && categories.includes(decodeURIComponent(hash))) {
      setActiveCategory(decodeURIComponent(hash))
    }
  }, [categories])

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.frontmatter.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const matchesCategory = 
      activeCategory === "all" || 
      post.frontmatter.categories?.includes(activeCategory)
    
    return matchesSearch && matchesCategory
  })

  return (
    <Layout>
      <div className="filter-section">
        <input
          type="text"
          placeholder="搜尋文章..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
        
        <div className="category-filters">
          <button
            onClick={() => setActiveCategory("all")}
            className={`filter-btn ${activeCategory === "all" ? "active" : ""}`}
          >
            全部文章
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`filter-btn ${activeCategory === category ? "active" : ""}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="posts-container">
        {filteredPosts.map(post => (
          <div key={post.id} className="post-item">
            <a href={post.fields.slug}>{post.frontmatter.title}</a>
            <span className="post-date">{post.frontmatter.date}</span>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          title
          date(formatString: "YYYY-MM-DD")
          categories
        }
      }
    }
  }
`

export default CategoriesPage 