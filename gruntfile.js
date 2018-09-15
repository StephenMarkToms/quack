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
                    src: ['public/desktop/assets/css/main.css']
                }
            }
        },
        sass: {
            options: {
                sourceMap: true
            },
            desktop: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'public/desktop/assets/css/main.css': 'src/desktop/scss/main.scss'
                }
            }
        },

        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n\n'
            },
            desktop: {
                files: {
                    'public/desktop/assets/js/script.min.js': ['src/desktop/js/vendor/jquery-1.11.3.min.js', 'src/desktop/js/vendor/bootstrap.min.js',  'src/desktop/js/vendor/popper.min.js', 'src/desktop/js/vendor/jquery.easeScroll.js', 'src/desktop/js/vendor/TweenMax.min.js', 'src/desktop/js/vendor/SplitText.min.js', 'src/desktop/js/vendor/barba.min.js', 'src/desktop/js/vendor/ScrollMagic.js', 'src/desktop/js/vendor/animation.gsap.js', 'src/desktop/js/vendor/lightbox.js', 'src/desktop/js/vendor/loading-bar.js', 'src/desktop/js/main.js' ],
                    
                }


            },

            dev: {
                options: {
                    compress: false,
                    beautify: true,
                    mangle: false
                },
                files: {
                    'public/desktop/assets/js/script.min.js': 'src/desktop/js/*.js'
                }
            }
        },

        includes: {


            Index: {
                cwd: 'src/desktop/pages/',
                src: ['*.html', '*.php'],
                dest: './public/desktop/',
                options: {
                    includePath: 'src/desktop/partials/'
                }
            },

            Portraits: {
                cwd: 'src/desktop/pages/portraits',
                src: ['*.html', '*.php'],
                dest: './public/desktop/portraits',
                options: {
                    includePath: 'src/desktop/partials/'
                }
            },

            Couples: {
                cwd: 'src/desktop/pages/couples',
                src: ['*.html', '*.php'],
                dest: './public/desktop/couples',
                options: {
                    includePath: 'src/desktop/partials/'
                }
            },

            Weddings: {
                cwd: 'src/desktop/pages/weddings',
                src: ['*.html', '*.php'],
                dest: './public/desktop/weddings',
                options: {
                    includePath: 'src/desktop/partials/'
                }
            },

            About: {
                cwd: 'src/desktop/pages/about',
                src: ['*.html', '*.php'],
                dest: './public/desktop/about',
                options: {
                    includePath: 'src/desktop/partials/'
                }
            },

            Contact: {
                cwd: 'src/desktop/pages/contact',
                src: ['*.html', '*.php'],
                dest: './public/desktop/contact',
                options: {
                    includePath: 'src/desktop/partials/'
                }
            },




        },

        minifyHtml: {
            options: {
                cdata: true
            },
            desktop: {
                files: {
                    'public/desktop/index.html': 'public/desktop/index.html',
                    'public/desktop/portraits/index.html': 'public/desktop/portraits/index.html',
                    'public/desktop/couples/index.html': 'public/desktop/couples/index.html',
                    'public/desktop/weddings/index.html': 'public/desktop/weddings/index.html',
                    'public/desktop/about/index.html': 'public/desktop/about/index.html',
                    'public/desktop/contact/index.html': 'public/desktop/contact/index.html'
                }
            }
        },

        watch: {
            options: {
                livereload: false
            },
            css: {
                files: ['src/desktop/**/*.scss'],
                tasks: ['sass:desktop', 'usebanner']
            },
            scripts: {
                files: ['src/desktop/**/*.js'],
                tasks: ['uglify:desktop']
            },
            pdfs: {
                files: ['public/desktop/assets/pdfs/**/*.pdf'],
                tasks: ['uglify']
            },

            html: {
                files: ['src/desktop/partials/**/**/*.html', 'src/desktop/**/*.html' ],
                tasks: ['uglify:desktop', 'includes:Index', 'includes:Couples', 'includes:Portraits', 'includes:Weddings', 'includes:About', 'includes:Contact']

            }
        } 
    }); 
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-banner');
    grunt.loadNpmTasks('grunt-cache-breaker');
    grunt.registerTask('desktop', ['watch', 'uglify:desktop']);
    grunt.registerTask('html-desktop', ['minifyHtml:desktop']);

};
