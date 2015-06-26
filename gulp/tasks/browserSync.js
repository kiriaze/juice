'use strict';

var config      = require('../config');
var browserSync = require('browser-sync');
var gulp        = require('gulp');

// Initialize browser-sync which starts a static server also allows for browsers to reload on filesave
gulp.task('browser-sync', function() {
	browserSync.init(['./public/**/*'], {
		server: {
			baseDir: "./public"
		}
	});
});