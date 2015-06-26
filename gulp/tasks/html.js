var config       = require('../config'),
	gulp         = require('gulp'),
	notify       = require('gulp-notify'),
	fileinclude  = require('gulp-file-include'),
	minifyHTML   = require('gulp-minify-html');

// minify html
gulp.task('html', function() {
	return gulp.src('./public/*.html')
		.pipe(minifyHTML({
			quotes: true
		}))
		.pipe(gulp.dest(config.dist.root))
		// Notify us that the task was completed
		.pipe(notify({ message: 'Minify HTML task complete' }));
});