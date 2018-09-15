module.exports = function(grunt) {
    // var BUILD_DIR_CSS = 'deploy/assets/css';
    // var SRC_DIR_CSS = 'src/scss';

    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        banner: '/* <%= pkg.name %> - version <%= pkg.version %>\n' +
            ' * <%= grunt.template.today("mm-dd-yyyy") %>\n' +
            ' * <%= grunt.template.date("h:MM:ss TT") %>\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n */\n',
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: ['public/assets/css/main.css']
                }
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'public/assets/css/main.css': 'src/scss/main.scss'
                }
            }
            // dev: {
            //     options: {
            //         outputStyle: 'compressed'
            //     },
            //     files: {
            //         'public/assets/css/main.css': 'src/scss/main.scss'
            //     }
            // }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n\n'
            },
            dist: {
                files: {
                    'public/assets/js/script.min.js': ['src/js/vendor/jquery-1.11.3.min.js', 'src/js/vendor/bootstrap.min.js',  'src/js/vendor/popper.min.js', 'src/js/vendor/jquery.easeScroll.js', 'src/js/vendor/TweenMax.min.js', 'src/js/vendor/SplitText.min.js', 'src/js/vendor/barba.min.js', 'src/js/vendor/ScrollMagic.js', 'src/js/vendor/animation.gsap.js', 'src/js/vendor/lightbox.js', 'src/js/vendor/loading-bar.js', 'src/js/main.js' ],
                    
                }


            },

            dev: {
                options: {
                    compress: false,
                    beautify: true,
                    mangle: false
                },
                files: {
                    'public/assets/js/script.min.js': 'src/js/*.js'
                }
            }
        },

        includes: {


            Index: {
                cwd: 'src/pages/',
                src: ['*.html', '*.php'],
                dest: './public/',
                options: {
                    includePath: 'src/partials/'
                }
            },

            Portraits: {
                cwd: 'src/pages/portraits',
                src: ['*.html', '*.php'],
                dest: './public/portraits',
                options: {
                    includePath: 'src/partials/'
                }
            },

            Couples: {
                cwd: 'src/pages/couples',
                src: ['*.html', '*.php'],
                dest: './public/couples',
                options: {
                    includePath: 'src/partials/'
                }
            },

            Weddings: {
                cwd: 'src/pages/weddings',
                src: ['*.html', '*.php'],
                dest: './public/weddings',
                options: {
                    includePath: 'src/partials/'
                }
            },

            About: {
                cwd: 'src/pages/about',
                src: ['*.html', '*.php'],
                dest: './public/about',
                options: {
                    includePath: 'src/partials/'
                }
            },

            Contact: {
                cwd: 'src/pages/contact',
                src: ['*.html', '*.php'],
                dest: './public/contact',
                options: {
                    includePath: 'src/partials/'
                }
            },




        },

        minifyHtml: {
            options: {
                cdata: true
            },
            dist: {
                files: {
                    'public/index.html': 'public/index.html',
                    'public/portraits/index.html': 'public/portraits/index.html',
                    'public/couples/index.html': 'public/couples/index.html',
                    'public/weddings/index.html': 'public/weddings/index.html',
                    'public/about/index.html': 'public/about/index.html',
                    'public/contact/index.html': 'public/contact/index.html'
                }
            }
        },

        watch: {
            options: {
                livereload: false
            },
            css: {
                files: ['src/**/*.scss'],
                tasks: ['sass:dist', 'usebanner']
            },
            scripts: {
                files: ['src/**/*.js'],
                tasks: ['uglify:dist']
            },
            pdfs: {
                files: ['public/assets/pdfs/**/*.pdf'],
                tasks: ['uglify']
            },

            html: {
                files: ['src/partials/**/**/*.html', 'src/**/*.html' ],
                tasks: ['uglify:dist', 'includes:Index', 'includes:Couples', 'includes:Portraits', 'includes:Weddings', 'includes:About', 'includes:Contact']

            }
        } 
    }); 
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-cache-breaker');
    grunt.registerTask('default', ['watch', 'uglify:dist']);
    grunt.registerTask('deploy', ['uglify:dist', 'sass:dist', 'usebanner']);
    grunt.registerTask('html', ['minifyHtml']);

};
