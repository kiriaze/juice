'use strict';

module.exports = {

	'serverport': 3000,

	// URL TO YOUR SITEMAP.XML
	'sitemapURL': 'http://path-to-sitemap.com/sitemap.xml',

	// Google pagespeed
	'URL'       : 'http://EXAMPLE.com',
	'strategy'  : 'mobile',

	'styles': {
		'src' : 'source/assets/scss',
		'dest': 'public/assets/css'
	},

	'scripts': {
		'src' : 'source/assets/js/**/*.js',
		'dest': 'public/assets/js'
	},

	'vendorjs':   'source/assets/js/vendor/**/*.js',

	'images': {
		'src' : 'source/assets/images/**/*.{png,jpg,jpeg,gif,svg,ico}',
		'dest': 'public/assets/images'
	},

	'fonts': {
		'src' : ['source/assets/fonts/**/*'],
		'dest': 'public/assets/fonts'
	},

	'gzip': {
		'src': 'source/**/*.{html,xml,json,css,js,js.map}',
		'dest': 'public/',
		'options': {}
	},

	'dist': {
		'root'  : 'public'
	}

};
