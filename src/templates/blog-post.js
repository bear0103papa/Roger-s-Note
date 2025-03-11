import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import CategoryTags from "../components/category-tags"
import TableOfContents from "../components/table-of-contents"
import rehypeReact from "rehype-react"

// 創建自定義組件來處理雙語內容
const Bilingual = ({ children }) => {
  // 尋找中文和英文內容
  const chineseContent = children.find(child => child.props && child.props.className === 'chinese')
  const englishContent = children.find(child => child.props && child.props.className === 'english')
  
  return (
    <div className="bilingual-container">
      <div className="bilingual-column chinese-column">
        {chineseContent}
      </div>
      <div className="bilingual-column english-column">
        {englishContent}
      </div>
    </div>
  )
}

const Chinese = ({ children }) => <div className="chinese">{children}</div>
const English = ({ children }) => <div className="english">{children}</div>

// 創建自定義渲染器
const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "bilingual": Bilingual,
    "chinese": Chinese,
    "english": English,
  },
}).Compiler

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
          {/* 使用自定義渲染器渲染內容 */}
          <section
            className="post-content"
            itemProp="articleBody"
          >
            {renderAst(post.htmlAst)}
          </section>
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
      htmlAst
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
