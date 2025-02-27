import { menu } from './module/menu.js';
import { initDropdowns } from './module/initDropdowns.js';
import { validateForm } from './module/validateForm.js';
import { boxPoints } from './module/boxPoints.js';

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
      /*autoplay: {
        delay: 3000, // Задержка перед переключением
        disableOnInteraction: false, // Не останавливать при взаимодействии
        pauseOnMouseEnter: true, // Останавливать при наведении
      },*/
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