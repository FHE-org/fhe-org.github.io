(function () {
  "use strict";

  /**
   * ------------------------------------------------------------------------
   * Functions
   * ------------------------------------------------------------------------
   */
  
  // Back to top button
  const myBacktotop = function () {
    // browser window scroll 
    var offset = 300,
      offset_opacity = 1200,
      back_to_top = document.querySelector(".back-top"),
      scrollpos = window.scrollY;

    var add_class_back_scroll = function add_class_back_scroll() {
      back_to_top.classList.add("block");
      back_to_top.classList.remove("hidden");
    };

    var add_class_offset_scroll = function add_class_offset_scroll() {
      back_to_top.classList.add("opacity-90");
    };

    var remove_class_back_scroll = function remove_class_back_scroll() {
      back_to_top.classList.remove("block","opacity-90");
      back_to_top.classList.add("hidden");
    };

    // back to top by es6-scroll-to
    var defaults = {
      duration: 400,
      easing: function easing(t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
      },
      to: 0
    };
    var animatedScrollTo = function animatedScrollTo(args) {
      if (isInteger(args)) {
        args = {
          to: args
        };
      }
      var options = extend(defaults, args);
      options.startingYOffset = window.pageYOffset;
      options.distanceYOffset = parseInt(options.to, 10) - options.startingYOffset;
      window.requestAnimationFrame(function (timestamp) {
        return animateScroll(options, timestamp);
      });
    };
    var animateScroll = function animateScroll(options, now) {
      if (!options.startTime) {
        options.startTime = now;
      }
      var currentTime = now - options.startTime;
      var newYOffset = Math.round(options.easing(currentTime, options.startingYOffset, options.distanceYOffset, options.duration));
      if (currentTime < options.duration) {
        window.requestAnimationFrame(function (timestamp) {
          return animateScroll(options, timestamp);
        });
      } else {
        newYOffset = options.to;
      }
      setScrollTopPosition(newYOffset);
    };
    var setScrollTopPosition = function setScrollTopPosition(newYOffset) {
      document.documentElement.scrollTop = newYOffset;
      document.body.scrollTop = newYOffset;
    };
    var isInteger = function isInteger(value) {
      if (Number.isInteger) {
        return Number.isInteger(value);
      } else {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
      }
    };
    var extend = function extend(defaults, options) {
      var extendedOptions = {};
      for (var key in defaults) {
        extendedOptions[key] = options[key] || defaults[key];
      }
      return extendedOptions;
    };
    var easeInQuint = function easeInQuint(t, b, c, d) {
      return c * (t /= d) * t * t * t * t + b;
    };

    const scroll_a = document.querySelectorAll('.back-top');
    if ( scroll_a !=null) {
      for (var i = 0; i < scroll_a.length; i++) {
        scroll_a[i].addEventListener("click", function(){
          animatedScrollTo({
            easing: easeInQuint,
            duration: 800
          });
        });
      }
    }

    window.addEventListener('scroll', function () {
      scrollpos = window.scrollY;
      if (scrollpos > offset) {
        add_class_back_scroll();
      } else {
        remove_class_back_scroll();
      }
      if (scrollpos > offset_opacity) {
        add_class_offset_scroll();
      }
    });
  }

  // Preloader
  const myPreloader = function () {
    var xpre = document.querySelector(".preloader");
    if ( xpre != null) {
      window.addEventListener('load',function(){
        document.querySelector('body').classList.add("loaded-success")  
      });
    }
  }

  // Lightbox
  const myLightbox = function () {
    // GLightbox
    const lightbox_class = document.querySelector(".glightbox3");
    if ( lightbox_class != null) {
      const lightbox = GLightbox({
        selector: '.glightbox3',
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
      });
    }
  }

  // splidejs
  const mySplidejs = function () {
    // mySplidejs
    const postslider_class = document.querySelector("#post-carousel");
    if ( postslider_class != null) {
        const postslider = new Splide( postslider_class, {
          rewind    : true,
          pagination: true,
          arrows    : true,
          type   : 'loop',
          drag   : 'free',
          perPage: 6,
          perMove     : 1,
          gap      : 24,
          breakpoints: {
            1200: {
              perPage: 4,
            },
            768: {
              perPage: 3,
            },
            500: {
              perPage: 2,
            },
          }
        } );
        postslider.mount();
      }
  }

  // Typed Js
  const myTyped = function () {
    var x = document.querySelectorAll('[data-toggle="typed"]');
    "undefined"!=typeof Typed&&x&&[]
    .forEach.call( x, function(x){
      !function(x){
        var typo = x.dataset.options;
        typo = typo?JSON.parse(typo):{};
        var object = Object.assign({
          typeSpeed:100,
          backSpeed:100,
          backDelay:1e3,
          loop:!0
        },typo);
        new Typed(x,object)
      }(x)
    });
  }

   // wow animate
  const myWow = function () {
    new WOW().init();
  }

  // Smooth Scroll Anchor
  const mySmooth = function () {
    var scroll = new SmoothScroll('a[href*="#"]', {
      offset : 80,
      speed: 1200,
      speedAsDuration: true
    });
  }
  
  // if scroll down
  const myScrollspy = function () {
    var scrollpos = document.body.scrollTop || document.documentElement.scrollTop;
    var nav_height = 80;
    var main_nav = document.querySelector(".main-nav");

    // navbar on scroll
    var add_class_on_scroll = function add_class_on_scroll() {
      return main_nav.classList.add("navbar-scrolled")
    };
    var remove_class_on_scroll = function remove_class_on_scroll() {
      return main_nav.classList.remove("navbar-scrolled")
    };

    var navCustom = function navCustom() {
      scrollpos = document.body.scrollTop || document.documentElement.scrollTop;

      if (scrollpos >= nav_height) {
        add_class_on_scroll();
      } else {
        remove_class_on_scroll();
      }
    }
    
    var navCustomone = function navCustomone() {
      var section = document.querySelectorAll(".section");
      if ( section != null) {
	      var sections = {};
	      var i = 0;

	      Array.prototype.forEach.call(section, function(e) {
	        sections[e.id] = e.offsetTop;
	      });

	      window.onscroll = function() {
	        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

	        for (i in sections) {
	          if (sections[i] <= scrollPosition + nav_height ) {
	            document.querySelector('.navbar>li>.active').classList.remove('active');
	            document.querySelector('a[href*=' + i + ']').classList.add('active');
	          }
	        }
	      }
	    }
    }

    // if nav start not in top and not scroll
    window.addEventListener('load', function () {
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      navCustom();
      navCustomone();
    });

    // if nav scroll
    window.addEventListener('scroll', function () {
      navCustom();
      navCustomone();
    });
  }

  // menu mobile
  const menu_Mobile = function menu_Mobile() {
    var menu_dropa = document.querySelectorAll(".menu-mobile");
    var menu_menu_x = document.querySelectorAll(".navbar");

    var _loop = function _loop(i) {
      menu_dropa[i].addEventListener("click", function (event) {
        menu_dropa[i].classList.toggle("show");
        menu_menu_x[i].classList.toggle("hidden");

       });
      menu_menu_x[i].addEventListener("click", function (event) {
        menu_dropa[i].classList.toggle("show");
        menu_menu_x[i].classList.toggle("hidden");

       });
    };

    for (var i = 0; i < menu_dropa.length; i++) {
      _loop(i);
    }
  };

  // Custom JS
  const myCustom = function () {
    
    // insert your javascript in here

  }

  /**
   * ------------------------------------------------------------------------
   * Launch Functions
   * ------------------------------------------------------------------------
   */
   
  myBacktotop();
  myPreloader();
  menu_Mobile();
  myLightbox();
  mySplidejs();
  myTyped();
  myWow();
  mySmooth();
  myScrollspy();
  myCustom();

})();