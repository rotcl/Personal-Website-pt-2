const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)
import fs from 'fs-extra-promise'
import sm from 'sitemap' 

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src', 'components'),
        '@styles': path.resolve(__dirname, 'src', 'styles'),
      },
    },
  })
}

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}

function pagesToSitemap(pages) {
  const urls = pages.map((p) => {
    if (p.path !== undefined) {
      return {
        url: p.path,
        changefreq: 'daily',
        priority: 0.7
      }
    }
  })
  // remove undefined (template pages)
  return urls.filter(u => u !== undefined)
}

function generateSiteMap(pages) {
  const sitemap = sm.createSitemap({
    hostname: 'https://www.example.com',
    cacheTime: '60000',
    urls: pagesToSitemap(pages),
  })
  console.log('Generating sitemap.xml')
  fs.writeFileSync(
    `${__dirname}/public/sitemap.xml`,
    sitemap.toString()
  )
}

export function postBuild(pages, callback) {
  generateSiteMap(pages)
  callback()
}