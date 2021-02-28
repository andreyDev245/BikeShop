$(function(){
    // script for buttons at card of product

    $('.featured_mark_basket').on('click', function(evt){
        evt.preventDefault();
        evt.stopPropagation();
        $(this).parents('.slide_featured_item').toggleClass('basket--active');
        $(this).toggleClass('featured_basket--active');
    });
    $('.featured_marks_heart').on('click', function(evt){
        evt.preventDefault();
        evt.stopPropagation();
        $(this).parents('.slide_featured_item').toggleClass('heart--active');
        $(this).toggleClass('featured_heart--active');
    }); 
    $('.featured_marks_eye').on('click', function(evt){
        evt.preventDefault();
        evt.stopPropagation();
        $(this).parents('.slide_featured_item').toggleClass('eye--active');
        $(this).toggleClass('featured_eye--active');
    }); 
    // ===========================================
    //  settings for extension formStyler

    $('.inputStyler').styler();
    
    // ==========================================
    
    // settings for extension Range slider
    $(".js-range-slider").ionRangeSlider();

    // ================================= 

    // script for toggle basket in block accessories
    $('.accessories_card_basket').on('click', function(evt){
        evt.preventDefault();
        evt.stopPropagation();
        $(this).parents('.accessories_carousel_link').toggleClass('accessories_card_basket');
        $(this).toggleClass('accessories_basket--active');
    }); 

    // script for buttons on the product card for section best selling
    $('.all_item_mark').on('click', function(evt){
        evt.preventDefault();
        evt.stopPropagation();
        $(this).toggleClass('all_mark--visible');
    });

    // script for toggle slider in section best sell
    let bestSellItem = $('.bestSell_content_item');
    $('.bestSell_tab').on('click', function(){
        $(this).siblings().removeClass('bestSell_tab--active');
        $(this).addClass('bestSell_tab--active');

        $(bestSellItem).removeClass('bestSell_item--active');
        $(bestSellItem).eq($(this).index()).addClass('bestSell_item--active');
        $('.owl-carousel').trigger('refresh.owl.carousel');
    });

    // script for buttons on the product card for page products

    $('.products_card_mark').on('click', function(evt){
        evt.preventDefault();
        evt.stopPropagation();
        $(this).toggleClass('products_mark-visible');
    });

    // script for product switching button
    let productsCard = $('.products_card');
    $('.btn_row').on('click', function(){
        $(this).siblings('.btn_grid').removeClass('btn_grid--active');
        $(this).addClass('btn_row--active');
        $(productsCard).addClass('products_card_row');
    });
    $('.btn_grid').on('click', function(){
        $(this).siblings('.btn_row').removeClass('btn_row--active');
        $(this).addClass('btn_grid--active');
        $(productsCard).removeClass('products_card_row');
    });
  
    //  script for sidebar accordion

    $('.sidebar_categories_btn').on('click', function(){
        $(this).toggleClass('sidebar_categories_btn--open');
        $(this).parent().siblings().children('.sidebar_categories_list').slideUp(150);
        $(this).parent().siblings().children('.sidebar_categories_btn').removeClass('sidebar_categories_btn--open');
        $(this).next().slideToggle(150);
    });

    // script for sidebar button 

    $('.sidebar_sizes_item').on('click', function(){
        $(this).siblings().removeClass('sidebar_sizes_active');
        $(this).addClass('sidebar_sizes_active');
    });

    // script for button pagination

    $('.pagination_item_link').on('click', function(evt){
        evt.preventDefault();
        $(this).parents().siblings().children().removeClass('pagination_item_link--active');
        $(this).addClass('pagination_item_link--active');
    });

    // script for button of mobile sidebar menu on page products

    let sidebarForm = $('.products_sidebar_mobile');
    let menuMobile = $('.menu_mobile');
    $('.menu_mobile_btn').on('click', function(){
        $(sidebarForm).toggleClass('products_sidebar_mobile--open');
        $(menuMobile).append(sidebarForm);
    });


    // script for mobile menu
    let mobileBlockMenu = $('.mobile_block_menu');
    let mobileMenuBtn = $('.mobile_menu_btn');
    let mobileMenu = $('.mobile_menu');

    $('.mobile_menu_btn').on('click', function(evt){
        evt.stopPropagation();
        $(mobileMenu).slideToggle(300);
    });

    $(mobileBlockMenu).on('click', function(evt){
        evt.stopPropagation();        
    });

    $('.menu_list_link').on('click', function(){
        $(mobileMenu).slideUp(300);
    });

    // ================================
    // script for tabs specifications

    $('.product_about_tab').on('click', function(){
        $(this).siblings().removeClass('product_about_tab--active');
        $(this).addClass('product_about_tab--active');
        $(this).parent().next('.product_about_content').children('.product_about_desc_item').fadeOut(0).eq($(this).index()).fadeIn(0);
    });

    // slower completion on click
        $('a[href$="anchor"]').on('click', function(evt){
            evt.preventDefault();
            let link = $(this).attr('href');
            $('html, body').animate({
                scrollTop : $(link).offset().top
            }, 1000)
        });
    // ==========================

    // script for button up
    let arrowTop = $('.arrow_top');
    $(window).on('scroll', function(){

        if ($(this).scrollTop() >= 800) {
            $(arrowTop).addClass('arrowTop_active');
            
        }else{
            $(arrowTop).removeClass('arrowTop_active');
        }
    });

    $(arrowTop).on('click', function(){
        $('html, body').animate({
            scrollTop : 0
        }, 1000)
    });
    // ===============================

    // button search

    $('.header_panel_search').on('click', function(evt){
        evt.stopPropagation();
        $('.header_panel_form').addClass('header_panel_form--open');
    });
    $('.header_search_btn').on('click', function(evt){
        evt.stopPropagation();
        $('.header_panel_form').removeClass('header_panel_form--open'); 
    });

    // modal form

    let headerUserLogin = $('.header_user_login');
    let headerUserSignup = $('.header_user_signup');
    let overlay = $('.overlay');
    let modalForm = $('.modal');
    let closeModal = $('.close_modal');
    let forgotBtn = $('.forgot_btn');
    let modalBtnLogin = $('.modal_btn_login');
    let modalBtnSignup = $('.modal_btn_signup');
    let modalBtnRemember = $('.modal_btn_remember');
    $(headerUserLogin).on('click', function(){
        $(overlay).addClass('overlay--open');
        
        $('body').addClass('noscrolling');
    });
    $(headerUserSignup).on('click', function(){
        $(overlay).addClass('overlay--open');
        $(modalForm).addClass('modal_register');
        $(modalBtnLogin).attr('value', 'registration');
        $('.modal_password_text').text('Pick a password');
        $('body').addClass('noscrolling');
    });

    $(overlay).on('click', function(){
        $(overlay).removeClass('overlay--open');
        $(modalForm).removeClass('modal_register');
        $(modalForm).removeClass('modal_form--forgot');
        $(modalBtnLogin).attr('value', 'LogIn');
        $(modalBtnRemember).removeClass('modal_btn_remember--open');
        $('.modal_password_text').text('Password');
        $('body').removeClass('noscrolling');
    });

    $(closeModal).on('click', function(evt){
        $(overlay).removeClass('overlay--open');
        $(modalForm).removeClass('modal_register');
        $(modalForm).removeClass('modal_form--forgot');
        $(modalBtnLogin).attr('value', 'LogIn');
        $(modalBtnRemember).removeClass('modal_btn_remember--open');
        $('.modal_password_text').text('Password');
        $('body').removeClass('noscrolling');
    });

    $(modalForm).on('click', function(evt){
        evt.stopPropagation();
    });

    $(forgotBtn).on('click', function(){
        $(modalForm).addClass('modal_form--forgot');
        $(modalBtnLogin).attr('value', 'Get a temporary password');
        $(modalBtnRemember).addClass('modal_btn_remember--open');
    });

    $(modalBtnRemember).on('click', function(){
        $(modalForm).removeClass('modal_form--forgot');
        $(modalBtnLogin).attr('value', 'LogIn');
        $(modalBtnRemember).removeClass('modal_btn_remember--open');
    });

    $(modalBtnSignup).on('click', function(){
        $(modalForm).addClass('modal_register');
        $(modalBtnLogin).attr('value', 'registration');
        $('.modal_password_text').text('Pick a password');
    });

    $('.modal_btn_register').on('click', function(){
        $(modalForm).removeClass('modal_register');
        $(modalBtnLogin).attr('value', 'LogIn');
        $('.modal_password_text').text('Password');
    });

    $('.modal_password_img').on('click', function(){
        $(this).toggleClass('modal_password_img--open');
        
        if( $(this).prev().attr('type') == 'password'){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
    // ============================= 

    $('body').on('click', function(){
        $(mobileMenu).slideUp(300);
        $('.header_panel_form').removeClass('header_panel_form--open');
    });
    // =======================
});

