(function ($) {
  "use strict";
  $(".dropdown-menu a.dropdown-toggle").on("click", function (e) {
    if (!$(this).next().hasClass("show")) {
      $(this)
        .parents(".dropdown-menu")
        .first()
        .find(".show")
        .removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass("show");
    $(this)
      .parents("li.nav-item.dropdown.show")
      .on("hidden.bs.dropdown", function (e) {
        $(".dropdown-submenu .show").removeClass("show");
      });
    return false;
  });
  if ($(".search-box-outer").length) {
    $(".search-box-outer").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search").on("click", function () {
      $("body").removeClass("search-active");
    });
  }
  $(document).on("ready", function () {
    $("[data-background]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-background") + ")"
      );
    });
  });
  new WOW().init();
  $(".hero-slider").owlCarousel({
    loop: true,
    nav: false,
    dots: true,
    margin: -1,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    items: 1,
    navText: [
      "<i class='far fa-long-arrow-left'></i>",
      "<i class='far fa-long-arrow-right'></i>",
    ],
  });
  $(".hero-slider").on("change.owl.carousel", function (event) {
    new WOW().init();
  });
  $(".hero-slider2").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: -1,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    items: 1,
    navText: [
      "<i class='fal fa-long-arrow-left'></i>",
      "<i class='fal fa-long-arrow-right'></i>",
    ],
  });
  $(".hero-slider2").on("change.owl.carousel", function (event) {
    new WOW().init();
  });
  $(".partner-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    responsive: { 0: { items: 2 }, 600: { items: 3 }, 1000: { items: 6 } },
  });
  $(".testimonial-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: true,
    autoplay: true,
    responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
  });
  $(window).on("load", function () {
    $(".preloader").fadeOut("slow");
  });
  $(".counter").countTo();
  $(".counter-box").appear(
    function () {
      $(".counter").countTo();
    },
    { accY: -100 }
  );
  $(".popup-gallery").magnificPopup({
    delegate: ".popup-img",
    type: "image",
    gallery: { enabled: true },
  });
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    iframe: {
      patterns: {
        youtube: {
          index: "youtube.com/",
          id: "v=",
          src: "http://www.youtube.com/embed/%id%?autoplay=1",
        },
      },
    },
  });
  $(window).scroll(function () {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      $("#scroll-top").fadeIn("slow");
    } else {
      $("#scroll-top").fadeOut("slow");
    }
  });
  $("#scroll-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500);
    return false;
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("fixed-top");
    }
  });
  if ($("#countdown").length) {
    $("#countdown").countdown("2028/01/30", function (event) {
      $(this).html(
        event.strftime(
          "" +
            '<div class="row">' +
            '<div class="col countdown-single">' +
            '<h2 class="mb-0">%-D</h2>' +
            '<h5 class="mb-0">Day%!d</h5>' +
            "</div>" +
            '<div class="col countdown-single">' +
            '<h2 class="mb-0">%H</h2>' +
            '<h5 class="mb-0">Hours</h5>' +
            "</div>" +
            '<div class="col countdown-single">' +
            '<h2 class="mb-0">%M</h2>' +
            '<h5 class="mb-0">Minutes</h5>' +
            "</div>" +
            '<div class="col countdown-single">' +
            '<h2 class="mb-0">%S</h2>' +
            '<h5 class="mb-0">Seconds</h5>' +
            "</div>" +
            "</div>"
        )
      );
    });
  }
  $(window).on("load", function () {
    if ($(".filter-box").children().length > 0) {
      $(".filter-box").isotope({
        itemSelector: ".filter-item",
        masonry: { columnWidth: 1 },
      });
      $(".filter-btns").on("click", "li", function () {
        var filterValue = $(this).attr("data-filter");
        $(".filter-box").isotope({ filter: filterValue });
      });
      $(".filter-btns li").each(function () {
        $(this).on("click", function () {
          $(this).siblings("li.active").removeClass("active");
          $(this).addClass("active");
        });
      });
    }
  });
  let date = new Date().getFullYear();
  $("#date").html(date);
})(jQuery);

//heart icon toggle

const heartIcons = document.querySelectorAll(".heart-icon");

heartIcons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    if (icon.classList.contains("far")) {
      icon.classList.remove("far");
      icon.classList.add("fas");
    } else {
      icon.classList.remove("fas");
      icon.classList.add("far");
    }
  });
});
// js for prduct galary

var ProductImg = document.getElementById("ProductImg");
var SmallImg = document.getElementsByClassName("small-img");

for (var i = 0; i < SmallImg.length; i++) {
  SmallImg[i].onclick = function () {
    ProductImg.style.opacity = 0; // Set the opacity to 0 to fade out
    setTimeout(() => {
      ProductImg.src = this.src; // Change the image source
      ProductImg.style.opacity = 1; // Set the opacity back to 1 to fade in
    }, 300); // 3-second delay

    // Remove the "active" class from all small images
    for (var j = 0; j < SmallImg.length; j++) {
      SmallImg[j].classList.remove("active");
    }
    this.classList.add("active"); // Add the "active" class to the clicked small image
  };
}

//tooltip
