import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import CategoryTags from "../components/category-tags"
import TableOfContents from "../components/table-of-contents"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const { previous, next } = data
  const { categories } = post.frontmatter

  return (
    <Layout location={location}>
      <div className="blog-post-container">
        <article className="blog-post">
          <header>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
            <CategoryTags categories={categories} />
            {post.frontmatter.description && (
              <p className="post-description">
                {post.frontmatter.description}
              </p>
            )}
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
        </article>
        <TableOfContents headings={post.headings} />
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      headings {
        id
        value
        depth
      }
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        categories
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

export default BlogPostTemplate
