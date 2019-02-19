module.exports = {
    siteMetadata: {
      title: `Catatan Bambang`,
    },
    plugins: ['gatsby-plugin-flow', 'gatsby-plugin-styled-components', 'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "markdown-pages",
      },
    },
  ],
}
