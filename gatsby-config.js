// support for .env, .env.development, and .env.production
require("dotenv").config()
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://gatsbycontentfulhomepage.gatsbyjs.io/",
    title: "MysticRoots Contentful Homepage",
    author: `Varun Srivatsa`,
    description: "MysticRoots homepage with Contentful CMS",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        downloadLocal: true,
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST,
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: `blurred`,
          quality: "100",
        },
      },
    },
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-vanilla-extract",
    "gatsby-theme-contentful-blog",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "MysticRoots Contentful Homepage",
        short_name: "MysticRoots",
        start_url: "/",
        // These can be imported once ESM support lands
        background_color: "#ffe491",
        theme_color: "#004ca3",
        icon: "src/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -90,
      },
    },
  ],
}
