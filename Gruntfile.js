module.exports = function(grunt) {

  // Configuration
  grunt.initConfig({
    
    sass:{
      dist:{
        options:{
          style: 'compressed'
        },
        files:{
          'css/style.min.css' : '_scss/style.scss'
        }
      }
    },

    /*concat:{
      dist:{
        src: ['js/_dev/*.js'],
        dest: 'js/_dev/scripts.js'
      }
    },*/

    uglify:{
      dist:{
        files:{
          'js/scripts.min.js' : 'js/_dev/*.js'
        }
      }
    },

    imagemin:{
      png:{
        files:[{
          expand: true,
          cwd: 'img/_lib/',
          src: '*.{png,gif}',
          dest: 'img/_main'
        }]
      },
      jpg:{
        files:[{
          expand: true,
          cwd: 'img/_lib/',
          src: '*.jpg',
          dest: 'img/'
        }]
      },
      spriteoptim:{
        files:[{
          expand: true,
          cwd: 'img/',
          src: 'sprite.png',
          dest: 'img/'
        }]
      }
    },

    sprite:{
      dist:{
        src: 'img/_main/*.{png,gif}',
        dest: 'img/sprite.png',
        destCss: 'css/sprite.css'
      }
    },

    watch:{
      scss:{
        files: ['_scss/**/*.scss'],
        tasks: ['sass']
      },
      js:{
        files: ['js/_dev/*.js'],
        tasks: ['uglify']
      },
      img:{
        files: ['img/_lib/*.{jpg,png,gif}'],
        tasks: ['imagemin','imagemin:spriteoptim']
      },
    }
    
  });

  // Plugins
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  /*grunt.loadNpmTasks('grunt-contrib-concat');*/
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tasks
  grunt.registerTask('compile', ['sass', 'uglify', 'imagemin:jpg', 'imagemin:png', 'sprite', 'imagemin:spriteoptim',]);
  

};