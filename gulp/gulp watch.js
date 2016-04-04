'use strict';

const
	config	= require('./config'),
	gulp		= require('gulp'),
	watch		= require('gulp-watch');

module.exports = function() {
	return function() {
		watch(config.pathTo.watch.stylus, function() {
			gulp.start('stylus');
		});
		watch(config.pathTo.watch.jade, function() {
			gulp.start('jade');
		});
		watch(config.pathTo.watch.img, function() {
			gulp.start('img');
		});
		watch(config.pathTo.watch.js, function() {
			gulp.start('js');
		});
		watch(config.pathTo.watch.svgSprite, function() {
			gulp.start('svgSprite');
		});
	}
}