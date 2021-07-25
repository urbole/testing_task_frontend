"use strick";
import 'core-js';
import 'regenerator-runtime/runtime';
import ico from './assets/ico/dopler.jpeg';
import logoImg from './assets/img/logo.png';
import cartImg from './assets/ico/cart.png';
// import searchPng from './assets/ico/search.png';
import './style.css';

const header = document.querySelector('.head');
const headerBurgerBtn = header.querySelector('.head__burger-btn');
headerBurgerBtn.addEventListener('click', (e) => {
  header.classList.toggle('head--menu-open');
});


document.head.insertAdjacentHTML('afterbegin',
  `<link rel="shortcut icon" href="${ico}" type="image/x-icon">`
);

const headerLogo = document.getElementById('head-logo');
headerLogo.insertAdjacentHTML('beforeend', `<img class="head__img" src=${logoImg} alt="logo">`);

const headCart = document.getElementById('head-cart');
headCart.insertAdjacentHTML('beforeend',`<img class="head__img" src=${cartImg} alt="logo">`);