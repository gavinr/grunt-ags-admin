/*
 * grunt-ags-admin
 * https://github.com/gavreh/grunt-ags-admin
 *
 * Copyright (c) 2015 Gavin Rehkemper
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
        // '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    ags_admin_restart: {
      default_options: {
        options: {
          baseUrl: "http://myServer/arcgis/",
          servicePath: "TestTool.GPServer",
          username: "username",
          password: "password"
        },
      }
    },

    // Unit tests.
    // nodeunit: {
    //   tests: ['test/*_test.js']
    // }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'ags_admin_restart']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
