'use strict';

const
	bs			= require('browser-sync')
					.create(),
	gulp		= require('gulp');

// Lazy Task Run function
function lazyRequireTask(taskName, path) {
	gulp.task(taskName, function(callback) {
		let task = require(path).call(this);

		return task(callback);
	});
}

// task Clean
lazyRequireTask('clean', './gulp/gulp clean.js');

// task Jade
lazyRequireTask('jade', './gulp/gulp jade.js');

// task Server
lazyRequireTask('server', './gulp/gulp server.js');

// task Stylus
lazyRequireTask('stylus', './gulp/gulp stylus.js');

// task JavaScript
lazyRequireTask('js', './gulp/gulp js.js');

// task Images
lazyRequireTask('img', './gulp/gulp img.js');

// task Watch
lazyRequireTask('watch', './gulp/gulp watch.js');

// task Build
lazyRequireTask('build', './gulp/gulp build.js');

// task Default
lazyRequireTask('default', './gulp/gulp.js');