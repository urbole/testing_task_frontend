import 'core-js';
import 'regenerator-runtime/runtime';
import ico from './assets/ico/dopler.jpeg';
import logoImg from './assets/img/logo.png';
import cartImg from './assets/ico/cart.png';
import productImgItem from './assets/img/01.jpg';
import productPrevImg1Item from './assets/img/01_prev.jpg';
import productPrevImg2Item from './assets/img/02_prev.jpg';
import productPrevImg3Item from './assets/img/03_prev.jpg';
import './style.css';

const content = document.body.querySelector('.content');
const wrapper = document.body.querySelector('.wrapper');

const header = document.querySelector('.head');
const headerBurgerBtn = header.querySelector('.head__burger-btn');
headerBurgerBtn.addEventListener('click', (e) => {
  header.classList.toggle('head--menu-open');
});

const cartBtnOpen = header.querySelector('.head__cart-btn-open');
const cart = document.querySelector('.cart');
cartBtnOpen.addEventListener('click', (e) => {
  cart.classList.add('head--cart-open');
  content.classList.add('brightness');
});

const cartBtnClose = document.body.querySelector('.cart__btn-close');
cartBtnClose.addEventListener('click', (e) => {
  cart.classList.remove('head--cart-open');
  content.classList.remove('brightness');
});


document.head.insertAdjacentHTML('afterbegin',
  `<link rel="shortcut icon" href="${ico}" type="image/x-icon">`
);
const headerLogo = document.getElementById('head-logo');
headerLogo.insertAdjacentHTML('beforeend', `
  <img class="head__img" src=${logoImg} alt="logo">
`);
const headCart = document.getElementById('head-cart-open');
headCart.insertAdjacentHTML('beforeend', `
  <img class="head__img" src=${cartImg} alt="logo">
`);
const productImg = document.getElementById('product-img');
productImg.insertAdjacentHTML('afterbegin', `
  <img class="head__img" src=${productImgItem} alt="product">
`);
const productPrevImg1 = document.getElementById('product-img-prev');
productPrevImg1.insertAdjacentHTML('beforeend', `
  <img class="head__img" src=${productPrevImg1Item} alt="product">
`);
const productPrevImg2 = document.getElementById('product-img-prev');
productPrevImg2.insertAdjacentHTML('beforeend', `
  <img class="head__img" src=${productPrevImg2Item} alt="product">
`);
const productPrevImg3 = document.getElementById('product-img-prev');
productPrevImg3.insertAdjacentHTML('beforeend', `
  <img class="head__img" src=${productPrevImg3Item} alt="product">
`);