// import './../vendor/ResizeSensor.min.js';
// import './../vendor/theia-sticky-sidebar.min.js';

// $('.catalog__nav').theiaStickySidebar({
//   })

// $('.nav-list').theiaStickySidebar({
//   containerSelector: '.nav--top',
//   innerWrapperSelector: '.page'
// });

import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';
// import {  } from './../vendor/TweenMax.min.js';
import { TweenMax, TimelineMax } from 'gsap';

const Controller = new ScrollMagic.Controller()


//desktop only----------------------------------------------
const mobile = {
  init_flag: false,
  init: () => {
    const width = $(window).width();
    if (width > 992 && !mobile.init_flag) {
      mobile.setup();
    } else {
      if (mobile.init_flag) {
        mobile.destroy();
      }
    }
  },

  setup: () => {
    mobile.init_flag = true;
    const tweens = {
    }

    mobile.controller = new ScrollMagic.Controller();
    let sidenav = new ScrollMagic.Scene({
      triggerElement: ".catalog",
      triggerHook: 0,
      duration: 0,
      reverse: true
    })
      .setPin('.side-nav')
      .addTo(mobile.controller);

  },

  update: () => {
    if (mobile.init_flag) {
      // console.log("update")
      // mobile.triggers.forEach(el => {
      //   el.scene.duration(el.clientHeight);
      // });
    }
  },

  destroy: function () {
    mobile.controller.destroy(true);
    mobile.init_flag = false;
    // $('.c-logo > *').attr('style', '');
  },
};
mobile.init();
$(window).on('resize', function(){
  mobile.init();
});



// let topline = new ScrollMagic.Scene({
//   triggerElement: ".page",
//   triggerHook: 0,
//   reverse: true
// })
//   .setPin('.top-line')
//   .addTo(Controller)
//   .on("update", function () {
//     console.log(Controller.info("scrollDirection"));
//   })



