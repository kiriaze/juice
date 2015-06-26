'use strict';

var config = require('../config'),
	gulp   = require('gulp'),
	clean  = require('gulp-clean'),
	del    = require('del');

gulp.task('clean', function(cb) {

	del([config.dist.root], cb);

});


// // ### Clean
// // `gulp clean` - Deletes the public folder entirely.
// gulp.task('clean', function (cb) {
// 	del([
// 		// here we use a globbing pattern to match everything inside the `public` folder
// 		'public/**/*'
// 	], cb);
// });