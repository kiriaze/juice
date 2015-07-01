'use strict';

var config       = require('../config'),
	gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	concat       = require('gulp-concat'),
	minifyCSS    = require('gulp-minify-css'),
	gulpif       = require('gulp-if'),
	rename       = require('gulp-rename'),
	notify       = require('gulp-notify'),
	browserSync  = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps   = require('gulp-sourcemaps');

// minify, sourcemap, autoprefix, rename CSS
gulp.task('css', function(){
	gulp.src(config.styles.src)
		.pipe(sourcemaps.init())
			.pipe(sass())
			.pipe(autoprefixer('last 2 versions'))
			.pipe(gulp.dest(config.styles.dest))
			.pipe(rename({suffix: '.min'}))
			.pipe(minifyCSS())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.styles.dest))

		// Notify us that the task was completed
		// .pipe(notify({ message: 'CSS task complete' }));
});
