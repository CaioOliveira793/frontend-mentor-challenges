/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	siteMetadata: {
		title: 'Countries Viewer Solution',
		siteUrl: 'https://caiooliveira793.github.io/frontend-mentor-challenges/countries-viewer/'
	},

	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sitemap`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		'gatsby-plugin-styled-components',
		{
      resolve: `gatsby-plugin-typescript`,
      options: {},
    },
		{
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Countries Viewer Solution`,
        short_name: `Countries Viewer`,
        start_url: `/`,
				icon: `static/favicon.ico`, // 512x512
        background_color: `#202C37`,
        theme_color: `#2B3945`,
        display: `standalone`,
      },
    },
		// {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {},
    // },
		{
			resolve: `gatsby-plugin-create-client-paths`,
			options: {
				prefixes: [`/countries/*`]
			}
		},
		{
			resolve: `gatsby-plugin-offline`,
			options: {}
		},
	],

	pathPrefix: `/frontend-mentor-challenges/countries-viewer`,
}
