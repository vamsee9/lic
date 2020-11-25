"use strict";
!(function (e) {
  var a = e("body"),
    t = e(window);
  function s() {
    e(".sf-more-li, .sf-logo-li").remove();
    var a = e("body").innerWidth();
    e(".sf-menu").each(function () {
      var t = e(this),
        s = t.closest(".top-nav");
      if ((s.attr("style", ""), a > 1199)) {
        var i = s.find(".sf-menu > li");
        i.removeClass("sf-xl-hidden");
        var o = t.closest(".header_logo_center"),
          r = 0,
          n = 0;
        if (o.length) {
          var l = o.find(".logo");
          r = l.outerWidth(!0) + 70;
        }
        var d = s.outerWidth(!0);
        if (
          (i.each(function (a) {
            var t = e(this).outerWidth() + 4;
            if ((n += t) >= d - r) {
              var s = e('<li class="sf-more-li"><a>...</a><ul></ul></li>');
              e(i[a - 1]).before(s);
              e(s).outerWidth(!0);
              var o = i.filter(":gt(" + (a - 2) + ")");
              return (
                o.clone().appendTo(s.find("ul")), o.addClass("sf-xl-hidden"), !1
              );
            }
          }),
          o.length)
        ) {
          var f = o.find(".sf-menu > li:not(.sf-xl-hidden)"),
            c = f.length;
          f.each(function () {
            e(this).outerWidth();
          });
          var p = Math.floor(c / 2);
          c % 2 == 0 && p--;
          var h = f.eq(p);
          h.after('<li class="sf-logo-li"><a href="#">&nbsp;</a></li>'),
            o.find(".sf-logo-li").width(r);
          var u = h.offset().left + h.outerWidth() - (a / 2 - r / 2);
          s.css({ left: -u });
        }
      }
    });
  }
  function i(a) {
    var t = e(".top-nav .mega-menu");
    t.length &&
      setTimeout(function () {
        var a = e("body").innerWidth();
        a > 1e3 &&
          t.each(function () {
            var t = e(this);
            t.css({ display: "block", left: "auto" });
            var s = 0,
              i = e(".header_side_sticked");
            i.length &&
              i.hasClass("active-slide-side-header") &&
              ((s = i.outerWidth(!0)),
              i.hasClass("header_side_right") && (s = -s),
              (a -= s));
            var o = t.outerWidth(),
              r = t.offset().left - s + o / 2 - a / 2;
            t.css({ left: -r, display: "none" }),
              t.closest("ul").hasClass("nav") || t.css("left", "");
          });
      }, a);
  }
  function o() {
    if ("undefined" != typeof PhotoSwipe) {
      var t = '.photoswipe-link, a[data-gal^="prettyPhoto"], [data-thumb] a';
      if (e(t).length) {
        if (e(".pswp").length) return;
        a.append(
          '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true"><div class="pswp__bg"></div><div class="pswp__scroll-wrap"><div class="pswp__container"><div class="pswp__item"></div><div class="pswp__item"></div><div class="pswp__item"></div></div><div class="pswp__ui pswp__ui--hidden"><div class="pswp__top-bar"><div class="pswp__counter"></div><a class="pswp__button pswp__button--close" title="Close (Esc)"></a><a class="pswp__button pswp__button--share" title="Share"></a><a class="pswp__button pswp__button--fs" title="Toggle fullscreen"></a><a class="pswp__button pswp__button--zoom" title="Zoom in/out"></a><div class="pswp__preloader"><div class="pswp__preloader__icn"><div class="pswp__preloader__cut"><div class="pswp__preloader__donut"></div></div></div></div></div><div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"><div class="pswp__share-tooltip"></div> </div><a class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)"></a><a class="pswp__button pswp__button--arrow--right" title="Next (arrow right)"></a><div class="pswp__caption"><div class="pswp__caption__center"></div></div></div></div></div>'
        ),
          e("body").on("click", t, function (a) {
            a.preventDefault();
            var s = e(this),
              i = s.closest(
                ".photoswipe-container, .isotope-wrapper, .owl-carousel, .flickr_ul, .images"
              ),
              o = i.find(t);
            o.length || o.push(s);
            var r = [],
              n = {
                bgOpacity: 0.7,
                showHideOpacity: !0,
                history: !1,
                shareEl: !1,
                index: s.data("index") ? s.data("index") : 0,
              },
              l = e(".pswp")[0];
            o.each(function (a) {
              var t = e(this);
              if (!t.closest(".clone, .cloned").length) {
                var l = {};
                if (
                  (s[0] !== t[0] ||
                    s.data("index") ||
                    (i.hasClass("owl-carousel") || i.hasClass("images")
                      ? (n.index = a - 1)
                      : (n.index = a)),
                  t.data("iframe"))
                ) {
                  var d = o.length > 1 ? "" : "&autoplay=1";
                  (l.html =
                    '<div class="embed-responsive embed-responsive-16by9">'),
                    (l.html +=
                      '<iframe class="embed-responsive-item" src="' +
                      e(this).data("iframe") +
                      "?rel=0" +
                      d +
                      '&enablejsapi=1&api=1"></iframe>'),
                    (l.html += "</div>");
                } else {
                  l.src = t.attr("href");
                  var f = 1170,
                    c = 780,
                    p = t.data(),
                    h = t.find("img").first().data();
                  p.width && (f = p.width),
                    p.height && (c = p.height),
                    void 0 !== h &&
                      (h.large_image_width && (f = h.large_image_width),
                      h.large_image_height && (c = h.large_image_height)),
                    (l.w = f),
                    (l.h = c);
                }
                r.push(l);
              }
            });
            var d = new PhotoSwipe(l, PhotoSwipeUI_Default, r, n);
            d.init(),
              d.listen("afterChange", function () {
                e(d.container)
                  .find("iframe")
                  .each(function () {
                    e(this)[0].contentWindow.postMessage(
                      '{"method":"pause","event":"command","func":"pauseVideo","args":""}',
                      "*"
                    );
                  });
              }),
              d.listen("close", function () {
                e(d.container)
                  .find("iframe")
                  .each(function () {
                    e(this)[0].contentWindow.postMessage(
                      '{"method":"pause","event":"command","func":"pauseVideo","args":""}',
                      "*"
                    );
                  });
              });
          });
      }
    }
  }
  function r(e, a) {
    var t = e.data("animation") ? e.data("animation") : "fadeInUp",
      s = e.data("delay") ? e.data("delay") : 150;
    setTimeout(function () {
      e.addClass("animated " + t);
    }, a * s);
  }
  function n(e) {
    e.hasClass("counted") || e.countTo().addClass("counted");
  }
  function l(e) {
    e.progressbar({ transition_delay: 300 });
  }
  function d(a) {
    var t = a.data(),
      s = t.size ? t.size : 270,
      i = t.line ? t.line : 20,
      o = t.bgcolor ? t.bgcolor : "#ffffff",
      r = t.trackcolor ? t.trackcolor : "#c14240",
      n = t.speed ? t.speed : 3e3;
    a.easyPieChart({
      barColor: r,
      trackColor: o,
      scaleColor: !1,
      scaleLength: !1,
      lineCap: "butt",
      lineWidth: i,
      size: s,
      rotate: 0,
      animate: n,
      onStep: function (a, t, s) {
        e(this.el).find(".percent").text(Math.round(s));
      },
    });
  }
  function f() {
    e().flexslider &&
      (e(".page_slider .flexslider").each(function (a) {
        var t = e(this),
          s = t.data(),
          i = "undefined" === s.nav || s.nav,
          o = "undefined" === s.dots || s.dots,
          r = "undefined" !== s.speed ? s.speed : 7e3;
        t.flexslider({
          animation: "fade",
          pauseOnHover: !0,
          useCSS: !0,
          controlNav: o,
          directionNav: i,
          prevText: "",
          nextText: "",
          smoothHeight: !1,
          slideshowSpeed: r,
          animationSpeed: 600,
          start: function (a) {
            a.find(".intro_layers").children().css({ visibility: "hidden" }),
              a
                .find(".flex-active-slide .intro_layers")
                .children()
                .each(function (a) {
                  var t = e(this),
                    s = t.data("animation")
                      ? t.data("animation")
                      : "fadeInDown";
                  setTimeout(function () {
                    t.addClass("animated " + s);
                  }, 500 * a);
                });
          },
          after: function (a) {
            a.find(".flex-active-slide .intro_layers")
              .children()
              .each(function (a) {
                var t = e(this),
                  s = t.data("animation") ? t.data("animation") : "";
                setTimeout(function () {
                  t.addClass("animated " + s);
                }, 500 * a);
              });
          },
          end: function (a) {
            a.find(".intro_layers")
              .children()
              .each(function () {
                var a = e(this),
                  t = a.data("animation") ? a.data("animation") : "fadeInDown";
                a.removeClass("animated " + t).css({ visibility: "hidden" });
              });
          },
        });
      }),
      e(".flexslider").each(function (a) {
        var t = e(this);
        t.find(".flex-active-slide").length ||
          t.flexslider({
            animation: "fade",
            useCSS: !0,
            controlNav: !1,
            directionNav: !1,
            prevText: "",
            nextText: "",
            smoothHeight: !1,
            slideshowSpeed: 5e3,
            animationSpeed: 800,
          });
      }));
    e().owlCarousel &&
      e(".owl-carousel").each(function () {
        var a = e(this);
        a.find("> *").each(function (a) {
          e(this).attr("data-index", a);
        });
        var s = a.data(),
          i = !!s.loop && s.loop,
          o = s.margin || 0 === s.margin ? s.margin : 30,
          r = !!s.nav && s.nav,
          n = s.navPrev ? s.navPrev : '<i class="fa fa-chevron-left">',
          l = s.navNext ? s.navNext : '<i class="fa fa-chevron-right">',
          d = !!s.dots && s.dots,
          f = s.themeclass ? s.themeclass : "owl-theme",
          c = !!s.center && s.center,
          p = s.items ? s.items : 4,
          h = !!s.autoplay && s.autoplay,
          u = s.responsiveXs ? s.responsiveXs : 1,
          v = s.responsiveSm ? s.responsiveSm : 2,
          g = s.responsiveMd ? s.responsiveMd : 3,
          m = s.responsiveLg ? s.responsiveLg : 4,
          _ = !1 !== s.draggable || s.draggable,
          w = !!s.syncedClass && s.syncedClass,
          b = !!s.filters && s.filters;
        b &&
          (a.after(a.clone().addClass("owl-carousel-filter-cloned")),
          e(b).on("click", "a", function (t) {
            if ((t.preventDefault(), !e(this).hasClass("selected"))) {
              var s = e(this).attr("data-filter");
              e(this).siblings().removeClass("selected active"),
                e(this).addClass("selected active");
              for (var i = a.find(".owl-item").length - 1; i >= 0; i--)
                a.trigger("remove.owl.carousel", [1]);
              e(
                a
                  .next()
                  .find(" > " + s)
                  .clone()
              ).each(function () {
                a.trigger("add.owl.carousel", e(this)),
                  e(this).addClass("scaleAppear");
              }),
                a.trigger("refresh.owl.carousel"),
                e().prettyPhoto &&
                  a
                    .find("a[data-gal^='prettyPhoto']")
                    .prettyPhoto({ hook: "data-gal", theme: "facebook" });
            }
          })),
          a
            .owlCarousel({
              loop: i,
              margin: o,
              nav: r,
              autoplay: h,
              dots: d,
              themeClass: f,
              center: c,
              navText: [n, l],
              mouseDrag: _,
              touchDrag: _,
              items: p,
              responsive: {
                0: { items: u },
                767: { items: v },
                992: { items: g },
                1200: { items: m },
              },
            })
            .addClass(f),
          c && a.addClass("owl-center"),
          t.on("resize", function () {
            a.trigger("refresh.owl.carousel");
          }),
          a.hasClass("owl-news-slider-items") &&
            w &&
            a.on("changed.owl.carousel", function (a) {
              var t = i ? a.item.index + 1 : a.item.index;
              e(w).trigger("to.owl.carousel", [t]);
            });
      });
    var f = e(".page_header").first(),
      c = f.closest(".boxed").length,
      p = e(".header_side_sticked").length;
    if (f.length) {
      s(), i(1);
      var h = f.outerHeight();
      f.wrap('<div class="page_header_wrapper"></div>');
      var u = e(".page_header_wrapper");
      c || u.css({ height: h }),
        f.hasClass("ls")
          ? (u.addClass("ls"), f.hasClass("ms") && u.addClass("ms"))
          : f.hasClass("ds")
          ? (u.addClass("ds"),
            f.hasClass("bs") && u.addClass("bs"),
            f.hasClass("ms") && u.addClass("ms"))
          : f.hasClass("cs")
          ? (u.addClass("cs"),
            f.hasClass("cs2") && u.addClass("cs2"),
            f.hasClass("cs3") && u.addClass("cs3"))
          : f.hasClass("gradient-background") &&
            u.addClass("gradient-background");
      var v = 0;
      c || "fixed" === u.css("position") || (v = f.offset().top),
        f.on(
          "affixed-top.bs.affix affixed.bs.affix affixed-bottom.bs.affix",
          function (e) {
            f.hasClass("affix-top")
              ? u
                  .removeClass("affix-wrapper affix-bottom-wrapper")
                  .addClass("affix-top-wrapper")
              : f.hasClass("affix")
              ? u
                  .removeClass("affix-top-wrapper affix-bottom-wrapper")
                  .addClass("affix-wrapper")
              : f.hasClass("affix-bottom")
              ? u
                  .removeClass("affix-wrapper affix-top-wrapper")
                  .addClass("affix-bottom-wrapper")
              : u.removeClass(
                  "affix-wrapper affix-top-wrapper affix-bottom-wrapper"
                ),
              c && "fixed" !== f.css("position") && (s(), i(1)),
              p && i(1);
          }
        ),
        f.on("affixed-top.bs.affix", function () {}),
        f.on("affix.bs.affix", function () {
          if (!t.scrollTop()) return !1;
        }),
        f.affix({ offset: { top: v, bottom: -10 } });
    }
    if (
      ((function () {
        var a = e(".affix-aside");
        if (a.length) {
          (t = e(window)),
            a
              .on("affix.bs.affix", function (e) {
                var t = a.width() - 1,
                  s = a.offset().left;
                a.width(t).css("left", s);
              })
              .on("affix-bottom.bs.affix", function (t) {
                var s = a.width() - 1,
                  i = 0,
                  o = e(".header_side_sticked");
                o.length &&
                  o.hasClass("active-slide-side-header") &&
                  !o.hasClass("header_side_right") &&
                  (i = o.outerWidth(!0));
                var r = a.offset().left - i - e("#box_wrapper").offset().left;
                a.width(s).css("left", r);
              })
              .on("affix-top.bs.affix", function (e) {
                a.css({ width: "", left: "" });
              });
          var s = a.offset().top - e(".page_header").height(),
            i =
              e(".page_footer").outerHeight(!0) +
              e(".page_copyright").outerHeight(!0);
          a.affix({ offset: { top: s - 10, bottom: i + 150 } }),
            t.on("resize", function () {
              a.removeClass("affix affix-bottom")
                .addClass("affix-top")
                .trigger("affix-top.bs.affix");
              var t = 0;
              [
                ".page_topline",
                ".page_toplogo",
                ".page_header",
                ".page_title",
                ".blog_slider",
                ".blog-featured-posts",
              ].map(function (a) {
                t += e(a).outerHeight(!0) || 0;
              });
              var s =
                e(".page_footer").outerHeight(!0) +
                e(".page_copyright").outerHeight(!0);
              (a.data("bs.affix").options.offset.top = t - 10),
                (a.data("bs.affix").options.offset.bottom = s + 150),
                a.affix("checkPosition");
            }),
            a.affix("checkPosition");
        }
      })(),
      a.scrollspy("refresh"),
      e().appear)
    ) {
      var g = e(".animate");
      if (
        (g.appear(),
        g.filter(":appeared").each(function (a) {
          r(e(this), a);
        }),
        a.on("appear", ".animate", function (a, t) {
          e(t).each(function (a) {
            r(e(this), a);
          });
        }),
        e().countTo)
      ) {
        var m = e(".counter");
        m.appear(),
          m.filter(":appeared").each(function () {
            n(e(this));
          }),
          a.on("appear", ".counter", function (a, t) {
            e(t).each(function () {
              n(e(this));
            });
          });
      }
      if (e().progressbar) {
        var _ = e(".progress .progress-bar");
        _.appear(),
          _.filter(":appeared").each(function () {
            l(e(this));
          }),
          a.on("appear", ".progress .progress-bar", function (a, t) {
            e(t).each(function () {
              l(e(this));
            });
          }),
          e('a[data-toggle="tab"]').on("shown.bs.tab", function (a) {
            l(e(e(a.target).attr("href")).find(".progress .progress-bar"));
          }),
          e(".dropdown").on("shown.bs.dropdown", function (a) {
            l(e(this).find(".progress .progress-bar"));
          });
      }
      if (e().easyPieChart) {
        var w = e(".chart");
        w.appear(),
          w.filter(":appeared").each(function () {
            d(e(this));
          }),
          a.on("appear", ".chart", function (a, t) {
            e(t).each(function () {
              d(e(this));
            });
          });
      }
    }
    if (e().jflickrfeed) {
      var b = e("#flickr, .flickr_ul");
      b.length &&
        (b.hasClass("flickr_loaded") ||
          b
            .jflickrfeed(
              {
                flickrbase: "http://api.flickr.com/services/feeds/",
                limit: 4,
                qstrings: { id: "131791558@N04" },
                itemTemplate:
                  '<a href="{{image_b}}" class="photoswipe-link"><li><img alt="{{title}}" src="{{image_m}}" /></li></a>',
              },
              function (e) {
                o();
              }
            )
            .addClass("flickr_loaded"));
    }
    e().spectragram &&
      {
        instaToken: "3905738328.60c782d.b65ed3f058d64e6ab32c110c6ac12d9b",
        instaID: "60c782dfecaf4050b59ff4c159246641",
        init: function () {
          (jQuery.fn.spectragram.accessData = {
            accessToken: this.instaToken,
            clientID: this.instaID,
          }),
            e(".instafeed").each(function () {
              var a = e(this);
              a.find("img").length ||
                a.spectragram("getRecentTagged", {
                  max: 8,
                  query: "grey",
                  wrapEachWith: '<div class="photo">',
                });
            });
        },
      }.init();
    e(".isotope-wrapper").each(function (a) {
      var t = e(this),
        s = t.hasClass("masonry-layout") ? "masonry" : "fitRows",
        i = !!t.children(".col-md-4").length && ".col-md-4";
      t.isotope({
        percentPosition: !0,
        layoutMode: s,
        masonry: { columnWidth: i },
      });
      var o = t.attr("data-filters")
        ? e(t.attr("data-filters"))
        : t.prev().find(".filters");
      o.length &&
        (o.on("click", "a", function (a) {
          a.preventDefault();
          var s = e(this),
            i = s.attr("data-filter");
          t.isotope({ filter: i }),
            s.siblings().removeClass("selected active"),
            s.addClass("selected active");
        }),
        o.on("change", "select", function (a) {
          a.preventDefault();
          var s = e(this).val();
          t.isotope({ filter: s });
        }));
    }),
      e("#toggle_shop_view").on("click", function (a) {
        a.preventDefault(),
          e(this).toggleClass("grid-view"),
          e("#products").toggleClass("grid-view list-view");
      }),
      e("a.showlogin, a.showcoupon").on("click", function (a) {
        a.preventDefault();
        var t = e(this).parent().next();
        "none" === t.css("display") ? t.show(150) : t.hide(150);
      }),
      e("a.remove").on("click", function (a) {
        a.preventDefault(), e(this).closest("tr, .media").remove();
      }),
      e(".images").flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        selector: "figure > div",
        directionNav: !1,
      }),
      e(".wc-tab, .woocommerce-tabs .panel:not(.panel .panel)").hide(),
      e(".wc-tabs li a, ul.tabs li a").on("click", function (a) {
        a.preventDefault();
        var t = e(this),
          s = t.closest(".wc-tabs-wrapper, .woocommerce-tabs");
        s.find(".wc-tabs, ul.tabs").find("li").removeClass("active"),
          s.find(".wc-tab, .panel:not(.panel .panel)").hide(),
          t.closest("li").addClass("active"),
          s.find(t.attr("href")).show();
      }),
      e("a.woocommerce-review-link").on("click", function () {
        return e(".reviews_tab a").trigger("click"), !0;
      });
    var C = window.location.hash,
      x = window.location.href,
      y = e(".wc-tabs, ul.tabs").first();
    if (
      (C.toLowerCase().indexOf("comment-") >= 0 ||
      "#reviews" === C ||
      "#tab-reviews" === C
        ? y.find("li.reviews_tab a").trigger("click")
        : x.indexOf("comment-page-") > 0 || x.indexOf("cpage=") > 0
        ? y.find("li.reviews_tab a").trigger("click")
        : "#tab-additional_information" === C
        ? y.find("li.additional_information_tab a").trigger("click")
        : y.find("li:first a").trigger("click"),
      e().slider)
    ) {
      var k = e(".slider-range-price");
      if (k.length) {
        var T = e(".slider_price_min"),
          D = e(".slider_price_max");
        k.slider({
          range: !0,
          min: 0,
          max: 1e5,
          values: [1500, 3e4],
          slide: function (e, a) {
            T.val(a.values[0]), D.val(a.values[1]);
          },
        }),
          T.val(k.slider("values", 0)),
          D.val(k.slider("values", 1));
      }
    }
    e(
      ".related.products ul.products, .upsells.products ul.products, .cross-sells ul.products"
    )
      .addClass("owl-carousel top-right-nav")
      .owlCarousel({
        loop: !0,
        autoplay: !0,
        margin: 30,
        nav: !0,
        dots: !1,
        items: 2,
        navText: [
          '<i class="fa fa-chevron-left"></i>',
          '<i class="fa fa-chevron-right"></i>',
        ],
        responsive: {
          0: { items: 1 },
          767: { items: 1 },
          992: { items: 2 },
          1200: { items: 2 },
        },
      }),
      e(".color-filters")
        .find("a[data-background-color]")
        .each(function () {
          e(this).css({ "background-color": e(this).data("background-color") });
        });
    var P = e("#messages_modal");
    P.find("ul").length && P.modal("show"),
      e(".preloaderimg").fadeOut(150),
      e(".preloader")
        .fadeOut(150)
        .delay(50, function () {
          e(this).remove();
        });
  }
  e(document).ready(function () {
    !(function () {
      e().scrollbar && e('[class*="scrollbar-"]').scrollbar(),
        e().superfish &&
          (e("ul.sf-menu").superfish({
            popUpSelector: "ul:not(.mega-menu ul), .mega-menu ",
            delay: 700,
            animation: { opacity: "show", marginTop: 0 },
            animationOut: { opacity: "hide", marginTop: 5 },
            speed: 200,
            speedOut: 200,
            disableHI: !1,
            cssArrows: !0,
            autoArrows: !0,
            onInit: function () {
              var a = e(this);
              a
                .find(".sf-with-ul")
                .after('<span class="sf-menu-item-mobile-toggler"/>'),
                a
                  .find(".sf-menu-item-mobile-toggler")
                  .on("click", function (a) {
                    var t = e(this).parent();
                    t.hasClass("sfHover")
                      ? t.superfish("hide")
                      : t.superfish("show");
                  });
            },
          }),
          e("ul.sf-menu-side").superfish({
            popUpSelector: "ul:not(.mega-menu ul), .mega-menu ",
            delay: 500,
            animation: { opacity: "show", height: "100%" },
            animationOut: { opacity: "hide", height: 0 },
            speed: 400,
            speedOut: 300,
            disableHI: !1,
            cssArrows: !0,
            autoArrows: !0,
          })),
        e(".page_header .toggle_menu, .page_toplogo .toggle_menu").on(
          "click",
          function () {
            e(this)
              .toggleClass("mobile-active")
              .closest(".page_header")
              .toggleClass("mobile-active")
              .end()
              .closest(".page_toplogo")
              .next()
              .find(".page_header")
              .toggleClass("mobile-active");
          }
        ),
        e(".sf-menu a").on("click", function () {
          var a = e(this);
          a.hasClass("sf-with-ul") ||
            "#" !== a.attr("href").charAt(0) ||
            a
              .closest(".page_header")
              .toggleClass("mobile-active")
              .find(".toggle_menu")
              .toggleClass("mobile-active");
        });
      var s = e(".page_header_side");
      e("ul.menu-click")
        .find("li")
        .each(function () {
          var a = e(this);
          a.find("ul").length &&
            a
              .append('<span class="toggle_submenu color-darkgrey"></span>')
              .find(".toggle_submenu, > a")
              .on("click", function (t) {
                var s = e(this);
                ("#" !== s.attr("href") &&
                  s.parent().hasClass("active-submenu")) ||
                  t.preventDefault(),
                  s.parent().hasClass("active-submenu")
                    ? s.parent().removeClass("active-submenu")
                    : a
                        .addClass("active-submenu")
                        .siblings()
                        .removeClass("active-submenu");
              });
        }),
        s.length &&
          (e(".toggle_menu_side").on("click", function () {
            var t = e(this);
            if (
              (t.toggleClass("active"),
              t.hasClass("header-slide")
                ? s.toggleClass("active-slide-side-header")
                : (t.parent().hasClass("header_side_right")
                    ? a.toggleClass("active-side-header slide-right")
                    : a.toggleClass("active-side-header"),
                  a.parent().toggleClass("html-active-push-header")),
              t.closest(".header_side_sticked").length)
            ) {
              i(600);
              var o = e(".affix-aside");
              o.length &&
                (o
                  .removeClass("affix affix-bottom")
                  .addClass("affix-top")
                  .css({ width: "", left: "" })
                  .trigger("affix-top.bs.affix"),
                setTimeout(function () {
                  o.removeClass("affix affix-bottom")
                    .addClass("affix-top")
                    .css({ width: "", left: "" })
                    .trigger("affix-top.bs.affix");
                }, 10));
            }
          }),
          a.on("mousedown touchstart", function (t) {
            if (
              !e(t.target).closest(".page_header_side").length &&
              !s.hasClass("header_side_sticked")
            ) {
              s.removeClass("active-slide-side-header"),
                a.removeClass("active-side-header slide-right"),
                a.parent().removeClass("html-active-push-header");
              var i = e(".toggle_menu_side");
              i.hasClass("active") && i.removeClass("active");
            }
          }));
      var r = t.width();
      t.on("resize", function () {
        r = e(window).width();
      }),
        e(".top-nav .sf-menu")
          .on("mouseover", "ul li", function () {
            if (r > 991) {
              var a = e(this);
              if (a.find("ul").length > 0) {
                var t = a.find("ul, div").first().width();
                if (
                  a.find("ul, div").first().parent().offset().left + t + t >
                  r
                ) {
                  var s = t + 0;
                  a.find("ul, div").first().css({ left: -s });
                } else a.find("ul, div").first().css({ left: "100%" });
              }
            }
          })
          .on("mouseover", "> li", function () {
            if (r > 991) {
              var a = e(this);
              if (a.find("ul").length > 0) {
                var t = a.find("ul").width(),
                  s = a.find("ul").parent().offset().left;
                if (s + t > r) {
                  var i = r - (s + t);
                  a.find("ul").first().css({ left: i });
                }
              }
            }
          });
      var n = e(".page_header").outerHeight(!0);
      if (
        (e(".mainmenu_side_wrapper").length
          ? a.scrollspy({ target: ".mainmenu_side_wrapper", offset: n })
          : e(".top-nav").length &&
            a.scrollspy({ target: ".top-nav", offset: n }),
        e().localScroll &&
          e(
            ".top-nav > ul, .mainmenu_side_wrapper > ul, #land,  .comments-link"
          ).localScroll({
            duration: 900,
            easing: "easeInOutQuart",
            offset: 40 - n,
          }),
        e(".bg_teaser, .cover-image").each(function () {
          var a = e(this),
            t = a.find("img").first();
          if ((t.length || (t = a.parent().find("img").first()), t.length)) {
            var s = t.attr("src");
            a.css("background-image", "url(" + s + ")");
            var i = t.parent();
            i.is("a") &&
              (a.prepend(t.parent().clone().html("")), i.attr("data-gal", ""));
          }
        }),
        e(".embed-placeholder").each(function () {
          e(this).on("click", function (a) {
            var t = e(this);
            t.attr("data-gal") ||
              (a.preventDefault(),
              "" === t.attr("href") || "#" === t.attr("href")
                ? t
                    .replaceWith(
                      t
                        .data("iframe")
                        .replace(/&amp/g, "&")
                        .replace(/$lt;/g, "<")
                        .replace(/&gt;/g, ">")
                        .replace(/$quot;/g, '"')
                    )
                    .trigger("click")
                : t.replaceWith(
                    '<iframe class="embed-responsive-item" src="' +
                      t.attr("href") +
                      '?rel=0&autoplay=1"></iframe>'
                  ));
          });
        }),
        e().UItoTop && e().UItoTop({ easingType: "easeInOutQuart" }),
        e().parallax && e(".s-parallax").parallax("50%", 0.01),
        e().prettyPhoto &&
          e("a[data-gal^='prettyPhoto']").prettyPhoto({
            hook: "data-gal",
            theme: "facebook",
          }),
        o(),
        e('[type="search"]').addClass("form-control"),
        e().carousel && e(".carousel").carousel(),
        e(".nav-tabs").each(function () {
          e(this).find("a").first().tab("show");
        }),
        e('a[data-toggle="tab"]').on("shown.bs.tab", function (a) {
          var t = e(a.relatedTarget.hash).find("iframe"),
            s = t.attr("src");
          t.attr("src", ""), t.attr("src", s);
        }),
        e(".tab-content").each(function () {
          e(this).find(".tab-pane").first().addClass("fade in");
        }),
        e(".panel-group").each(function () {
          e(this).find("a").first().filter(".collapsed").trigger("click");
        }),
        e().tooltip && e('[data-toggle="tooltip"]').tooltip(),
        e().countdown)
      ) {
        var l = e("#comingsoon-countdown"),
          d = "undefined" !== l.data("date") && l.data("date");
        d ? (d = new Date(d)) : (d = new Date()).setMonth(d.getMonth() + 1),
          l.countdown({ until: d });
      }
      e("form.contact-form").on("submit", function (a) {
        a.preventDefault();
        var t = e(this);
        if (
          (e(t).find(".contact-form-respond").remove(),
          e(t)
            .find('[aria-required="true"], [required]')
            .each(function (a) {
              var t = e(this);
              t.val().length ||
                t.addClass("invalid").on("focus", function () {
                  t.removeClass("invalid");
                });
            }),
          !t.find('[aria-required="true"], [required]').hasClass("invalid"))
        ) {
          var s = t.serialize();
          jQuery.post("contact.php", s).done(function (a) {
            e(t)
              .find('[type="submit"]')
              .attr("disabled", !1)
              .parent()
              .append(
                '<div class="contact-form-respond color-main mt-20">' +
                  a +
                  "</div>"
              ),
              t.find(".form-errors").length || t[0].reset();
          });
        }
      }),
        e(".search_modal_button").on("click", function (a) {
          a.preventDefault(),
            e("#search_modal").modal("show").find("input").first().focus();
        }),
        e("form.searchform, form.search-form").on("submit", function (a) {
          a.preventDefault();
          var t = e(this),
            s = e("#search_modal");
          if (
            (s.find("div.searchform-respond").remove(),
            e(t)
              .find('[type="text"], [type="search"]')
              .each(function (a) {
                var t = e(this);
                t.val().length ||
                  t.addClass("invalid").on("focus", function () {
                    t.removeClass("invalid");
                  });
              }),
            !t.find('[type="text"]').hasClass("invalid"))
          ) {
            s.modal("show");
            var i = t.serialize();
            jQuery
              .post("search.php", i)
              .done(function (e) {
                s.append('<div class="searchform-respond">' + e + "</div>");
              })
              .fail(function (e) {
                s.append(
                  '<div class="searchform-respond">Search cannot be done. You need PHP server to search.</div>'
                );
              });
          }
        }),
        e(".signup").on("submit", function (a) {
          a.preventDefault();
          var t = e(this);
          t.find(".response").html("Adding email address..."),
            jQuery.ajax({
              url: "mailchimp/store-address.php",
              data:
                "ajax=true&email=" + escape(t.find(".mailchimp_email").val()),
              success: function (e) {
                t.find(".response").html(e);
              },
            });
        }),
        e().tweet &&
          e(".twitter").tweet({
            modpath: "./twitter/",
            count: 2,
            avatar_size: 48,
            loading_text: "loading twitter feed...",
            join_text: "auto",
            username: "michaeljackson",
            template:
              '{avatar}<div class="tweet_right">{join}<span class="tweet_text links-maincolor">{tweet_text}</span>{time}</div>',
          });
      var f = e("#timetable");
      f.length &&
        e("#timetable_filter").on("click", "a", function (a) {
          a.preventDefault(), a.stopPropagation();
          var t = e(this);
          if (!t.hasClass("selected")) {
            var s = t.attr("data-filter");
            f
              .find("tbody td")
              .removeClass("current")
              .end()
              .find(s)
              .closest("td")
              .addClass("current"),
              t.closest("ul").find("a").removeClass("selected"),
              t.addClass("selected");
          }
        });
    })(),
      initGoogleMap();
  }),
    t.on("load", function () {
      f();
    }),
    t.on("resize", function () {
      a.scrollspy("refresh"), s(), i(1);
      var t = e(".page_header").first();
      if (
        (t.length &&
          !e(document).scrollTop() &&
          t.first().data("bs.affix") &&
          (t.first().data("bs.affix").options.offset.top = t.offset().top),
        !t.closest(".boxed").length)
      ) {
        var o = !1;
        t.hasClass("affix") &&
          ((o = !0),
          t.removeClass("affix"),
          setTimeout(function () {
            e(".page_header_wrapper").css({ height: t.first().outerHeight() }),
              t.addClass("affix");
          }, 250)),
          o ||
            e(".page_header_wrapper").css({ height: t.first().outerHeight() });
      }
    });
})(jQuery);