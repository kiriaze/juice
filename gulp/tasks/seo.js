var config      = require('../config'),
	gulp        = require('gulp');

// seo - google ping (ran after build and deploy)
gulp.task('seo', ['build'], function(cb) {
	request('http://www.google.com/webmasters/tools/ping?sitemap="'+ config.sitemapURL +'"');
	request('http://www.bing.com/webmaster/ping.aspx?siteMap="'+ config.sitemapURL +'"');
	cb();
});