new Swiper(".hero__swiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    loop: true,

    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
    },

    speed: 800,

    effect: 'fade',

    fadeEffect: {
        crossFade: true,
    },
});