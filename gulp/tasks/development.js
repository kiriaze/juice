'use strict';

var gulp        = require('gulp'),
	runSequence = require('run-sequence');

// Default task: rename to build for seo function to run
gulp.task('default', ['clean'], function() {
	runSequence(
		'fileinclude',
		'html',
		['css', 'js', 'images', 'watch']
	);
});