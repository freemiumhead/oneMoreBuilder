'use strict';

const
	config	= require('./config'),
	combine	= require('stream-combiner2')
					.obj,
	gulp		= require('gulp'),
	imageMin	= require('gulp-imagemin'),
	newer		= require('gulp-newer'),
	notify	= require('gulp-notify'),
	pngQuant	= require('imagemin-pngquant');

module.exports = function() {
	return function() {
		return combine(
			gulp.src(config.pathTo.src.img),
			newer(config.pathTo.build.img),
			imageMin({
				intarlaced			: true,
				optimizationLevel	: 5,
				progressive			: true,
				arithmetic			: true,
				svgoPlugins			: [{
					removeViewBox	: true,
				}],
				use					: [pngQuant({
					quality			: '65-80',
					speed				: 6,
					verbose			: true,
				})],
			}),
			gulp.dest(config.pathTo.build.img)
		).on('error', notify.onError(function(err) {
			return {
				title: 'Images',
				message: err.message,
			}
		}));
	}
};