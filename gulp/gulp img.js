'use strict';

const
	config	= require('./config'),
	combine	= require('stream-combiner2')
					.obj,
	gulp		= require('gulp'),
	imageMin	= require('gulp-imagemin'),
	newer		= require('gulp-newer'),
	plumber	= require('gulp-plumber'),
	pngQuant	= require('imagemin-pngquant');

module.exports = function() {
	return function() {
		return combine(
			gulp.src(config.pathTo.src.img),
			plumber(),
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
			})
			.on('data', function (file) {
				
				const a = file.path.split('\\'),
						b = a.length - 2;

				a.splice(b, 1);
				const c = a.join('\\');
				file.path = c;

				return file;
			}),
			gulp.dest(config.pathTo.build.img)
		);
	}
};