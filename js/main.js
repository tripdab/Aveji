const burger = document.querySelector('.burger');
const nav = document.querySelector('.header__row');

burger.onclick = function () {
  burger.classList.toggle('burger_active');
  nav.classList.toggle('header__row_mobile');
  document.body.classList.toggle('no-scroll');
};
