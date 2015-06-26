'use strict';

var gulp 	= require('gulp'),
	rsync	= require('gulp-rsync');

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