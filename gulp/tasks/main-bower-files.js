'use strict';

var config         = require('../config'),
	gulp           = require('gulp'),
	uglify     	   = require('gulp-uglify'),
	concat     	   = require('gulp-concat'),
	mainBowerFiles = require('main-bower-files'),
	order 		   = require('gulp-order');

gulp.task('vendor', function(){

	var mainFiles = mainBowerFiles();

    if ( !mainFiles.length ) {
        return;
    }

	console.log('bower files: ', mainFiles);

	return gulp.src(mainFiles, {
		base: config.src.root + '/assets/vendor'
	})

	.pipe(order([
		'**/**/modernizr.js',
        '**/**/*.js'
	]))
	.pipe(uglify())
	.pipe(concat('vendor.min.js'))
	.pipe(gulp.dest(config.scripts.dest))
});
