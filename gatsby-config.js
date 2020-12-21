module.exports = {
  siteMetadata: {
    title: "Sarah & Dave 17 July 21",
    author: "Dave",
    description: "Sarah & Dave 17 July 21"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Sarah & Dave 17 July 21',
        short_name: 'Sarah & Dave',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
