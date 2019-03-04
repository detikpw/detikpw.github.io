const path = require("path")
const URI = require("urijs");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const path = createFilePath({ node, getNode, basePath: `posts` })
    const pathUri = new URI(path);
    createNodeField({
      node,
      name: 'path',
      value: path,
    })
    createNodeField({
      node,
      name: 'category',
      value: pathUri.segment(0),
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/BlogPost.js`)
  const categoryPostTemplate = path.resolve(`src/templates/CategoryPost.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        group(field: fields___category) {
          fieldValue
        }
        edges {
          node {
            fields {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.path,
        component: blogPostTemplate,
        context: { }, // additional data can be passed via context
      })
    })
    result.data.allMarkdownRemark.group.forEach(({ fieldValue }) => {
      createPage({
        path: `/${fieldValue}`,
        component: categoryPostTemplate,
        context: { category: fieldValue }
      })
    })
  })
}
