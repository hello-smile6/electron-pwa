module.exports = {
	globDirectory: 'src/',
	globPatterns: [
		'**/*.{html,js}'
	],
	swDest: 'src/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};