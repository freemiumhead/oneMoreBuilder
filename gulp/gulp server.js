'use strict';

const
	gulp		= require('gulp'),
	bs			= require('browser-sync')
					.create(),
	config	= require('./config');

module.exports = function() {
	return function() {
		bs.init({
			server			: 'build',
			port				: 7777,
			injectChanges	: true,
			logPrefix		: 'Server says, that',
			// tunnel			: true,
		});

		bs
			.watch(config.pathTo.watch.all)
			.on('change', bs.reload);
	}
};