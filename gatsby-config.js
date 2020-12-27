const aliasImport = {
  resolve: `gatsby-plugin-alias-imports`,
  options: {
    alias: {
      '@assets': 'src/assets',
      '@components': 'src/components',
      '@layouts': 'src/layouts',
      '@pages': 'src/pages',
      '@utils': 'src/utils',
      '@images': 'src/assets/images',
      '@styledComponents': 'src/components/styledComponents',
      '@styles': 'src/assets/styles',
      '@config': 'src/config',
    },
    extensions: [],
  },
};

const styledComponent = {
  resolve: `gatsby-plugin-styled-components`,
  options: {
    displayName: true,//process.env.NODE_ENV === 'product' ? false : true,
    pure: true,
  },
};

const removeConsolePlugin = {
  resolve: 'gatsby-plugin-remove-console',
  options: {
    exclude: ['error'] 
  }
}

module.exports = {
  siteMetadata: {
    title: `Zomato React`,
    description: `A sample project to list resturants and filter them using Zomato APIs`,
    author: `@Belal-Mazlom`,
  },
  plugins: [
    aliasImport,
    styledComponent,
    removeConsolePlugin,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/app-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
