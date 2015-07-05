'use strict';

var config      = require('../config'),
	gulp        = require('gulp'),
	browserSync = require('browser-sync');

// Initialize browser-sync which starts a static server also allows for browsers to reload on filesave
gulp.task('browser-sync', function() {
	browserSync.init(['./dist/**/*'], {
		server: {
			baseDir: './dist',
		},
		port: config.serverport
		// Can't have both server and proxy, pick one.
		// proxy: {
		// 	target: 'http://site.dev'
		// }
	});
});
