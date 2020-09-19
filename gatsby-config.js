require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Mónaco automotores`,
    brand: `Mónaco`,
    address: `Junin 31 - Salta - Argentina`,
    instagram: "https://www.instagram.com/monacoautomotoresok/",
    facebook: "https://www.facebook.com/monacoautomotoresok",
    whatsapp: "+5493874138188",
    // Generate whatsapp message here: https://create.wa.link/
    whatsappApiLink:
      "https://wa.link/31g45o",
    phone: "+5493876207082",
    contactEmail: "monaco@gmail.com",
    description: `Sitio web de Mónaco automotores, la concesionaria de vehiculos nuevos y usados pionera en plataformas digitales del NOA. Encontrá las mejores ofertas, financiación y publica tus usados!`,
    author: `@sebasegura97`,
  },
  plugins: [
    `gatsby-theme-material-ui`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -80,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          omitKeys: [
            "xmlnsDc",
            "xmlnsCc",
            "xmlnsRdf",
            "xmlnsSvg",
            "xmlnsSodipodi",
            "xmlnsInkscape",
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mónaco`,
        short_name: `monaco`,
        start_url: `/`,
        background_color: `#2B2D42`,
        theme_color: `#EDF2F4`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // As we are working with gatsby-plugin-manifest
    // gatsby-plugin-offline must to be after it.
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `q49lzrbice5t`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Bebas Neue"],
        },
      },
    },
  ],
}
