module.exports = {
  siteMetadata: {
    title: 'Řemesla na Tvrzi rosické',
    edition: 'III',
    description: 'Přijeď se do Rosic naučit základy řemesla a vyrobit si svůj vlastní výrobek!',
    author: 'Tvrz',
    year: 2020,
    email: 'tvrz@tvrz.net',
    fbEventId: '846604542338267',
    fields: {
        name: 'entry.353496457',
        email: 'entry.1825108357',
        message: 'entry.241532143',
        photoAgreement: 'entry.1097476779',
    },
    prices: {
        base: 0,
        med: 525,
        korale: 600,
        tkani: 350,
        lucerna: 450,
        karetky: 450,
        nuz: 600,
        pochva: 400,
        prace: -300,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
