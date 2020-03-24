module.exports = {
    siteMetadata: {
        title: 'Řemesla na Tvrzi rosické',
        edition: 'III',
        description: 'Přijeď se do Rosic naučit základy řemesla a vyrobit si svůj vlastní výrobek!',
        author: 'Tvrz',
        year: 2020,
        email: 'tvrz@tvrz.net',
        fbEventId: '568874620710092',
        fields: {
            name: 'entry.669259310',
            email: 'entry.2050101568',
            message: 'entry.2050101568',
        },
        prices: {
            base: 0,
            med: 300,
            korale: 400,
            tkani: 350,
            lucerna: 350,
            karetkyOpasek: 700,
            karetkyDrobne: 600,
            nuz: 700,
            pochva: 300,
        },
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Řemesla na Tvrzi rosické',
                short_name: 'Řemesla',
                start_url: '/',
                background_color: '#212529',
                theme_color: '#64a19d',
                display: 'minimal-ui',
                icon: 'src/images/favicon.png', // This path is relative to the root of the site.
            },
        },
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: [
                    'Varela Round',
                    'Nunito',
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: 'UA-139615876-1',
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'crafts',
                path: `${__dirname}/src/crafts`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'texts',
                path: `${__dirname}/src/texts`,
            }
        },
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: ['remark-czech-preprocessor'],
            },
        },
    ],
};
