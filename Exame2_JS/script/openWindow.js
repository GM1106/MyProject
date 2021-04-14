
'use strict'


// функция отображает/скрывает доп информацию при нажатии на кнопку в блоке "About" (картинка "New Yerk")
$(document).ready(function () {
    $("#showContentNY").click(function () {
        if ($("#contentNY").is(":hidden")) {
            $("#contentNY").show("slow");
        } else {
            $("#contentNY").hide("slow");
        }
        return false;
    });
});


// функция отображает/скрывает доп информацию при нажатии на кнопку в блоке "About" (картинка "Hong Kong")
$(document).ready(function () {
    $("#showContentHK").click(function () {
        if ($("#contentHK").is(":hidden")) {
            $("#contentHK").show("slow");
        } else {
            $("#contentHK").hide("slow");
        }
        return false;
    });
});


// функция отображает/скрывает доп информацию при нажатии на кнопку в блоке "Galery" 
$(document).ready(function () {
    $("#showContent").click(function () {
        if ($("#contentImg").is(":hidden")) {
            $("#contentImg").show("slow");
        } else {
            $("#contentImg").hide("slow");
        }
        return false;
    });
});


// увеличение картинка при нажатии на нее в блоке "Galery"
$(function () {
    $('.minimized').click(function (event) {
        let i_path = $(this).attr('src');
        $('body').append('<div id="ov"></div><div id="magnify"><img src="' + i_path + '"><div id="close"><i></i></div></div>');
        $('#magnify').css({
            left: ($(document).width() - $('#magnify').outerWidth()) / 2,
            top: ($(window).height() - $('#magnify').outerHeight()) / 2
        });
        $('#open, #magnify').fadeIn('fast');
    });

    $('body').on('click', '#close, #open', function (event) {
        event.preventDefault();
        $('#open, #magnify').fadeOut('fast', function () {
            $('#close, #magnify, #overlay').remove();
        });
    });
});


