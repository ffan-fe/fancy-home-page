require('./style.css');

var jQuery = window.jQuery = require('jquery');
var smoothScroll = require('smooth-scroll');
var Cookies = require('js-cookie');

require('typed.js');
require('waypoints/lib/jquery.waypoints.js');
require('jquery-countto');
require('jarallax');

(function ($) {
  var b = Cookies.get("preview-viewed");
  "true" === b && $("body").removeClass("fixed"),
    smoothScroll.init(),
    $(".parallax").jarallax();
  var c = $(".hero .type-hide").width();
  $(".hero .type-show").css("margin-left", c + "px"),
    $(".hero .type").typed({
      strings: ["true", "modest", "original", "Authentic."],
      callback: function () {
        $(".hero .type-hide").animate({
          opacity: 0
        }, 1e3, function () {
          $(".hero").removeClass("black"),
            $(".hero .parallax").animate({
              opacity: 1
            }, 1e3, function () {
              $(".hero .type-show").animate({
                opacity: 1
              }, 1e3, function () {
                $("body").removeClass("fixed"),
                  Cookies.set("preview-viewed", "true")
              })
            }),
            $(".hero .typed-cursor").remove()
        })
      }
    });
  $(".lazy").waypoint(function () {
    $(this.element).addClass("lazy-visible")
  }, {
    offset: "90%"
  }),
    $(".count-to").waypoint(function () {
      $(this.element).countTo()
    }, {
      offset: "90%"
    })
})(jQuery);
