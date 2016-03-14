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
		return gulp
			.src(config.pathTo.src.jade)
			.pipe(plumber())
			.pipe(jade({
				pretty: '\t'
			}))
			.pipe(gulp.dest(config.pathTo.build.jade));
	}
};