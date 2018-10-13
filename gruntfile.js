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
            mobile: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'public/mobile/assets/css/main.css': 'src/mobile/scss/main.scss'
                }
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
            mobile: {
                files: {
                    'public/mobile/assets/js/script.min.js': ['src/mobile/js/vendor/jquery-1.11.3.min.js', 'src/mobile/js/vendor/bootstrap.min.js',  'src/mobile/js/vendor/popper.min.js', 'src/mobile/js/vendor/jquery.easeScroll.js', 'src/mobile/js/vendor/TweenMax.min.js', 'src/mobile/js/vendor/SplitText.min.js', 'src/mobile/js/vendor/barba.min.js', 'src/mobile/js/vendor/ScrollMagic.js', 'src/mobile/js/vendor/animation.gsap.js', 'src/mobile/js/vendor/lightbox.js', 'src/mobile/js/vendor/loading-bar.js', 'src/mobile/js/main.js' ],
                    
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

            Presets: {
                cwd: 'src/desktop/pages/presets',
                src: ['*.html', '*.php'],
                dest: './public/desktop/presets',
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



            Indexmobile: {
                cwd: 'src/mobile/pages/',
                src: ['*.html', '*.php'],
                dest: './public/mobile/',
                options: {
                    includePath: 'src/mobile/partials/'
                }
            },

            Portraitsmobile: {
                cwd: 'src/mobile/pages/portraits',
                src: ['*.html', '*.php'],
                dest: './public/mobile/portraits',
                options: {
                    includePath: 'src/mobile/partials/'
                }
            },

            Couplesmobile: {
                cwd: 'src/mobile/pages/couples',
                src: ['*.html', '*.php'],
                dest: './public/mobile/couples',
                options: {
                    includePath: 'src/mobile/partials/'
                }
            },

            Weddingsmobile: {
                cwd: 'src/mobile/pages/weddings',
                src: ['*.html', '*.php'],
                dest: './public/mobile/weddings',
                options: {
                    includePath: 'src/mobile/partials/'
                }
            },

            Aboutmobile: {
                cwd: 'src/mobile/pages/about',
                src: ['*.html', '*.php'],
                dest: './public/mobile/about',
                options: {
                    includePath: 'src/mobile/partials/'
                }
            },

            Contactmobile: {
                cwd: 'src/mobile/pages/contact',
                src: ['*.html', '*.php'],
                dest: './public/mobile/contact',
                options: {
                    includePath: 'src/mobile/partials/'
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
            },
            mobile: {
                files: {
                    'public/mobile/index.html': 'public/mobile/index.html',
                    'public/mobile/portraits/index.html': 'public/mobile/portraits/index.html',
                    'public/mobile/couples/index.html': 'public/mobile/couples/index.html',
                    'public/mobile/weddings/index.html': 'public/mobile/weddings/index.html',
                    'public/mobile/about/index.html': 'public/mobile/about/index.html',
                    'public/mobile/contact/index.html': 'public/mobile/contact/index.html'
                }
            }
        },

        watch: {

            options: {
                livereload: false
            },
            css: {
                files: ['src/desktop/**/*.scss', 'src/mobile/**/*.scss'],
                tasks: ['sass:desktop', 'sass:mobile', 'usebanner']
            },
            scripts: {
                files: ['src/desktop/**/*.js', 'src/mobile/**/*.js'],
                tasks: ['uglify:desktop', 'uglify:mobile']
            },
            html: {
                files: ['src/desktop/partials/**/**/*.html', 'src/desktop/**/*.html', 'src/desktop/**/*.php', 'src/mobile/partials/**/**/*.html', 'src/mobile/**/*.html' ],
                tasks: ['uglify:desktop', 'includes:Index',  'includes:Presets', 'includes:Couples', 'includes:Portraits', 'includes:Weddings', 'includes:About', 'includes:Contact', 'uglify:desktop', 'includes:Indexmobile', 'includes:Couplesmobile', 'includes:Portraitsmobile', 'includes:Weddingsmobile', 'includes:Aboutmobile', 'includes:Contactmobile']

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
    grunt.registerTask('mobile', ['watch', 'uglify:mobile']);
    grunt.registerTask('html-desktop', ['minifyHtml:desktop']);
    grunt.registerTask('html-mobile', ['minifyHtml:mobile']);

};
