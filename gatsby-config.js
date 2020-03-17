const config = {
  siteMetadata: {
    title: 'Podium Ice Skate',
    description: '',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/assets/images`,
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: '/',
        icon: 'src/assets/images/favicon.png', // This path is relative to the root of the site.
      },
    },

    'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
  ],
}

module.exports = config
