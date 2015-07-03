'use strict';

var config       = require('../config'),
	gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	concat       = require('gulp-concat'),
	minifyCSS    = require('gulp-minify-css'),
	gulpif       = require('gulp-if'),
	rename       = require('gulp-rename'),
	browserSync  = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer'),
	sourcemaps   = require('gulp-sourcemaps'),
	uncss		 = require('gulp-uncss');

// minify, sourcemap, autoprefix, rename CSS
gulp.task('css', function(){
	return gulp.src(config.styles.src)
		.pipe(sourcemaps.init())
			.pipe(sass())
			.pipe(autoprefixer('last 2 versions'))
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest(config.styles.dest))
			.pipe(uncss({
				html: ['public/**/*.html']
			}))
			.pipe(minifyCSS({processImport: false})) // processImport - whether to process @import rules
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.styles.dest))
});
