'use strict';

const
	combine	= require('stream-combiner2')
					.obj,
	gulp		= require('gulp'),
	config	= require('./config'),
	jade		= require('gulp-jade'),
	plumber	= require('gulp-plumber');

module.exports = function() {
	return function() {
		return combine( 
			gulp.src(config.pathTo.src.jade),
			plumber(),
			jade({
				pretty: '\t'
			}),
			gulp.dest(config.pathTo.build.jade)
		);
	}
};