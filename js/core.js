$(document).ready(function(){
    Oslider();
    EventSlider();
    BannerSlider();
    menubtn();
});
var deviceWidth = $(window).width();

function Oslider(){
    if(deviceWidth <= 767){
        $('.Oslider').bxSlider({
            auto:true,
            slideWidth: 620,
            maxSlides: 1,
            minSlides: 1,
            autoHover:true,
            controls:false,
            touchEnabled : false,
            pause:7000,
            speed:3000
        })
    }else{
        $('.Oslider').bxSlider({
            auto:true,
            slideWidth: 545,
            maxSlides: 1,
            minSlides: 1,
            autoHover:true,
            controls:false,
            touchEnabled : false,
            pause:7000,
            speed:3000,
        });
    }
}
function EventSlider(){
    if(deviceWidth <= 767){
        $('.EventSlider').bxSlider({
            auto:true,
            slideWidth: 620,
            maxSlides: 1,
            minSlides: 1,
            autoHover:true,
            controls:true,
            touchEnabled : false,
            pause:7000,
            speed:3000,
            pager:false
        });
    }else{
        $('.EventSlider').bxSlider({
            auto:true,
            slideWidth: 545,
            maxSlides: 1,
            minSlides: 1,
            autoHover:true,
            controls:true,
            touchEnabled : false,
            pause:7000,
            speed:3000,
            pager:false
        });
    }
}
function BannerSlider(){
    $('.BannerSlider').bxSlider({
        auto:true,
        slideWidth: 181,
        maxSlides: 5,
        minSlides: 1,
        slideMargin:20,
        autoHover:true,
        controls:true,
        touchEnabled : false,
        pause:7000,
        speed:3000,
        pager:false,
        moveSlides:1
    });
}
function menubtn(){
    $('.mui').click(function(){
        $('header div').toggleClass('active');
        $('.mui').toggleClass('active');
        $('nav > div').toggleClass('active');
    })
    $('nav > div > ul > li > span').click(function(){
        $(this).toggleClass('active');
        $(this).next('ul').toggleClass('active');
    })
}










