'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		stylus: {
			compile: {
				files: {
					'public/stylesheets/reset.css': 'src/styl/reset.styl',
					'public/stylesheets/style.css': 'src/styl/style.styl',
					'public/stylesheets/builder.css': 'src/styl/builder.styl'
				}
			}
		},
		watch: {
			stylus: {
				files: ['src/styl/*.styl'],
				tasks: ['stylus']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-stylus');

	grunt.registerTask('default', ['watch']);
}
