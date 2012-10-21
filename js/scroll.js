(function($) {

  $.fn.scrollNav = function() {
    //fix bootstrap bug when navbar is fixed positioned
    $(document.body).append("<style type='text/css'> @media(max-width: 767px) { .navbar-fixed-top, .navbar-fixed-bottom, .navbar-static-top { margin-right: 0; margin-left: 0;} }</style>");

    var
      window_scroll = $(window).scrollTop(),
      navbar = this,
      navbar_height = navbar.height(),
      scroll_last = window_scroll,
      navbar_visible = navbar_height;

    var resize_handler = function(event) {
      navbar_height = navbar.height();
    }

    $(window).resize(resize_handler);
    //bootstrap mobile compatibility
    this.find(".nav-collapse").on("shown", resize_handler);
    this.find(".nav-collapse").on("hidden", resize_handler);

    $(window).scroll(function(event) {
      //calculate how far the window was scrolled
      //scrolling up the page is a positive delta
      window_scroll = $(window).scrollTop()
      var 
        scroll_delta = scroll_last - window_scroll,
        navbar_visible_new = navbar_visible + scroll_delta;


      if(scroll_delta < 0) {
        //scrolling down the page
        if(navbar_visible == navbar_height) {
          //navbar currently is totally visible, and has fixed positioning set
          //set to abs positioning so it begins to go out of frame
          navbar.css({"position": "absolute", "top": window_scroll + "px"});
        }
        //else:
        //navbar will be partially visible, let abs positioning move it
      }
      else if(scroll_delta > 0) {
        if(navbar_visible <= 0) {
          //navbar was not visible, set abs positioning right above this
          navbar.css({"position": "absolute", "top": (window_scroll - navbar_height) + "px"});
        }
        //scrolling up the page
        if(navbar_visible_new >= navbar_height) {
          //navbar will be 100% visible
          navbar.css({"position": "fixed", "top": "0px"});
        }
      }

      //recalculate the amount the navbar is visible
      navbar_visible = Math.min(Math.max(navbar_visible_new, 0), navbar_height);
      scroll_last = window_scroll;
    });
  }
})(jQuery);