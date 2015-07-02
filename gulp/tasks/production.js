'use strict';

var gulp        = require('gulp'),
	runSequence = require('run-sequence');

gulp.task('prod', ['clean'], function(cb) {

	cb = cb || function() {};

	global.isProd = true;

	runSequence(
		'fileinclude',
		'html',
		['css', 'js', 'vendor', 'images', 'watch'],
		'gzip',
		'info',
		'browser-sync',
		cb
	);

});
