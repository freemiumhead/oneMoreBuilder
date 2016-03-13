'use strict';

module.exports = {
	isDev		: true,
	pathTo	: {
		src	: {
			fonts			: 'src/fonts/',
			img			: 'src/blocks/**/*.{jpg,png}',
			jade			: 'src/*.jade',
			js				: [
				'src/jsVendor.js',
				'src/jsCustom.js'
			],
			pngSprite	: 'src/build/**/png-*.png',
			stylus		: 'src/style.styl',
			svgSprite	: 'src/blocks/**/svg-*.svg',
		},
		build	: {
			img			: 'build/img/',
			jade			: 'build/',
			js				: 'build/js/',
			pngSprite	: 'build/img/',
			stylus		: 'build/css/',
			svgSprite	: 'build/img/',
		},
		watch	: {
			all			: 'src/**/*.*',
			img			: 'src/blocks/**/*.{jpg,png}',
			jade			: 'src/**/*.jade',
			js				: 'src/**/*.js',
			pngSprite	: 'src/blocks/**/png-*.png',
			stylus		: 'src/**/*.styl',
			svgSprite	: 'src/blocks/**/svg-*/svg',
		},
		clean	: 'build/*',
	},
};