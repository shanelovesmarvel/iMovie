/**
 * Created by Shane on 3/23/16.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify:{
            options : {
                banner : '/*! <%= pkg.file %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build : {
                src : 'dest/bands.js',
                dest : 'dest/bands.min.js'
            }
        },
        jshint:{
            all: ['./public/imovie/controllers/moviecontroller.js']
        },
        concat : {
            options : {
                separator : ';'
            },
            dist : {
                src : ['src/require/europe/coldplay.js', 'src/require/europe/oasis.js'],
                dest : 'dest/bands.js'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify']);
    grunt.registerTask('jshint', ['jshint']);

};