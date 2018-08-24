

document.addEventListener("DOMContentLoaded", function() {
 
  $( document ).ready(function() {

        
    



      initBarba();

      



        








    });//end ready


});//end loaded

function scrollMagic(){

  var controller = new ScrollMagic.Controller();
  var duration = 0.75;
  var animations = [
    {x:200, opacity:1, height: 300},
    {rotation:360, opacity:1},
    {scale:0.5, opacity:1, x:400}
  ]
  $('[data-scrollmagic]').each(function(index) {
    var tl = new TimelineMax();
    tl.to(this, duration, animations[index]);

    var scene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.6,
      reverse: false
    })
      .setTween(tl)
      .addIndicators()
      .addTo(controller);
  });



}


function handleAnimations(){

    var Homepage = Barba.BaseView.extend({
      namespace: 'homepage',
      onEnter: function() {
          // The new Container is ready and attached to the DOM.
          console.log("enter");
          TweenMax.from("#main-content", 1, {delay: .5, x: "+=100", alpha: 0, ease: Elastic.easeOut.config(1, 0.3)});
          
      },
      onEnterCompleted: function() {
          // The Transition has just finished.
          
      },
      onLeave: function() {
          // A new Transition toward a new page has just started.
          console.log("leave");
          TweenMax.to("#main-content", 1, { x: "-=100", alpha: 0});
          

      },
      onLeaveCompleted: function() {
          // The Container has just been removed from the DOM.
      }
    });


    var About = Barba.BaseView.extend({
      namespace: 'about',
      onEnter: function() {
          // The new Container is ready and attached to the DOM.
          console.log("enter");
          TweenMax.from("#main-content", 1, {delay: .5, x: "+=100", alpha: 0, ease: Elastic.easeOut.config(1, 0.3)});
          
      },
      onEnterCompleted: function() {
          // The Transition has just finished.
          
      },
      onLeave: function() {
          // A new Transition toward a new page has just started.
          console.log("leave");
          TweenMax.to("#main-content", 1, { x: "-=100", alpha: 0});
          

      },
      onLeaveCompleted: function() {
          // The Container has just been removed from the DOM.
      }
    });







      // Don't forget to init the view!
      Homepage.init();
      About.init();
      


}


function initBarba(){
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
      visibility : 'visible',
      opacity : 0
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



