'use strict'

$('#slider').slick({
    infinite: true,
    slidesToShow: 3.4,
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

