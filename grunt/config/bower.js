/*jshint node:true*/
'use strict';

// https://github.com/yatskevich/grunt-bower-task

// Gives you the bower packages in a nice neat pile

module.exports = function (config) {
	return {
		install: {
			options: {
				targetDir: config.source + 'lib/',
				layout: 'byType',
				install: true,
				verbose: false,
				cleanTargetDir: false,
				cleanBowerDir: false,
				bowerOptions: {}
			}
		}
	};
};
