$("html").easeScroll();


document.addEventListener("DOMContentLoaded", function() {

    $(window).load(function() {






        initBarba();

        //scrollMagic();

        var controller = new ScrollMagic.Controller();




    }); //end ready


}); //end loaded


var sentEmail = false;

function desktopEmail(){


    if(!sentEmail){

        $('.desktop-form').on('submit', function(e) {
            e.preventDefault();

            var formData = {
                'Device': 'Desktop',
                'Name': $("#desktop-name").val(),
                'Email': $("#desktop-email").val(),
                'Phone': $("#desktop-phone").val(),
                'Shoot': $("#desktop-shoot").val(),
                'Message': $("#desktop-message").val(),
            };

            $.ajax({
                url : "../email/contact.php",
                type: "POST",
                data: formData,
                success: function (data) {
                    //$("#form_output").html(data); $("#desktop-thanks").html(postresult);
                    console.log('submitted data');
                    $('.desktop-form').addClass('d-none');
                    $('.desktop-thanks').removeClass('d-none');
                },
                error: function (jXHR, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });
        });

        sentEmail = true;

    }



}

function mobileEmail(){


    if(!sentEmail){

        $('.mobile-form').on('submit', function(e) {
            e.preventDefault();

            var formData = {
                'Device': 'Mobile',
                'Name': $("#mobile-name").val(),
                'Email': $("#mobile-email").val(),
                'Phone': $("#mobile-phone").val(),
                'Shoot': $("#mobile-shoot").val(),
                'Message': $("#mobile-message").val(),
            };

            $.ajax({
                url : "../email/contact.php",
                type: "POST",
                data: formData,
                success: function (data) {
                    //$("#form_output").html(data); $("#desktop-thanks").html(postresult);
                    console.log('submitted data');
                    $('.mobile-form').addClass('d-none');
                    $('.mobile-thanks').removeClass('d-none');
                },
                error: function (jXHR, textStatus, errorThrown) {
                    alert(errorThrown);
                }
            });
        });

        sentEmail = true;

    }



}



function scrollMagic() {

    controller = new ScrollMagic.Controller();
    scene = new ScrollMagic.Scene();

    var duration = 0.75;
    var animations = [
        { y: "+=50", scale: 1, opacity: 0 },
        { height: 0, opacity: 0 },
        { delay: .75, y: "+=50", scale: .9, opacity: 0 },
        { alpha: 0, width: 0 }
    ]



    $('[animate-fade]').each(function(index) {
        var tl = new TimelineMax();
        tl.from(this, duration, animations[0]);

        scene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.8,
                reverse: false
            })
            .setTween(tl)
            .addTo(controller);
    });


    $('[animate-width]').each(function(index) {
        var tl = new TimelineMax();
        tl.from(this, .75, animations[3]);

        scene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.8,
                reverse: false
            })
            .setTween(tl)
            .addTo(controller);
    });


    $("[animate-text-roll]").each(function(index) {
        var splitone = new SplitText(this, { type: "chars,words, lines" }),
            tl = new TimelineLite({ delay: 1 });
        var tl = new TimelineMax();
        tl.staggerFrom(splitone.chars, 0.8, { opacity: 0, scale: 0, y: 80, rotationX: 180, transformOrigin: "0% 50% -50", ease: Back.easeOut }, 0.01, "+=0");

        scene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: .8,
                reverse: false
            })
            .setTween(tl)
            .addTo(controller);

    });




    $('[animate-fade-2]').each(function(index) {
        var tl = new TimelineMax();
        tl.from(this, .75, animations[2]);

        scene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.8,
                reverse: false
            })
            .setTween(tl)
            .addTo(controller);
    });


    // Create scenes for splittext
    $("[animate-text]").each(function(index) {
        var splitone = new SplitText(this, { type: "chars,words, lines" }),
            tl = new TimelineLite({ delay: 1 });
        var tl = new TimelineMax();
        tl.staggerFrom(splitone.chars, 0.5, { y: 80, opacity: 0, ease: Power4.easeOut }, 0.01);

        scene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.6,
                reverse: false
            })
            .setTween(tl)
            .addTo(controller);

    });



    $("[animate-text-loop]").each(function(index) {
        var splitone = new SplitText(this, { type: "chars,words, lines" }),
            tl = new TimelineLite({ delay: .5 });
        var tl = new TimelineMax();
        tl.staggerFrom(splitone.chars, 3, { delay: .5, y: 80, opacity: 0, ease: Power4.easeOut, repeat: -1 }, 0.01);

        scene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.8,
                reverse: false
            })
            .setTween(tl)
            .addTo(controller);

    });


    $('[animate-line]').each(function(index) {
        var tl = new TimelineMax();
        tl.from(this, duration, animations[1]);

        var scene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.8,
                reverse: false
            })
            .setTween(tl)
            .addTo(controller);
    });


    $('[animate-overlay]').each(function(index) {
        var tl = new TimelineMax();
        tl.fromTo(
            this,
            1, { skewX: 30, scale: 1.5 }, {
                delay: 1,
                skewX: 0,
                xPercent: 100,
                transformOrigin: "0% 100%",
                repeatDelay: 1,
                ease: Power2.easeOut
            }
        );

        scene = new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 0.6,
                reverse: false
            })
            .setTween(tl)
            .addTo(controller);
    });


    $('[animate-parallax]').each(function(index) {

        var pColorScene = new ScrollMagic.Scene({
                triggerElement: '#main-content',
                triggerHook: .5,
                duration: '400%'
            })
            .setTween(TweenMax.from(this, .5, { y: '-200%', ease: Power0.easeNone }))
            .addTo(controller);

    });








}


