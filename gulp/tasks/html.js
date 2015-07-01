var config       = require('../config'),
	gulp         = require('gulp'),
	minifyHTML   = require('gulp-minify-html');

// minify html
gulp.task('html', function() {
	return gulp.src('./public/*.html')
		.pipe(minifyHTML({
			quotes: true
		}))
		.pipe(gulp.dest(config.dist.root));
});
