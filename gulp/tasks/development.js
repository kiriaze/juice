'use strict';

var gulp        = require('gulp'),
	runSequence = require('run-sequence');

// wait for clean and browser-sync before running sequence
gulp.task('default', ['clean', 'browser-sync'], function() {
	runSequence(
		'js',
		'images',
		'video',
		'fonts',
		'watch',
		'sitemap',
		'info'
	);
});
