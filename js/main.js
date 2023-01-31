$(function () {

    $('#fullpage').fullpage({
        anchors: ['sec01', 'sec02', 'sec03', 'sec04', 'sec05'],
        keyboardScrolling: true,
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['MAIN', 'MENU', 'COMMUNITY', 'FRANCHISE']
    });

    $('.mainVisual .slide_img').slick({
        asNavFor: '.mainVisual .slide_txt',
        vertical: true,
        autoplay: true,
        arrows: false,
        verticalSwiping: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,

        prevArrow: $('.prevArrow'),
        nextArrow: $('.nextArrow'),
    });

    $('.mainVisual .slide_img').on('afterChange', function (e, s, c) {
        $('.img img').attr({
            src: './img/main_center' + (c + 1) + '.png'
        })
    })

    $('.mainVisual .slide_txt').slick({
        asNavFor: '.mainVisual .slide_img',
        // arrows: false,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
        fade: true,

        prevArrow: $('.prevArrow'),
        nextArrow: $('.nextArrow'),
    });






















})