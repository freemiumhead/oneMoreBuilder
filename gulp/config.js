'use strict';

module.exports = {
	isDev		: true,
	pathTo	: {
		src	: {
			fonts			: 'src/fonts/',
			img			: [
				'src/blocks/**/*.{jpg,png,svg}',
				'!src/blocks/**/svg-*.svg',
				'!src/blocks/styleguide/bicon/*.*',
			],
			jade			: 'src/layouts/*.jade',
			js				: [
				'src/layouts/jsVendor.js',
				'src/layouts/jsCustom.js',
			],
			pngSprite	: 'src/blocks/**/png-*.png',
			stylus		: 'src/layouts/style.styl',
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
			img			: [
				'src/blocks/**/*.{jpg,png,svg}',
				'!src/blocks/**/svg-*.svg',
				'!src/blocks/styleguide/bicon/*.*',
			],
			jade			: 'src/**/*.jade',
			js				: 'src/**/*.js',
			pngSprite	: 'src/blocks/**/png-*.png',
			stylus		: 'src/**/*.styl',
			svgSprite	: 'src/blocks/**/svg-*.svg',
		},
		clean	: 'build/*',
	},
};