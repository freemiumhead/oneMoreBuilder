module.exports = {
	isDev		: true,
	pathTo	: {
		src	: {
			fonts		: 'src/fonts/',
			img		: 'src/blocks/**/*.{jpg,png}',
			jade		: 'src/*.jade',
			js			: [
				'src/jsVendor.js',
				'src/jsCustom.js'
			],
			stylus	: 'src/style.styl',
		},
		build	: {
			img		: 'build/img/',
			jade		: 'build/',
			js			: 'build/js/',
			stylus	: 'build/css/',
		},
		watch	: {
			all		: 'src/**/*.*',
			img		: 'src/blocks/**/*.{jpg,png}',
			jade		: 'src/**/*.jade',
			js			: 'src/**/*.js',
			stylus	: 'src/**/*.styl',
		},
		clean	: 'build/*',
	},
};