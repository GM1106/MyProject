'use strict'

// планове движение экрана при клике на меню в блоке header
$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();

        let id = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({ scrollTop: top }, 1000);
    });
});



// функция отображает изменние закладки в меню при ее нажатии меню в блоке header
document.onclick = function (event) {

    console.log(event.target.tagName)
    if (event.target.tagName == 'BUTTON') {
        $('button').click(function () {
            $('button').removeClass('sector-active');
            $(this).addClass('sector-active');
        });

    } else {
        $('button').removeClass('sector-active');
    }
}


// плавное движение при клике на scroll меню в блоке header
$("#scroll").click(function () {
    let next;
    next = $(this).parent().next().find(".about");
    $('html,body').animate({
        scrollTop: next.offset().top
    }, 2000);
});







