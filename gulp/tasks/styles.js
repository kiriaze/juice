'use strict';

var config       = require('../config'),
	gulp         = require('gulp'),
	sass         = require('gulp-sass'),
	rename       = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync  = require('browser-sync'),
	sourcemaps   = require('gulp-sourcemaps');

// minify, sourcemap, autoprefix, rename CSS
gulp.task('css', function(){
	// targets single file instead of dir since gulp runs better
	return gulp.src(config.styles.src + '/main.scss')
		.pipe(sourcemaps.init())
			.pipe(sass({
				outputStyle: 'compressed',
				errLogToConsole: true
			}))
			.pipe(autoprefixer('last 2 versions'))
			.pipe(rename({suffix: '.min'}))
		.pipe(sourcemaps.write('./')) // writing relative to gulp.dest path
		.pipe(gulp.dest(config.styles.dest))
		.pipe(browserSync.reload({stream:true}))
});
