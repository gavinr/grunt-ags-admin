# grunt-ags-admin

> Grunt task to control ArcGIS Server

This is project is a work in progress. Plan is to build on more functionality going forward. If you find this tool useful, please consider contributing.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ags-admin --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-ags-admin');
```

## The "ags_admin_restart" task

### Overview
In your project's Gruntfile, add a section named `ags_admin_restart` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  ags_admin_restart: {
    options: {
      baseUrl: "http://url-to/arcgis/",
      servicePath: "test/TestTool.GPServer",
      username: "adminUsername",
      password: "adminPassword"
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
 * 0.1.0 - initial release. POC to restart a service.