function handleAnimations() {

    var Homepage = Barba.BaseView.extend({
        namespace: 'homepage',
        onEnter: function() {
            // The new Container is ready and attached to the DOM.
            console.log("enter");
            $(".portraits-hero").removeClass("d-none");
            $(".couples-hero").removeClass("d-none");
            $(".weddings-hero").removeClass("d-none");
            TweenMax.from(".portraits-hero", .75, { delay: .5, y: "+=50", alpha: 0, ease: Power3.easeInOut });
            TweenMax.from(".couples-hero", .75, { delay: .7, y: "+=50", alpha: 0, ease: Power3.easeInOut });
            TweenMax.from(".weddings-hero", .75, { delay: 1, y: "+=50", alpha: 0, ease: Power3.easeInOut });
            var mySplitText = new SplitText(".portraits-hero p", { type: "chars,words, lines" }),
                tl = new TimelineLite({ delay: 0.5 });
            tl.staggerFrom(mySplitText.chars, 0.5, { y: 100, opacity: 0 }, 0.02);

            var mySplitText = new SplitText(".couples-hero p", { type: "chars,words, lines" }),
                t2 = new TimelineLite({ delay: 0.7 });
            t2.staggerFrom(mySplitText.chars, 0.5, { y: 100, opacity: 0 }, 0.02);

            var mySplitText = new SplitText(".weddings-hero p", { type: "chars,words, lines" }),
                t3 = new TimelineLite({ delay: 1 });
            t3.staggerFrom(mySplitText.chars, 0.5, { y: 100, opacity: 0 }, 0.02);

            //scrollMagic();

        },
        onEnterCompleted: function() {
            // The Transition has just finished.

        },
        onLeave: function() {
            // A new Transition toward a new page has just started.
            console.log("leave");
            TweenMax.to("#main-content", .5, { y: "-=40", alpha: 0, overwrite: false, immediateRender: false });


        },
        onLeaveCompleted: function() {
            // The Container has just been removed from the DOM.
        }
    });


    var About = Barba.BaseView.extend({
        namespace: 'about',
        onEnter: function() {


            //mobile
            $(".mobile-hero").removeClass("d-none");
            $(".mobile-header").removeClass("d-none");
            $(".v-line").removeClass("d-none");
            $(".body-content").removeClass("d-none");


            TweenMax.from(".mobile-hero", .75, { delay: .5, alpha: 0, ease: Power3.easeInOut });

            var mySplitText = new SplitText(".mobile-header", { type: "chars,words, lines" }),
                tl = new TimelineLite({ delay: 0.5 });
            tl.staggerFrom(mySplitText.chars, 0.5, { y: 100, opacity: 0 }, 0.02);

            TweenMax.from(".v-line", 1, { delay: 1, alpha: 0, height: 0, ease: Power3.easeInOut });


            // The new Container is ready and attached to the DOM.
            console.log("enter");
            TweenMax.from("#main-content", .5, { delay: .5, alpha: 0, ease: Power3.easeInOut, overwrite: false, immediateRender: false });

            $("#header").removeClass("d-none");
            var mySplitText = new SplitText("#header", { type: "chars,words, lines" }),
                tl = new TimelineLite({ delay: 0.5 });
            tl.staggerFrom(mySplitText.chars, 0.5, { y: 100, opacity: 0 }, 0.02);
            $("#bio").removeClass("d-none");
            TweenMax.from("#bio", .75, { delay: 1.5, y: "+=50", alpha: 0, ease: Power3.easeInOut });
            $("#line").removeClass("d-none");
            TweenMax.from("#line", .75, { delay: 1, width: 0, ease: Power3.easeInOut });

            scrollMagic();



        },
        onEnterCompleted: function() {
            // The Transition has just finished.
            var container = document.querySelector('.about-hero-image');

            setTimeout(function() {
                container.classList.toggle('is-visible');
            }, 500);


        },
        onLeave: function() {
            // A new Transition toward a new page has just started.
            console.log("leave");
            TweenMax.to("#main-content", .5, { y: "-=100", alpha: 0, ease: Power3.easeInOut, overwrite: false, immediateRender: false });


        },
        onLeaveCompleted: function() {
            // The Container has just been removed from the DOM.
        }
    });


    var Portraits = Barba.BaseView.extend({
        namespace: 'Portraits',
        onEnter: function() {




        },
        onEnterCompleted: function() {
            // The Transition has just finished.
            // The new Container is ready and attached to the DOM.
            console.log("entered done");


            //mobile
            $(".mobile-hero").removeClass("d-none");
            $(".mobile-header").removeClass("d-none");
            $(".v-line").removeClass("d-none");
            $(".body-content").removeClass("d-none");


            TweenMax.from(".mobile-hero", .75, { delay: .5, alpha: 0, ease: Power3.easeInOut });

            var mySplitText = new SplitText(".mobile-header", { type: "chars,words, lines" }),
                tl = new TimelineLite({ delay: 0.5 });
            tl.staggerFrom(mySplitText.chars, 0.5, { y: 100, opacity: 0 }, 0.02);

            TweenMax.from(".v-line", 1, { delay: 1, alpha: 0, height: 0, ease: Power3.easeInOut });


            //desktop
            $(".desktop-body").removeClass("d-none");

            TweenMax.from(".desktop-hero", .75, { delay: .5, alpha: 0, y: "-=30", ease: Power3.easeInOut });


            TweenMax.from(".d-title-content", .75, { delay: 1, alpha: 0, y: "+=30", ease: Power3.easeInOut });


            var mySplitText = new SplitText(".desktop-hero-text", { type: "chars,words, lines" }),
                tl = new TimelineLite({ delay: 1 });
            tl.staggerFrom(mySplitText.chars, 0.5, { y: 100, opacity: 0 }, 0.02);

            var mySplitText2 = new SplitText(".d-title", { type: "chars,words,lines" }),
                t2 = new TimelineLite({ delay: .5 });
            t2.staggerFrom(mySplitText2.chars, 0.8, { opacity: 0, scale: 0, y: 80, rotationX: 180, transformOrigin: "0% 50% -50", ease: Back.easeOut }, 0.01, "+=0");

            var mySplitText3 = new SplitText(".gallery-side-text", { type: "chars" }),
                t3 = new TimelineLite({ delay: 1.4 });
            t3.staggerFrom(mySplitText3.chars, 0.5, { y: 100, opacity: 0 }, 0.02);



            TweenMax.from("#first-img", .75, { delay: 1, y: "+=30", alpha: 0, ease: Back.easeOut });
            TweenMax.from("#sec-img", .75, { delay: 1.5, y: "+=30", alpha: 0, ease: Back.easeOut });


            scrollMagic();

        },
        onLeave: function() {
            // A new Transition toward a new page has just started.
            console.log("leave");
            TweenMax.to("#main-content", 1, { y: "+=30", alpha: 0, ease: Power3.easeInOut, overwrite: false, immediateRender: false });


        },
        onLeaveCompleted: function() {
            // The Container has just been removed from the DOM.
        }
    });

    var Contact = Barba.BaseView.extend({
        namespace: 'Contact',
        onEnter: function() {



        },
        onEnterCompleted: function() {
            // The Transition has just finished.
            // The new Container is ready and attached to the DOM.
            console.log("entered done2");
            $("#main-content").removeClass("d-none");

            $("#mic").removeClass("d-none");
            $("#line").removeClass("d-none");
            $("#emailBtn").removeClass("d-none");
            $("#directions").removeClass("d-none");

            var mySplitText = new SplitText("#directions", { type: "chars,words, lines" }),
                tl = new TimelineLite({ delay: 1 });
            tl.staggerFrom(mySplitText.chars, 0.5, { y: 100, opacity: 0 }, 0.02);

            TweenMax.from("#mic", 1, { delay: .5, alpha: 0, ease: Power3.easeInOut});
            TweenMax.from("#line", 1, { delay: 1.5, width: 0, ease: Power3.easeInOut});

            TweenMax.from("#emailBtn", 1, { delay: 1.8, alpha: 0, ease: Power3.easeInOut});



        },
        onLeave: function() {
            // A new Transition toward a new page has just started.
            console.log("leave");
            TweenMax.to("#main-content", 1, { y: "+=30", alpha: 0, ease: Power3.easeInOut, overwrite: false, immediateRender: false });


        },
        onLeaveCompleted: function() {
            // The Container has just been removed from the DOM.
        }
    });







    // Don't forget to init the view!
    Homepage.init();
    About.init();
    Portraits.init();
    Contact.init();



}


