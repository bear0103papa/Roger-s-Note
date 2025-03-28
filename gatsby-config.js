/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/Roger-s-Note",
  siteMetadata: {
    title: `Roger's Note`,
    author: {
      name: `Roger`,
    },
    description: `Investor, Operator, Philosopher`,
    siteUrl: `https://bear0103papa.github.io`,
    social: {
      twitter: ``,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              withWebp: true,
              quality: 80,
              showCaptions: true,
              backgroundColor: 'transparent',
              loading: 'lazy',
              disableBgImageOnAlpha: true,
              wrapperStyle: fluidResult => `margin: 2rem auto;`,
            },
          },
          // {
          //   resolve: `gatsby-remark-images-zoom`,
          //   options: {
          //     background: 'rgba(0,0,0,0.9)',
          //   }
          // },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "目錄",
              tight: false,
              ordered: false,
              fromHeading: 1,
              toHeading: 6,
              className: "table-of-contents"
            },
          },
          // {
          //   resolve: `gatsby-remark-custom-blocks`,
          //   options: {
          //     blocks: {
          //       bilingual: {
          //         classes: `bilingual`,
          //       },
          //       chinese: {
          //         classes: `chinese`,
          //       },
          //       english: {
          //         classes: `english`,
          //       },
          //     },
          //   },
          // },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.fields.slug,
                  guid: site.siteMetadata.siteUrl + node.fields.slug,
                  custom_elements: [{ "content:encoded": node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } },
                ) {
                  nodes {
                    excerpt
                    html
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Roger's Note RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Roger's Note`,
        short_name: `Roger's Note`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#005b99`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.jpg`,
      },
    },
    {
      resolve: `gatsby-plugin-local-search`,
      options: {
        name: `posts`,
        engine: `flexsearch`,
        engineOptions: {
          tokenize: 'forward'
        },
        query: `
          {
            allMarkdownRemark {
              nodes {
                id
                frontmatter {
                  title
                  date(formatString: "YYYY-MM-DD")
                  categories
                }
                fields {
                  slug
                }
              }
            }
          }
        `,
        ref: `id`,
        index: [`title`, `categories`],
        store: [`title`, `date`, `slug`, `categories`],
        normalizer: ({ data }) =>
          data.allMarkdownRemark.nodes.map(node => ({
            id: node.id,
            title: node.frontmatter.title,
            date: node.frontmatter.date,
            categories: node.frontmatter.categories,
            slug: node.fields.slug,
          })),
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Sans TC\:400,700`
        ],
        display: 'swap'
      }
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://bear0103papa.github.io/Roger-s-Note',
        sitemap: 'https://bear0103papa.github.io/Roger-s-Note/sitemap/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ],
}
