// Preloader Js

$(document).ready(function () {
    $('.preloader').delay(2500).fadeOut();
});

// ScrollTop Js

$(window).scroll(function () {
    var scrooling = $(this).scrollTop();
    if (scrooling > 400) {
        $('.scrollTop').fadeIn();
    } else {
        $('.scrollTop').fadeOut();
    }

    if (scrooling > 350) {
        $('.menu-bg').addClass('bg');
    } else {
        $('.menu-bg').removeClass('bg');
    }
})

$('.scrollTop i').click(function () {
    $('html ,body').animate({
        scrollTop: '0',
    }, 1500)
})