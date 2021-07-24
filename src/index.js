"use strick";
import 'core-js';
import 'regenerator-runtime/runtime';
import logo from './assets/img/logo.png';
import ico from './assets/ico/dopler.jpeg';
import cartPng from './assets/ico/cart.png';
// import searchPng from './assets/ico/search.png';
import './style.scss';


document.head.insertAdjacentHTML('afterbegin',
  `<link rel="shortcut icon" href="${ico}" type="image/x-icon">`
);

const headerLogo = document.getElementById('head-logo');
headerLogo.insertAdjacentHTML('beforeend', `<img class="head__img" src=${logo} alt="logo">`);

const headCart = document.getElementById('head-cart');
headCart.insertAdjacentHTML('beforeend',`<img class="head__img" src=${cartPng} alt="logo">`);