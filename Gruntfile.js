module.exports = function(grunt) {
  'use strict';

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-karma');
  
  var renameToCompiled = function(dest, src, config) {
    return dest +  src.substring(0,src.lastIndexOf('.')) + config.ext;
  };
  var appFiles = {
    coffee: {
      expand: true,
      cwd: 'coffee/',
      src: ['**/*.coffee'],
      dest: 'src/',
      ext: '.js',
      rename: renameToCompiled
    },
    js: {
      expand: true,
      flatten: false,
      cwd: 'src/public/app/',
      src: ['**/*.js'],
      dest: 'dist/js/'
    },
    less: {
      expand: true,
      flatten: false,
      cwd: 'src/public/less/',
      src: ['**/*.less'],
      dest: 'src/public/app/css/',
      ext: '.css',
      rename: renameToCompiled
    },
    css: {
      expand: true,
      flatten: false,
      cwd: 'src/public/css/',
      src: ['**/*.css'],
      dest: 'dist/css/'
    }
  };
  appFiles.watch = {
    coffee: appFiles.coffee.cwd + appFiles.coffee.src,
    less: appFiles.less.cwd + appFiles.less.src
  };

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['src/public/dist/',
      'src/public/app/**/*.js',
      'src/public/app/css/',
      'src/public/test/**/*.js',
      'src/server/**/*.js'
    ],
    watch: {
      coffee: {
        files: [appFiles.watch.coffee],
        tasks : ['coffee'],
        options: {
          spawn: false
        }
      }
    },
    coffee: {
      compile : {
        options: {
          // bare: true,
          preserve_dirs: true
        },
        files: [appFiles.coffee]
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          hostname: '*',
          base: 'src/public',
          keepalive: true
        }
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec'
        },
        src: ['src/server/test/**/*.js']
      }
    },
    karma: {
      unit:{
        configFile: 'karma.conf.js'
      }
    }
  });

  grunt.registerTask('default', ['clean', 'coffee', 'mochaTest', 'karma']);
  grunt.registerTask('compile', ['clean', 'coffee']);
  grunt.registerTask('server', function() {
    grunt.task.run(['clean', 'coffee']);
    require('./src/run.js');
    grunt.task.run('watch');
  });

  grunt.event.on('watch', function(action, filepath, target) {
    var configs = grunt.util._.extend({}, appFiles[target]);
    configs.src = filepath.substring(configs.cwd.length);
    var destFile = renameToCompiled(configs.dest, configs.src, configs);
    if (action == 'deleted') {
      grunt.file.delete(destFile);
      grunt.log.ok('File "'+ destFile +'" deleted.');
    } else {
      switch (target) {
        case 'coffee':
          grunt.config('coffee.compile.files', [configs]);
          break;
        case 'less':
          grunt.config('less.dev.files', [configs]);
          break;
      }
    }
  });
};
