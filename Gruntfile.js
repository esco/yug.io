'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		stylus: {
			compile: {
				files: {
					'public/css/reset.css': 'src/styl/reset.styl',
					'public/css/style.css': 'src/styl/style.styl',
					'public/css/builder.css': 'src/styl/builder.styl',
					'public/css/mixins.css': 'src/styl/mixins.styl'
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
