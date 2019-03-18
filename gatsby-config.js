module.exports = {
	siteMetadata: {
		title: `New Media Club Website`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
		{
			// initializing a plugin
			resolve: 'gatsby-source-filesystem',
			// giving it a path and name as to where the files will be
			options: {
				path: `${__dirname}/src/`,
				name: 'pages',
			}
		},
		'gatsby-transformer-remark',
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// replace "UA-XXXXXXXXX-X" with your own Tracking ID
				trackingId: "UA-90541343-4",
			},
		},
	],
}
