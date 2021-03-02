module.exports = {
    siteMetadata: {
        title: `Hussein Abdulqohar`,
        description: `This is Hussein Abdulqohars' personal website`,
        author: `Hussein Abdulqohar`,
    },
    plugins: [
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-react-helmet`,
        {
          resolve: `gatsby-plugin-layout`,
          options: {
            component: require.resolve(`./src/components/layout.js`),
          },
        },
        {
          resolve: `gatsby-source-filesystem`,
          options: {
            name: `project`,
            path: `./src/data`,
          },
        },
        'gatsby-transformer-json',
         {
           resolve: `gatsby-source-filesystem`,
           options: {
             name: `images`,
             path: `${__dirname}/src/data/images`,
           },
         },
         {
          resolve: "gatsby-plugin-use-dark-mode",
          options: {
             classNameDark: "dark-mode",
             classNameLight: "light-mode",
             storageKey: "darkMode",
             minify: true,
          },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Hussein Abdulqohar portfolio website`,
              icon: `public/icons/favicon.png`,
              short_name: `Hussein portfolio`,
              description: `Husseins' personal website`,
              lang: `en`,
              display: `standalone`,
              start_url: `/`,
              background_color: `#663399`,
              theme_color: `#fff`,
              cache_busting_mode: `query`,
              localize: [
                    {
                        start_url: `/`,
                        lang: `en`,
                        name: `Hussein Abdulqohar`,
                        short_name: `moyohussein`,
                        description: `my personal website`,
                    },
                ],
            },
        },
    ]
}