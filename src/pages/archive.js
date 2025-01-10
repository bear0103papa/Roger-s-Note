import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"

const ArchivePage = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const posts = data.allMarkdownRemark.nodes

  const filteredPosts = posts.filter(post => {
    const searchContent = `
      ${post.frontmatter.title} 
      ${post.frontmatter.date}
      ${post.frontmatter.categories?.join(" ")}
    `.toLowerCase()
    
    return searchContent.includes(searchTerm.toLowerCase())
  })

  return (
    <Layout>
      <div className="mb-6">
        <input
          type="text"
          placeholder="搜尋文章..."
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th>日期</th>
              <th>標題</th>
              <th>分類</th>
            </tr>
          </thead>
          <tbody>
            {filteredPosts.map(post => (
              <tr key={post.id}>
                <td>{post.frontmatter.date}</td>
                <td>
                  <Link to={post.fields.slug}>
                    {post.frontmatter.title}
                  </Link>
                </td>
                <td>
                  {post.frontmatter.categories?.map(category => (
                    <span key={category} className="category-tag">
                      {category}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default ArchivePage 