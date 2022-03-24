module.exports = {
  siteMetadata: {
      title: `Tinyman`,
    siteUrl: `https://tinyman.org/`
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve("./src/components/Layout.js"),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Tinyman",
        short_name: "Tinyman",
        start_url: "/",
        display: "minimal-ui",
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-MZMGQ9K",
        includeInDevelopment: true,
        defaultDataLayer: { platform: "gatsby" }
      },
    },
  ]
};