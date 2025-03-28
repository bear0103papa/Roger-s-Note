import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Seo from "../components/seo"

const ArchivePage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Seo 
        title="文章歸檔" 
        description="Roger's Notes所有文章列表"
      />
      <div className="archive-container">
        <div className="table-responsive">
          <table className="archive-table">
            <thead>
              <tr>
                <th className="date-column">日期</th>
                <th className="title-column">標題</th>
                <th className="category-column">分類</th>
              </tr>
            </thead>
            <tbody>
              {posts.map(post => (
                <tr key={post.id}>
                  <td className="date-column">
                    {post.frontmatter.date}
                  </td>
                  <td className="title-column">
                    <Link to={post.fields.slug} className="post-link">
                      {post.frontmatter.title}
                    </Link>
                  </td>
                  <td className="category-column">
                    <div className="archive-tags">
                      {post.frontmatter.categories?.map(category => (
                        <Link 
                          key={category} 
                          to={`/categories#${encodeURIComponent(category)}`}
                          className="category-tag"
                        >
                          {category}
                        </Link>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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