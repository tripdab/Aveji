const burger = document.querySelector('.burger');
const burgerButton = document.querySelector('.burger__button');
const nav = document.querySelector('.header__row');

// Функция переключения видимости навигации
burger.onclick = function () {
  burger.classList.toggle('burger_active');
  nav.classList.toggle('header__row_mobile');
  document.body.classList.toggle('no-scroll');
};

// Функция отслеживания скролла для появления тени у burger__button
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    burgerButton.classList.add('is-scrolled');
  } else {
    burgerButton.classList.remove('is-scrolled');
  }
});
