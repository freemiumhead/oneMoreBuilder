'use strict';

const
	combine	= require('stream-combiner2')
					.obj,
	gulp		= require('gulp'),
	config	= require('./config'),
	jade		= require('gulp-jade'),
	notify	= require('gulp-notify');

module.exports = function() {
	return function() {
		return combine( 
			gulp.src(config.pathTo.src.jade),
			jade({
				pretty: '\t'
			}),
			gulp.dest(config.pathTo.build.jade)
		).on('error', notify.onError(function(err) {
			return {
				title: 'Jade',
				message: err.message
			}
		}));
	}
};