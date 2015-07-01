var config       = require('../config'),
	gulp         = require('gulp'),
	fileinclude  = require('gulp-file-include'),
	rename       = require('gulp-rename'),
	path         = require('path');

// fileinclude: grab partials from templates and render out html files
gulp.task('fileinclude', function() {
	return gulp.src(path.join('./source/', '*.html'))
		.pipe(fileinclude())
		.pipe(rename({
			extname: ""
		}))
		.pipe(rename({
			extname: ".html"
		}))
		.pipe(gulp.dest(config.dist.root));
});