function initBarba() {
    var FadeTransition = Barba.BaseTransition.extend({
        start: function() {
            /**
             * This function is automatically called as soon the Transition starts
             * this.newContainerLoading is a Promise for the loading of the new container
             * (Barba.js also comes with an handy Promise polyfill!)
             */

            // As soon the loading is finished and the old page is faded out, let's fade the new page
            Promise
                .all([this.newContainerLoading, this.fadeOut()])
                .then(this.fadeIn.bind(this));
        },

        fadeOut: function() {
            /**
             * this.oldContainer is the HTMLElement of the old Container
             */

            return $(this.oldContainer).animate({ opacity: 0 }).promise();
        },

        fadeIn: function() {
            /**
             * this.newContainer is the HTMLElement of the new Container
             * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
             * Please note, newContainer is available just after newContainerLoading is resolved!
             */

            var _this = this;
            var $el = $(this.newContainer);

            $(this.oldContainer).hide();

            $el.css({
                visibility: 'visible',
                opacity: 0
            });

            $el.animate({ opacity: 1 }, 1000, function() {
                /**
                 * Do not forget to call .done() as soon your transition is finished!
                 * .done() will automatically remove from the DOM the old Container
                 */

                _this.done();
            });
        }
    });

    /**
     * Next step, you have to tell Barba to use the new Transition
     */

    Barba.Pjax.getTransition = function() {
        /**
         * Here you can use your own logic!
         * For example you can use different Transition based on the current page or link...
         */

        return FadeTransition;
    };

    //handle the barba views
    handleAnimations();

    //disable cache so that animations always
    Barba.Pjax.cacheEnabled = false;

    //Please note, the DOM should be ready
    Barba.Pjax.start();




}


