module.exports = {
  siteMetadata: {
    title: `Tinyman`,
    siteUrl: `https://tinyman.org/`,
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "UA-215302739-1", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-P8K9H2C",
        includeInDevelopment: false,
        defaultDataLayer: { platform: "gatsby" },
      },
    },
  ],
};
