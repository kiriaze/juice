'use strict';

var gulp        = require('gulp'),
	runSequence = require('run-sequence');

gulp.task('default', ['clean'], function() {
	runSequence(
		'fileinclude',
		'html',
		['css', 'js', 'images', 'watch'],
		'info'
	);
});
