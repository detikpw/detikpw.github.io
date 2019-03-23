const path = require("path")
const URI = require("urijs");
const { createFilePath } = require(`gatsby-source-filesystem`);
const { ifElse, length, equals } = require('ramda');
const { paramCase } = require('change-case');

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
    ifElse(
      equals(3),
      () => createNodeField({
        node,
        name: 'category',
        value: pathUri.segment(0),
      }),
      () => createNodeField({
        node,
        name: 'category',
        value: '',
      })
    )(length(pathUri.segment()))
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/BlogPost.js`)
  const categoryPostTemplate = path.resolve(`src/templates/CategoryPost.js`)
  const tagPostTemplate = path.resolve(`src/templates/TagPost.js`)

  return graphql(`
    {
      primary: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {
          frontmatter: {published: {ne: false}}
        }
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
      secondary: allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
        filter: {
          frontmatter: {published: {ne: false}}
        }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.primary.edges.forEach(({ node }) => {
      const pathname = node.fields.path;
      createPage({
        path: pathname,
        component: blogPostTemplate,
        context: { pathname }, // additional data can be passed via context
      })
    })
    result.data.primary.group.forEach(({ fieldValue }) => {
      createPage({
        path: `/${fieldValue}`,
        component: categoryPostTemplate,
        context: { category: fieldValue }
      })
    })
    result.data.secondary.group.forEach(({ fieldValue }) => {
      createPage({
        path: `/tags/${paramCase(fieldValue)}`,
        component: tagPostTemplate,
        context: { tag: fieldValue }
      })
    })
  })
}
