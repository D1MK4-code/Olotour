/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Olotour - przewozy za granicę",
    description:
      "Międzynarodowe przejazdy busem na trasie Polska-Niemcy-Belgia-Holandia. Obsługujemy województwa: Małopolskie, Śląskie, Opolskie, Dolnośląskie, Podkarpackie.",
    url: "https://olotour.pl/",
    image: "/olotour-v2.png",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/gallery/`,
      },
    },
  ],
}
