'use strict';

var gulp        = require('gulp'),
	runSequence = require('run-sequence');

gulp.task('prod', ['clean'], function(cb) {

	cb = cb || function() {};

	global.isProd = true;

	runSequence(
		'fileinclude',
		['css', 'js', 'images', 'watch'],
		'gzip',
		'browser-sync',
		cb
	);

});
