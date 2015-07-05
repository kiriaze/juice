'use strict';

var config     		= require('../config'),
	gulp       		= require('gulp'),
	jshint     		= require('gulp-jshint'),
	uglify     		= require('gulp-uglify'),
	sourcemaps 		= require('gulp-sourcemaps'),
	concat     		= require('gulp-concat'),
	rename     		= require('gulp-rename');

// minify, concat, uglify, sourcemap, rename JS
gulp.task('js', function(){
	return gulp.src(config.scripts.src)
		.pipe(sourcemaps.init())
			.pipe(jshint())
			.pipe(jshint.reporter('jshint-stylish'))
			.pipe(uglify())
			.pipe(concat('app.js'))
			.pipe(rename({suffix: '.min'}))
		.pipe(sourcemaps.write('./')) // writing relative to gulp.dest path
		.pipe(gulp.dest(config.scripts.dest))
});
