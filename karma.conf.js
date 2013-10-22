// Karma configuration
// Generated on Fri Oct 04 2013 22:57:46 GMT-0300 (Hora oficial do Brasil)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: 'src/public/',

    // frameworks to use
    frameworks: ['mocha', 'requirejs'],
    
    preprocessors: {
      '**/*.html': []
    },

    // list of files / patterns to load in the browser
    files: [
      {pattern: 'app/js/**/*.js', included: false},
      {pattern: 'libs/backbone/backbone.js', included: false},
      {pattern: 'libs/jquery/jquery.min.js', included: false},
      {pattern: 'libs/underscore/underscore-min.js', included: false},
      {pattern: 'libs/bootstrap/dist/js/bootstrap.min.js', included: false},
      {pattern: 'libs/text/text.js', included: false},
      {pattern: 'libs/chai/chai.js', included: false},

      //Sinon imports in order
      'libs/sinon/lib/sinon.js',
      // {pattern: 'libs/sinon/lib/sinon/util/**/*.js', included: false},
      'libs/sinon/lib/sinon/spy.js',
      'libs/sinon/lib/sinon/call.js',
      // {pattern: 'libs/sinon/lib/sinon/stub.js'},
      // {pattern: 'libs/sinon/lib/sinon/mock.js'},
      // {pattern: 'libs/sinon/lib/sinon/collection.js'},
      // {pattern: 'libs/sinon/lib/sinon/assert.js'},
      // {pattern: 'libs/sinon/lib/sinon/sandbox.js'},
      // {pattern: 'libs/sinon/lib/sinon/test.js'},
      // {pattern: 'libs/sinon/lib/sinon/test_case.js'},
      // {pattern: 'libs/sinon/lib/sinon/assert.js'},
      // {pattern: 'libs/sinon/lib/sinon/match.js'},

      {pattern: 'app/templates/**/*.html', included: false},
      {pattern: 'app/test/**/*test.js', included: false},
      'app/test/testMain.js'
    ],

    // list of files to exclude
    exclude: [
      'js/main.js'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
