$(function() {

    $('.navbar-toggle').click(function() {
        $(this).toggleClass('act');
        if ($(this).hasClass('act')) {
            $('.main-menu').addClass('act');
        } else {
            $('.main-menu').removeClass('act');
        }
    });

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    //jQuery for dropdown
    if ($(window).width() > 767) {
        $(".dropdown").mouseover(function() {
            $('.dropdown-content').css("display", "block");
        });
        $('.dropdown').mouseout(function() {
            if ($('.dropdown-content').css('display') == 'block' && $('.dropdown:hover').length == 0) {
                $('.dropdown-content').css("display", "none");
            }
        });
        $(".dropdown-content").mouseout(function() {
            if ($('.dropdown:hover').length == 0) {
                $('.dropdown-content').css("display", "none");
            }
        });
    }

    if ($(window).width() < 768) {
        $('.fa-carent-down').toggle();
    }
    $(window).resize(function() {
        if ($(window).width() > 767) {
            $(".dropdown").mouseover(function() {
                $('.dropdown-content').css("display", "block");
            });
            $('.dropdown').mouseout(function() {
                if ($('.dropdown-content').css('display') == 'block' && $('.dropdown:hover').length == 0) {
                    $('.dropdown-content').css("display", "none");
                }
            });
            $(".dropdown-content").mouseout(function() {
                if ($('.dropdown:hover').length == 0) {
                    $('.dropdown-content').css("display", "none");
                }
            });
        }

        if ($(window).width() < 768) {
            $('.fa-carent-down').toggle();
        }
    });



    //jQuery for closing navbar on clicking link in mobile view
    $(document).on('click', '.page-scroll a', function(event) {
        if ($(".act").length) {
            $('.navbar-toggle').click();
        }
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.site-header',
        offset: 10
    });


    // Navigation overlay
    var s = skrollr.init({
        forceHeight: false,
        smoothScrolling: false,
        mobileDeceleration: 0.004,
        mobileCheck: function() {
            //hack - forces mobile version to be off
            return false;
        }
    });


});