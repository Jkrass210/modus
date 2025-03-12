import { menu } from './module/menu.js';
import { initDropdowns } from './module/initDropdowns.js';
import { validateForm } from './module/validateForm.js';
import { boxPoints } from './module/boxPoints.js';
import { dropDown3 } from './module/dropDown3.js';
import { observeSvgChart, svgChart } from './module/svgChart.js';
import { counter } from './module/counter.js';
import { dropDown4 } from './module/dropDown4.js';
import { scroll } from './module/scroll.js';
import { navPoint } from './module/navPoint.js';
import { toggleMenu } from './module/toggleMenu.js';
import { initDropDown1 } from './module/initDropDown1.js';

/*if (document.querySelector('#headerNav')){
  menu()
}*/

if (document.querySelectorAll('.drop-down2')) {
  initDropdowns(false, ".drop-down2__btn", ".drop-down2__list", ".drop-down2__item", ".default-input")
}

if (document.querySelectorAll('.search1')) {
  initDropdowns(true, ".search1__btn", ".search1__box")
}

if (document.querySelectorAll('.phone')) {
  initDropdowns(true, ".phone__btn", ".phone__box")
}

if (document.querySelector('.left__form' && '.form-submit')) {
  validateForm('.left__form')
}

if (document.querySelectorAll('.main-swiper__swiper, .box-need__swiper')) {
  document.querySelectorAll('.main-swiper__swiper, .box-need__swiper').forEach(swiperEl => {
    new Swiper(swiperEl, {
      effect: 'fade', // Меняем эффект слайдов на исчезновение/появление
      fadeEffect: {
        crossFade: true // Плавное исчезновение предыдущего слайда
      },
      autoplay: {
        delay: 3000, // Задержка перед переключением
        disableOnInteraction: false, // Не останавливать при взаимодействии
        pauseOnMouseEnter: true, // Останавливать при наведении
      },
      slidesPerView: 1,
      navigation: {
        nextEl: swiperEl.querySelector('.main-swiper__prev, .box-need__prev'),
        prevEl: swiperEl.querySelector('.main-swiper__next, .box-need__next'),
      },
    });
  });
}


if (document.querySelector('.box-points')) {
  boxPoints()
}

if (document.querySelectorAll('.box-swiper')){
  document.querySelectorAll(".box-swiper__content").forEach((swiperContainer, index) => {
    const swiperElement = swiperContainer.querySelector(".box-swiper__swiper");
    const nextButton = swiperContainer.querySelector(".box-swiper__next");
    const prevButton = swiperContainer.querySelector(".box-swiper__prev");

    //const slidesPerView = swiperContainer.classList.contains("slide-4") ? 4 : 5;
    const defaultSlides = swiperContainer.classList.contains("slide-4") ? 4 : 5;

    new Swiper(swiperElement, {
      slidesPerView: 1,
      spaceBetween: 20,
      /*effect: 'fade', // Меняем эффект слайдов на исчезновение/появление
      fadeEffect: {
        crossFade: true // Плавное исчезновение предыдущего слайда
      },*/
      autoplay: {
        delay: 3000, // Задержка перед переключением
        disableOnInteraction: false, // Не останавливать при взаимодействии
        pauseOnMouseEnter: true, // Останавливать при наведении
      },
      navigation: {
        nextEl: prevButton,
        prevEl: nextButton,
      },
      breakpoints: {
        950: { slidesPerView: defaultSlides, spaceBetween: 14, }, // От 951px и выше - 4 или 5 слайдов
        640: { slidesPerView: 3, spaceBetween: 14, }, // От 640px и ниже - 2 слайда
        450: { slidesPerView: 2, spaceBetween: 14, }  // От 450px и ниже - 1 слайд
      },
    });
  });
}

if (document.querySelectorAll('.drop-down3')){
  dropDown3()
}

if (document.querySelectorAll('.drop-down3')) {
  initDropdowns(false, ".drop-down3__btn", ".drop-down3__box-desc")
}

if (document.querySelectorAll('#svgChart')) {
  observeSvgChart()
}

if (document.querySelectorAll('.box-in-numbers__list') && document.querySelectorAll('.card10__counter')) {
  counter()
}

if (document.querySelectorAll('.drop-down4')) {
  dropDown4();
}

if (document.querySelector(".become-partner-section-1__section")){
  scroll()
}

if (document.querySelectorAll(".nav-point__link")){
  navPoint()
}

if (document.querySelector('#burger')) {
  toggleMenu('burger', true, 'header__btn-group');
}

if (document.querySelector('.drop-down1')) {
  if (window.innerWidth <= 1115) {
    initDropDown1();
    window.addEventListener("resize", function () {
    initDropDown1();
  });
  }
}