"use strict";

// Import swiper
import Swiper from "swiper";

// Self Swiper
var selfSwiper = new Swiper(".self-swiper", {
    pagination: {
        el: ".self-swiper-pagination",
        type: "bullets",
    },
    initialSlide: 0,
    breakpoints: {
        576: {
            slidesPerView: 2,
        },
    },
});