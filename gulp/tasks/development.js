'use strict';

var gulp        = require('gulp'),
	runSequence = require('run-sequence');

// wait for clean and browser-sync before running sequence
gulp.task('default', ['clean', 'browser-sync'], function() {
	runSequence(
		'jekyll',
		// 'html', // for minification, reloads page 2x
		['uncss', 'css', 'vendor', 'js', 'images'],
		'watch',
		'sitemap',
		'info'
	);
});
