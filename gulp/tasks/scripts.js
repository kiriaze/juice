'use strict';

var config     = require('../config'),
	gulp       = require('gulp'),
	jshint     = require('gulp-jshint'),
	uglify     = require('gulp-uglify'),
	notify     = require('gulp-notify'),
	sourcemaps = require('gulp-sourcemaps'),
	concat     = require('gulp-concat'),
	rename     = require('gulp-rename');

// minify, concat, uglify, sourcemap, rename JS
gulp.task('js', function(){
	return gulp.src(config.scripts.src)
		.pipe(sourcemaps.init())
			.pipe(jshint())
			.pipe(jshint.reporter('jshint-stylish'))
			.pipe(concat('main.js'))
			.pipe(gulp.dest(config.scripts.dest))
			.pipe(rename({suffix: '.min'}))
			.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(config.scripts.dest))

		// Notify us that the task was completed
		.pipe(notify({ message: 'Javascript task complete' }));
});
