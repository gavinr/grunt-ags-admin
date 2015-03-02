/*
 * grunt-ags-admin
 * https://github.com/gavreh/grunt-ags-admin
 *
 * Copyright (c) 2015 Gavin Rehkemper
 */

'use strict';

var tokenRequest = require('./lib/tokenRequest.js');
var urlUtil = require('./lib/agsAdminUrlUtil.js');

module.exports = function(grunt) {
  grunt.registerMultiTask('ags_admin_restart', 'Grunt task to control ArcGIS Server', function() {
    var done = this.async();

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({});

    console.log("stopping...");
    tokenRequest.request(urlUtil.getTokenUrl(options.baseUrl), urlUtil.getStopUrl(options.baseUrl, options.servicePath), options.username, options.password).then(function(res) {
      console.log('stopped');
      console.log('starting...');
      tokenRequest.request(urlUtil.getTokenUrl(options.baseUrl), urlUtil.getStartUrl(options.baseUrl, options.servicePath), options.username, options.password).then(function(res) {
        console.log('started');
        done();
      });
    });
  });
};
