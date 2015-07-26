'use strict';

var gulp        = require('gulp'),
	runSequence = require('run-sequence');

gulp.task('prod', ['clean', 'browser-sync'], function(cb) {

	cb = cb || function() {};

	global.isProd = true;

	runSequence(
		'uncss',
		'js',
		'images',
		'video',
		'fonts',
		'sitemap',
		'gzip',
		'info',
		cb
	);

});
