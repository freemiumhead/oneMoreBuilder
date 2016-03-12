'use strict';

const
	combine	= require('stream-combiner2')
					.obj,
	config	= require('./config'),
	gulp		= require('gulp'),
	gulpIf	= require('gulp-if'),
	maps		= require('gulp-sourcemaps'),
	plumber	= require('gulp-plumber'),
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
		return gulp
			.src(config.pathTo.src.stylus)
			.pipe(plumber())
			.pipe(gulpIf(
				config.isDev,
				maps.init()))
			.pipe(stylus())
			.pipe(postCss([
				fonts(),
				short(),
				flexFix(),
				prefixes({
					browsers: [
						'> 1%',
						'ie > 9',
						'last 2 versions'
					]
				}),
				cssComb({'sort-order': 'zen'}),
				// cssLint({'extends':'src/'}),
				doiuse({browsers: 'last 2 versions'})
			]))
			.pipe(gulpIf(
				config.isDev,
				maps.write('.'),
				postCss([cssNano()])
			))
			.pipe(gulp.dest(config.pathTo.build.stylus));
	}	
}