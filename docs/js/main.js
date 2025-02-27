import { menu } from './module/menu.js';
import { initDropdowns } from './module/initDropdowns.js';
import { validateForm } from './module/validateForm.js';

/*if (document.querySelector('#headerNav')){
  menu()
}*/

if (document.querySelectorAll('.drop-down2')){
  initDropdowns(false, ".drop-down2__btn", ".drop-down2__list", ".drop-down2__item", ".default-input")
}

if (document.querySelectorAll('.search1')){
  initDropdowns(true, ".search1__btn", ".search1__box")
}

if (document.querySelectorAll('.phone')){
  initDropdowns(true, ".phone__btn", ".phone__box")
}

if (document.querySelector('.left__form' && '.form-submit')){
  validateForm('.left__form')
}