var intervalId;

function hideRec(){

    $("#recContent").addClass('d-none');
    $(".formContent").removeClass('d-none');

}

function recAnimation() {

    var firstLoop = true;

    $("#directions").addClass('d-none');
    $("#readyText").removeClass('d-none');

    $('#recorder')[0].contentWindow.startRecording();

    var i = 0;
    intervalId = setInterval(function() {

        if (firstLoop) {
            $("#stopButton").removeClass('d-none');
        }

        $("#readyText").addClass('d-none');
        // $("#recText").removeClass('d-none');

        // var mySplitText = new SplitText("#recText", { type: "chars,words, lines" }),
        //         tl = new TimelineLite({ delay: 1, repeat: -1, repeatDelay: 4});
        //         tl.staggerFrom(mySplitText.chars, 1.3, { x: 20, autoAlpha:0 }, 0.02),
        //         tl.staggerTo(mySplitText.chars, 1, {x: 0, autoAlpha: 0 }, 0.02),
        //         tl.staggerTo(mySplitText.chars, 1, {autoAlpha: 1 }, 0.02);

        i += 3;
        var bar1 = new ldBar("#progress");
        var bar2 = document.getElementById('progress').ldBar;
        bar1.set(i);
        console.log(i);

        if (i > 100) {

            stopRecAnimation();

        }



    }, 2400);
}

function submitRec() {

    $("#recContent").addClass('d-none');
    $("#thanks").removeClass('d-none');
    $('#recorder')[0].contentWindow.sendRec();

}


function stopRecAnimation() {

    clearInterval(intervalId);

    $("#stopButton").addClass('d-none');
    $("#recText").addClass('d-none');
    $("#progress").addClass('d-none');
    $("#sendButton").removeClass('d-none');
    $('#recorder')[0].contentWindow.stopRecording();
    // $("#mesText").removeClass('d-none');


}


function startRec() {


    $("#mic").removeAttr("onclick");
    $("#directions").removeAttr("onclick");
    $("#emailBtn").addClass('d-none');

    console.log("test");

    TweenMax.to("#mic", .5, {
        delay: .5,
        alpha: 0,
        ease: Power3.easeInOut,
        overwrite: false,
        immediateRender: false,
        onComplete: function() {
            $("#mic").addClass('d-none');
            $("#progress").removeClass('d-none');
        }
    });
    TweenMax.from("#progress", .5, { delay: 1, alpha: 0, ease: Power3.easeInOut, overwrite: false, immediateRender: false, onComplete: recAnimation });
    TweenMax.to("#directions", .5, { delay: 1, alpha: 0, ease: Power3.easeInOut, overwrite: false, immediateRender: false });



}