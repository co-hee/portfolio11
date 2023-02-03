$(function () {

    $('#fullpage').fullpage({
        anchors: ['sec01', 'sec02', 'sec03', 'sec04', 'sec05'],
        keyboardScrolling: true,
        navigation: true,
        showActiveTooltip: true,
        navigationPosition: 'left',
        navigationTooltips: ['MAIN', 'MENU', 'COMMUNITY', 'FRANCHISE'],
        loopTop: true,
        loopBottom: true,

        afterLoad: function (lnk, idx) {
            console.log(lnk, idx);
            //만약에 2번쨰에 오면... nav li class on을 붙이고 나머지 a는 뗀다.
            // $('nav li a').removeClass('on');
            if (idx == 2 || idx == 4) {
                //$('nav li').eq(1).find('a').addClass('on');
                $('.gnb').addClass('on');
                $('#fp-nav ul li a span').addClass('on');
                $('#fp-nav ul li .fp-tooltip').addClass('on');
            } else {
                $('.gnb').removeClass('on');
                $('#fp-nav ul li a span').removeClass('on');
                $('#fp-nav ul li .fp-tooltip').removeClass('on');

            }

            if (idx == 5) {
                $('.gnb').css({
                    opacity: 0,
                })
            } else {
                $('.gnb').css({
                    opacity: 1,
                })
            }


        }

    });

    $('.mainVisual .slide_img').slick({
        asNavFor: '.mainVisual .slide_txt',
        vertical: true,
        speed: 0,
        autoplay: true,
        arrows: false,
        verticalSwiping: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,

        prevArrow: $('.prevArrow'),
        nextArrow: $('.nextArrow'),
    });


    //$('.mainVisual .slide_txt figure').removeClass("on");

    $('.mainVisual .slide_img').on('afterChange', function (e, s, c) {
        $('.img img').attr({
            src: './img/main_center' + (c + 1) + '.png'
        })
        $('.mainVisual .slide_img figure').eq(c + 1).css({
            zIndex: 10,
            transform: "translateY(0)",
            transition: "1s",
        });

        console.log(s.$slides.find('.slick-current'), $('.mainVisual .slide_img .slick-current'))
    })

    $('.mainVisual .slide_img').on("beforeChange", function (e, s, c, n) {
        $('.mainVisual .slide_img figure').css({
            zIndex: 0,
            transform: "translateY(100%)",
            transition: "none",
        })
    });

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


    //mainMenu
    var dr = true;

    $('.mainMenu .slide_menu').slick({
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3
        // nextArrow: $('.mainMenu .nextArrow'),

    });

    $('.mainMenu .slide_menu').on('afterChange', function (e, s, c) {
        if ((c) === s.slideCount / 2) {
            dr = false;
            $('.mainMenu .nextArrow').addClass('on')
        } else {
            dr = true;
            $('.mainMenu .nextArrow').removeClass('on')
        }
        console.log(dr, c, s.slideCount, s);
    })



    $('.mainMenu .nextArrow').on('click', function () {
        if (dr) {
            $('.mainMenu .slide_menu').slick('slickNext');
        } else {
            $('.mainMenu .slide_menu').slick('slickPrev')
        }
    })




















})