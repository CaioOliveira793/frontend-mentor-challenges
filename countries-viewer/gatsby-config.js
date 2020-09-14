/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	/* Your site config here */
	plugins: [
		'gatsby-plugin-styled-components',
		{
      resolve: `gatsby-plugin-typescript`,
      options: {},
    },
		{
			resolve: `gatsby-plugin-create-client-paths`,
			options: {
				prefixes: [`/countries/*`]
			}
		}
	],
}
