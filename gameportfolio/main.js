$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    // $('nav a[href*="#"]').on('click', function () {
    //     $('html, body').animate({
    //        scrollTop: $($(this).attr('href')).offset().top - 100
    //     }, 2000);
    // });

    $('#up').on('click', function () {
        document.body.bodyscrollTop = 0, options = 2000
        document.documentElement.scrollTop = 0;
    }); 

    AOS.init({
        easing: 'ease',
        duration: 1800
    })
});