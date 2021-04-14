"use strict";


// slick slide в блоке "Header"
let $slider = $(".header__slider").slick({
    arrows: !1, dots: !0, appendDots: $(".header__dots"),
    vertical: !0, dotsClass: ".slick-dotsnew", autoplay: !0, autoplaySpeed: 4e3
}),
    header = document.getElementById("header"),
    bgNum = [1, 2, 3, 4, 5];
$slider.on("afterChange", function (e, t, l) { header.style.backgroundImage = "url(./image/header/bg_footer" + bgNum[l] + ".jpg)" });



// slick slide в блоке "News"
$(".slick-track").css("max-width", $(window).width());
$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        dots: true,
        cssEase: 'linear',
        autoplaySpeed: 1000,
        fade: false,
        responsive: [
            {
                breakpoint: 1101,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
})



