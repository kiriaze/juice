'use strict';

var config        = require('../config'),
	gulp          = require('gulp'),
	browserSync   = require('browser-sync'),
	path          = require('path'),
	reload        = browserSync.reload;


// Watch these files for changes and run the task on update
gulp.task('watch', ['browser-sync'], function() {

	// watch task for gulp-file-include
	gulp.watch(path.join('./source/', '**/*.html'), ['fileinclude']);

	// Watch Sass files
	gulp.watch(config.styles.src, ['css'], reload);

	// Watch JS files
	gulp.watch(config.scripts.src, ['js'], reload);

	// Watch image files
	gulp.watch(config.images.src, ['images'], reload);

});
