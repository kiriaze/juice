'use strict';

var gulp 	= require('gulp'),
	rsync	= require('gulp-rsync');

// Usage:

gulp.task('deploy', ['prod'], function() {

	// return gulp.src(['./source/**'])
	// 	.pipe(rsync({
	// 		root: './source',
	// 		hostname: '',
	// 		username: '',
	// 		password: '',
	// 		destination: 'public_html',
	// 		incremental: true,
	// 		exclude: []
	// 	}));

});
