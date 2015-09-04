'use strict';

var config      = require('../../config'),
	gulp        = require('gulp'),
	path        = require('path'),
	data        = require('gulp-data'),
	jade        = require('gulp-jade'),
	concat      = require('gulp-concat'),
	browserSync = require('browser-sync');

gulp.task('styleguide', function() {
	return gulp.src('./src/styleguide/modules/**/*.jade')
		.pipe(data(function(file) {
			// console.log(file);
			return require(path.dirname(file.path) + '/_data.json');
		}))
		.pipe(jade())
		.pipe(concat('modules.html'))
		// thrown into _includes for reference within styleguide/index.md
		.pipe(gulp.dest(config.src.root + '/_includes'))
		.pipe(browserSync.reload({stream:true}))
});
