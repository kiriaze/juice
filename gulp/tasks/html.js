var config       = require('../config'),
	gulp         = require('gulp'),
	minifyHTML   = require('gulp-minify-html');

// minify html
gulp.task('html', function() {
	return gulp.src('./dist/*.html')
		.pipe(minifyHTML({
			quotes: true
		}))
		.pipe(gulp.dest(config.dist.root));
});
