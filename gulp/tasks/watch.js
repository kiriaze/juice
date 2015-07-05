'use strict';

var config        = require('../config'),
	gulp          = require('gulp'),
	browserSync   = require('browser-sync'),
	path          = require('path'),
	reload        = browserSync.reload;


// Watch these files for changes and run the task on update
gulp.task('watch', ['browser-sync'], function() {

	// watch task for gulp-file-include
	gulp.watch('./src/**/*.html', ['fileinclude'], reload);

	// reminify html in dist dir
	gulp.watch('./dist/**/*.html', ['html'], reload);

	// Watch Sass files
	gulp.watch(config.styles.src, ['uncss', 'css'], reload);

	// Watch JS files
	gulp.watch(config.scripts.src, ['js'], reload);

	// Watch image files
	gulp.watch(config.images.src, ['images'], reload);

});
