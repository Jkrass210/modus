import{menu}from"./module/menu.js";import{initDropdowns}from"./module/initDropdowns.js";import{validateForm}from"./module/validateForm.js";import{boxPoints}from"./module/boxPoints.js";import{dropDown3}from"./module/dropDown3.js";import{observeSvgChart,svgChart}from"./module/svgChart.js";import{counter}from"./module/counter.js";import{dropDown4}from"./module/dropDown4.js";import{scroll}from"./module/scroll.js";import{navPoint}from"./module/navPoint.js";import{toggleMenu}from"./module/toggleMenu.js";import{initDropDown1}from"./module/initDropDown1.js";document.querySelectorAll(".drop-down2")&&initDropdowns(!1,".drop-down2__btn",".drop-down2__list",".drop-down2__item",".default-input"),document.querySelectorAll(".search1")&&initDropdowns(!0,".search1__btn",".search1__box"),document.querySelectorAll(".phone")&&initDropdowns(!0,".phone__btn",".phone__box"),document.querySelector(".form-submit")&&validateForm(".left__form"),document.querySelectorAll(".main-swiper__swiper, .box-need__swiper")&&document.querySelectorAll(".main-swiper__swiper, .box-need__swiper").forEach(e=>{new Swiper(e,{effect:"fade",fadeEffect:{crossFade:!0},autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},slidesPerView:1,navigation:{nextEl:e.querySelector(".main-swiper__prev, .box-need__prev"),prevEl:e.querySelector(".main-swiper__next, .box-need__next")}})}),document.querySelector(".box-points")&&boxPoints(),document.querySelectorAll(".box-swiper")&&document.querySelectorAll(".box-swiper__content").forEach((e,o)=>{const r=e.querySelector(".box-swiper__swiper"),n=e.querySelector(".box-swiper__next"),t=e.querySelector(".box-swiper__prev"),i=e.classList.contains("slide-4")?4:5;new Swiper(r,{slidesPerView:1,spaceBetween:20,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},navigation:{nextEl:t,prevEl:n},breakpoints:{950:{slidesPerView:i,spaceBetween:14},690:{slidesPerView:3,spaceBetween:14},550:{slidesPerView:2,spaceBetween:14}}})}),document.querySelectorAll(".drop-down3")&&dropDown3(),document.querySelectorAll(".drop-down3")&&initDropdowns(!1,".drop-down3__btn",".drop-down3__box-desc"),document.querySelectorAll("#svgChart")&&observeSvgChart(),document.querySelectorAll(".box-in-numbers__list")&&document.querySelectorAll(".card10__counter")&&counter(),document.querySelectorAll(".drop-down4")&&dropDown4(),document.querySelector(".become-partner-section-1__section")&&scroll(),document.querySelectorAll(".nav-point__link")&&navPoint(),document.querySelector("#burger")&&toggleMenu("burger",!0,"header__btn-group"),document.querySelector(".drop-down1")&&window.innerWidth<=1115&&(initDropDown1(),window.addEventListener("resize",function(){initDropDown1()}));