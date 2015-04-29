module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    config: {
      app: '.',
      assets: 'assets/',
      js: 'public/javascripts/vendor/',
      css: 'public/stylesheets/',
      images: 'public/images/',
      sass: 'sass/',
      port: 3000
    },

    sass: {
      dev: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'public/stylesheets/sandbox.css': 'sass/styleguide/sandbox.scss',
          'public/stylesheets/main.css':    'sass/site/main.scss',
          'public/stylesheets/docs.css':    'sass/docs/docs.scss'
        }
      },
      build: {
        files: [{
          dest: 'dist/styleguide.css',
          src: ['sass/styleguide/*.scss']
        }]
      }
    },

    watch: {
      grunt: {
        files: ['Gruntfile.js']
      },

      options: {
        livereload: true
      },

      sass: {
        files: ['sass/**/*.scss', 'views/**/*.html'],
        tasks: ['sass'],
        options: {
          livereload: true,
        }
      },

      js: {
        files: ['javascripts/**/*.js'],
        options: {
          livereload: true,
        }
      }

    },

    server: {
      port: 3000,
      base: '.'
    },

    autoprefixer: {
      options: {
        browsers: ['> 1%', 'last 5 versions', 'Firefox ESR', 'Opera 12.1']
      },
      build: {
        src: 'dist/**.css'
      }
    },

    sprite: {
      all: {
        src: 'assets/sprites/*.png',
        destImg: 'public/images/sprites.png',
        destCSS: 'sass/objects/_sprites.scss',
        imgPath: '/images/sprites.png'
      }
    },

    clean: ['dist/', 'assets/sandbox.svg', 'assets/svg/compressed', 'assets/svg/output'],

    svgstore: {
      options: {
        prefix: 'icon-',
        cleanup: ['fill', 'stroke'],
        svg: {
          style: "display: none;"
        }
      },
      default: {
        files: {
          "assets/sandbox.svg": ["assets/svg/compressed/*.svg"]
        }
      }
    },

    rename: {
      svg: {
        files: [{
          src: ['assets/sandbox.svg'],
          dest: 'views/partial/svg.html'
        }]
      }
    },

    svgmin: {
      options: {
        plugins: [{
          removeViewBox: false
        }, {
          removeUselessStrokeAndFill: false
        }]
      },
      dist: {
        expand: true,
        cwd: 'assets/svg',
        src: ['*.svg'],
        dest: 'assets/svg/compressed'
      }
    },

    csscomb: {
      dev: {
        options: {
          config: 'csscomb.json'
        },
        files: {
          'public/stylesheets/sandbox.css': ['public/stylesheets/sandbox.css']
        }
      },
      build: {
        options: {
          config: 'csscomb.json'
        },
        files: {
          'dist/styleguide.css': 'dist/styleguide.css'
        }
      }
    },

    cssmin: {
      build: {
        files: {
          'dist/styleguide.min.css': ['dist/styleguide.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-rename');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-svgmin');
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-csscomb');
  grunt.loadNpmTasks('grunt-version');

  grunt.registerTask('express', 'Start a custom web server', function() {
    var port = process.env.PORT || 3000;
    process.env.CALLER = "grunt";
    require('./app.js').listen(port);
    grunt.log.writeln('Started web server on port ' + port);
  });

  grunt.registerTask('help', 'Log some stuff.', function() {
    grunt.log.subhead('This grunt file contains these tasks:');
    grunt.log.writeln('- grunt: to show command help');
    grunt.log.writeln('- grunt build: to compile sass');
    grunt.log.writeln('- grunt sprites: to generate the sprite master sheet. Just drop the sprites in assets/sprites and run the task.');
    grunt.log.writeln('- grunt svg: svg factory. Just drop the svg files in assets/svg and run the task.');
    grunt.log.writeln('- grunt server: to lunch server');
    grunt.log.subhead('You should launch grunt:server in development.');
  });

  grunt.registerTask('default', ['help']);
  grunt.registerTask('build', ['clean', 'sass:build', 'autoprefixer:build', 'csscomb:build', 'cssmin']);
  grunt.registerTask('sprites', ['sprite']);
  grunt.registerTask('svg', ['clean', 'svgmin', 'svgstore', 'rename:svg']);
  grunt.registerTask('server', ['sass', 'express', 'watch']);
}
