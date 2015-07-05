'use strict';

var gulp        = require('gulp'),
	uncss		= require('gulp-uncss');

gulp.task('uncss', function() {
    return gulp.src('./dist/assets/css/*.css')
		.pipe(uncss({
			html: ['dist/**/*.html']
		}))
        .pipe( gulp.dest('./dist/assets/css') )
});
