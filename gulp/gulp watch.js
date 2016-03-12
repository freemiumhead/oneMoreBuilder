const
	config	= require('./config'),
	gulp		= require('gulp');

module.exports = function() {
	return function() {
		gulp
			.watch(config.pathTo.watch.stylus, ['stylus']);
		gulp
			.watch(config.pathTo.watch.jade, ['jade']);
	}
};