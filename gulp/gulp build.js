'use strict';

const
	gulp		= require('gulp'),
	series	= require('run-sequence');

module.exports = function() {
	return function(cb) {
		return series(
			'clean',
			['jade',
			'svgSprite',
			'stylus',
			'img',
			'js'],
			cb
		);
	}
};