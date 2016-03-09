'use strict';

const
	combine	= require('stream-combiner2')
					.obj,
	config	= require('./config'),
	gulp		= require('gulp'),
	gulpIf	= require('gulp-if'),
	maps		= require('gulp-sourcemaps'),
	notify	= require('gulp-notify'),
	rename	= require('gulp-rename'),
	stylus	= require('gulp-stylus'),

	// postCSS and it's plagins
	postCss	= require('gulp-postcss'),
	cssComb	= require('postcss-sorting'),
	cssLint	= require('stylelint'),
	cssNano	= require('cssnano'),
	doiuse	= require('doiuse'),
	flexFix	= require('postcss-flexbugs-fixes'),
	fonts		= require('postcss-font-magician'),
	prefixes	= require('autoprefixer'),
	short		= require('postcss-short');


module.exports = function() {
	return function() {
		return combine(
			gulp.src(config.pathTo.src.stylus),
			gulpIf(config.isDev, maps.init()),
			stylus({'include css': true}),
			postCss([
				fonts({
					hosted: config.pathTo.src.fonts
				}),
				short(),
				flexFix(),
				prefixes({browsers: ['> 1%','ie >= 9','last 2 versions']}),
				cssComb({'sort-order': 'zen'}),
				cssLint({'extends':'src/'}),
				doiuse({browsers: 'last 2 versions'})
			]),
			gulpIf(!config.isDev, postCss([
				cssNano()
			])),
			gulp.dest(config.pathTo.build.stylus),
			gulpIf(config.isDev, combine(
				postCss([
					cssNano()
				]),
				rename({suffix: '.min'}),
				maps.write('.'),
				gulp.dest(config.pathTo.build.stylus)
			))
		).on('error', notify.onError(function(err) {
			return {
				title: 'Stylus',
				message: err.message
			}
		}));
	}
};