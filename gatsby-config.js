module.exports = {
  siteMetadata: {
    title: `Kim Niedermaier`,
    siteUrl: `https://www.kimniedermaier.com`,
    description: `Kim's corner of the internet`,
    author: `Kim Niedermaier`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`
  ]
};
