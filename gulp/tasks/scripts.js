'use strict';

var config     = require('../config'),
	gulp       = require('gulp'),
	jshint     = require('gulp-jshint'),
	uglify     = require('gulp-uglify'),
	sourcemaps = require('gulp-sourcemaps'),
	concat     = require('gulp-concat'),
	rename     = require('gulp-rename'),
	mainBowerFiles = require('main-bower-files'),
	order 		   = require('gulp-order');

// minify, concat, uglify, sourcemap, rename JS
gulp.task('js', function(){

	return gulp.src(config.scripts.src)
		.pipe(sourcemaps.init())
			.pipe(jshint())
			.pipe(jshint.reporter('jshint-stylish'))
			.pipe(uglify())
			.pipe(concat('app.js'))
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest(config.scripts.dest))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.scripts.dest))

});
