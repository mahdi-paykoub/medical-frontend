$(document).ready(function () {
    //open side nav
    $('.hamburger').click(function () {
        $(".links-parent").addClass('go-left-sidebar');
    })
    $('.close-btn').click(function () {
        $(".links-parent").removeClass('go-left-sidebar');
    })

    //search btn
    $('.ml-3.-ver-7.cursor-pointer.text-secondary.d-none.d-lg-inline').click(function (){
        $('.top-search-p').addClass('visible');
    })
    $('.close-bnt-s').click(function (){
        $('.top-search-p').removeClass('visible');
    })

    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        if (st > lastScrollTop){
            $('.s-fixed-bottom').addClass('opacity-1')
        }else {
            $('.s-fixed-bottom').removeClass('opacity-1')
        }
        lastScrollTop = st;
    });

    //swiper
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 5,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            "@0.75": {
                slidesPerView: 1,
                spaceBetween: 10,
            },

            "@1.00": {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            "@1.70": {
                slidesPerView: 2.75,
                spaceBetween: 20,
            },
        },
    });
    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 1,
        spaceBetween: 5,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            "@0.75": {
                slidesPerView: 1,
                spaceBetween: 10,
            },

            "@1.00": {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            "@1.70": {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 1,
        spaceBetween: 5,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            "@0.00": {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            "@0.75": {
                slidesPerView: 1,
                spaceBetween: 10,
            },

            "@1.00": {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            "@1.70": {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
})