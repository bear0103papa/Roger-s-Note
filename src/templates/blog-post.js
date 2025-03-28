import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LanguageToggle from "../components/LanguageToggle"
import TableOfContents from "../components/table-of-contents"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  // 添加錯誤檢查，確保 data 和 data.markdownRemark 存在
  if (!data || !data.markdownRemark) {
    return (
      <Layout location={location} title="Error">
        <p>無法加載文章數據。請稍後再試。</p>
      </Layout>
    )
  }

  const post = data.markdownRemark
  // 添加錯誤檢查，確保 data.site 存在
  const siteTitle = data?.site?.siteMetadata?.title || `YT翻譯`
  const { previous, next } = pageContext || {}
  const categories = post.frontmatter?.categories || []

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="blog-post-container">
        <article
          className="blog-post"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header className="post-header">
            <h1 className="post-title" itemProp="headline">
              {post.frontmatter.title}
            </h1>
            <p className="post-date">{post.frontmatter.date}</p>
            {categories && categories.length > 0 && (
              <div className="post-tags">
                {categories.map((category, index) => (
                  <React.Fragment key={category}>
                    <Link 
                      to={`/categories#${encodeURIComponent(category)}`}
                      className="post-tag"
                    >
                      {category}
                    </Link>
                    {index < categories.length - 1 && " "} {/* 移除逗號，改用空格 */}
                  </React.Fragment>
                ))}
              </div>
            )}
            {post.frontmatter.description && (
              <p className="post-description">
                {post.frontmatter.description}
              </p>
            )}
          </header>
          
          <LanguageToggle />
          
          <div className="post-content" dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
        </article>
        <TableOfContents headings={post.headings} />
      </div>
      <nav className="pagination">
        <div>
          {previous && (
            <Link to={previous.fields?.slug || "/"} rel="prev">
              ← {previous.frontmatter?.title || "上一篇"}
            </Link>
          )}
        </div>
        <div>
          {next && (
            <Link to={next.fields?.slug || "/"} rel="next">
              {next.frontmatter?.title || "下一篇"} →
            </Link>
          )}
        </div>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostById($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      headings {
        value
        depth
        id
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        categories
      }
    }
  }
`
