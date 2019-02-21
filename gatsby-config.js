module.exports = {
  siteMetadata: {
    title: `Frontend Dev`,
    description: `Gabriel Vial aka rotcl: Padre, Programador, Guitarrista, Gamer; desarrollador front end enfocado al mundo del eCommerce y desarrollo web profesional.`,
    author: `rotcl`,
    fullName: `Gabriel Vial`,
    wpformsHandle: `https://google.com`,
    twitterHandle: `https://twitter.com/_rotcl`,
    gitlabHandle: `https://gitlab.com/rotcl`,
    stackOverflowHandle: `https://stackoverflow.com/story/rotcl`,
    devToHandle: `https://dev.to/rclot`,
    mediumHandle: `https://medium.com/@gabriel.vial`,
    linkedInHandle: `https://www.linkedin.com/in/gabriel-v/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },
    `gatsby-transformer-javascript-frontmatter`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#5badf0`,
        theme_color: `#5badf0`,
        display: `minimal-ui`,
        icon: `src/images/ir_logo2.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-127729436-2',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },
  ],
}
