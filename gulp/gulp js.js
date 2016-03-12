'use strict';

const
	combine	= require('stream-combiner2')
					.obj,
	concat	= require('gulp-concat'),
	config	= require('./config'),
	filter	= require('gulp-filter'),
	gulp		= require('gulp'),
	gulpIf	= require('gulp-if'),
	jsHint	= require('gulp-jshint'),
	maps		= require('gulp-sourcemaps'),
	plumber	= require('gulp-plumber'),
	rigger	= require('gulp-rigger'),
	stylish	= require('jshint-stylish'),
	uglify	= require('gulp-uglify');

module.exports = function() {
	return function() {
		const f = filter(['*/jsCustom.js'], {
			restore: true
		});

		return combine(
			gulp.src(config.pathTo.src.js),
			plumber(),
			gulpIf(config.isDev, maps.init()),
			rigger(),
			f,
			jsHint(),
			jsHint.reporter(stylish),
			f.restore,
			concat('main.js'),
			gulpIf(config.isDev, maps.write('.'), uglify()),
			gulp.dest(config.pathTo.build.js)
		);
	};
}