// Preloader Js

$(document).ready(function () {
    $('.preloader').addClass('hide');
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