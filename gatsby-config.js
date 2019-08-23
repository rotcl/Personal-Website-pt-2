module.exports = {
  siteMetadata: {
    title: `Frontend Dev`,
    description: `Gabriel Vial aka rotcl: Padre, Programador, Guitarrista, Gamer; desarrollador front end enfocado al mundo del eCommerce y desarrollo web profesional.`,
    author: `rotcl`,
    fullName: `Gabriel Vial`,
    wpformsHandle: `/resume`,
    twitterHandle: `https://twitter.com/_rotcl`,
    githubHandle: `https://github.com/rotcl`,
    gitlabHandle: `https://gitlab.com/rotcl`,
    stackOverflowHandle: `https://stackoverflow.com/story/rotcl`,
    devToHandle: `https://dev.to/rclot`,
    mediumHandle: `https://medium.com/@gabriel.vial`,
    linkedInHandle: `https://www.linkedin.com/in/gabriel-v/`,
    siteUrl: `https://irot.ml`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/some-other-sitemap.xml`,
        exclude: [`/404`],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
   
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#e1ae00`,
        // Disable the loading spinner.
        showSpinner: false,
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://irot.ml',
        sitemap: 'https://www.irot.ml/some-other-sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-javascript-frontmatter`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#5badf0`,
        theme_color: `#5badf0`,
        display: `minimal-ui`,
        icon: `src/images/ir_logo2.png`, // This path is relative to the root of the site.
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
    `gatsby-plugin-offline`,
  ],
}
