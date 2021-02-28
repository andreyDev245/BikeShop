$(function(){

    $(".slide_featured").owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 2000,
        dots: false,
        checkVisibility: false,

        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
                center: false    
            },
            // breakpoint from 651 up
            701 : {
                items: 2,
                center: false,
                margin: 10
            },
            // breakpoint from 901 up
            1001 : {
                items: 3,
                center: true,
                margin: 10
            }
        }
    });

    $(".sale_carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 2000,
        dots: false,
        checkVisibility: false
    });

    
    $(".accessories_carousel").owlCarousel({
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 2000,
        dots: false,
        checkVisibility: false,


        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1    
            },
            // breakpoint from 651 up
            651 : {
                items: 2    
            },
            // breakpoint from 921 up
            921 : {
                items: 3
            },
            // breakpoint from 1231 up
            1231 : {
                items: 4
            }
        }
    });

    $(".bestSell_content_slider").owlCarousel({
        items: 4,
        loop: true,
        nav: true,
        autoplay: false,
        autoplayTimeout: 2000,
        dots: false,
        checkVisibility: false,

        
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1    
            },
            // breakpoint from 651 up
            651 : {
                items: 2    
            },
            // breakpoint from 1071 up
            1071 : {
                items: 3
            },
            // breakpoint from 1231 up
            1231 : {
                items: 4
            }
        }
    });
});