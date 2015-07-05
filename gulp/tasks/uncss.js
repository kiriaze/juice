'use strict';

var gulp        = require('gulp'),
	uncss		= require('gulp-uncss');

gulp.task('uncss', function() {
    return gulp.src('./public/assets/css/*.css')
		.pipe(uncss({
			html: ['public/**/*.html']
		}))
        .pipe( gulp.dest('./public/assets/css') )
});
