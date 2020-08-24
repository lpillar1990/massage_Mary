const config = {
  siteMetadata: {
    title: "Mary Lynch Massage Therapist",
    description: "",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/assets/images`,
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: "/",
        icon: "src/assets/images/logo_new.png", // This path is relative to the root of the site.
      },
    },

    "gatsby-plugin-sass",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-176174776-1", // <- your tracking ID
      },
    },
  ],
};
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
module.exports = config;
