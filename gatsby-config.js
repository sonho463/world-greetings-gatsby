/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
    title: "世界のあいさつ",
    url: "https://world-greetongs.netlify.app",
    siteUrl: "https://world-greetongs.netlify.app",
    titleTemplate: "%s · The Real Hero",
    description:
      "世界のあいさつのお手本を聞くことができます。",
    image: "/og_image.jpg",
    twitterUsername: "@horumont",
  },

  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.MICROCMS_API_KEY,
        serviceId: process.env.MICROCMS_SERVICE_ID,
        apis: [
          {
            endpoint: "greeting-words",
          },
          {
            endpoint: "country",
          },
          {
            endpoint: "greetings",
          },
        ],
      },
    },
		{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "世界のあいさつ",
        short_name: "せかはろ",
        start_url: "/",
        // background_color: "#ffea18",
        // theme_color: "#5155c0",
        display: "standalone",
        icon: "favicon.png",
      },
    },
		`gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
		`gatsby-plugin-sass`,
		"gatsby-plugin-react-helmet",
		`gatsby-plugin-offline`,

  ],
}
