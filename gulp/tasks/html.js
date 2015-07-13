var config       = require('../config'),
	gulp         = require('gulp'),
	minifyHTML   = require('gulp-minify-html');

// minify html
gulp.task('html', ['jekyll'], function() {
	return gulp.src(config.dist.root + '/*.html')
		.pipe(minifyHTML({
			quotes: true
		}))
		.pipe(gulp.dest(config.dist.root));
});
