'use strict';

module.exports = {

	'serverport': 3000,

	// URL TO YOUR SITEMAP.XML
	'sitemapURL': 'http://path-to-sitemap.com/sitemap.xml',

	// Google pagespeed
	'URL'       : 'http://EXAMPLE.com',
	'strategy'  : 'mobile',

	'styles': {
		'src' : 'src/assets/scss',
		'dest': 'dist/assets/css'
	},

	'scripts': {
		'src' : 'src/assets/js/**/*.js',
		'dest': 'dist/assets/js'
	},

	'vendorjs':   'src/assets/js/vendor/**/*.js',

	'images': {
		'src' : 'src/assets/images/**/*.{png,jpg,jpeg,gif,svg,ico}',
		'dest': 'dist/assets/images'
	},

	'fonts': {
		'src' : ['src/assets/fonts/**/*'],
		'dest': 'dist/assets/fonts'
	},

	'gzip': {
		'src': 'src/**/*.{html,xml,json,css,js,js.map}',
		'dest': 'dist/',
		'options': {}
	},

	'dist': {
		'root'  : 'dist'
	}

};
