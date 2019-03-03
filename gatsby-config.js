module.exports = {
    siteMetadata: {
      title: `Catatan Detik`,
    },
    plugins: ['gatsby-plugin-flow', 'gatsby-plugin-styled-components', 'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
  ],
}
