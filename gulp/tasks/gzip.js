'use strict';

var config = require('../config'),
	gulp   = require('gulp'),
	gzip   = require('gulp-gzip');

gulp.task('gzip', function() {
	return gulp.src(config.gzip.src)
		.pipe(gzip(config.gzip.options))
		.pipe(gulp.dest(config.gzip.dest));
});
