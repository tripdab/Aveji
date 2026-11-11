const burger = document.querySelector('.burger');
const burgerButton = document.querySelector('.burger__button');
const nav = document.querySelector('.nav');
const overlay = document.querySelector('.nav-overlay');
const navLinks = document.querySelectorAll('.nav__link');

// Функция открытия меню
function openMenu() {
  burger.classList.add('burger_active');
  nav.classList.add('nav_open');
  overlay.classList.add('nav-overlay_active');
  document.body.classList.add('no-scroll');
}

// Функция закрытия меню
function closeMenu() {
  burger.classList.remove('burger_active');
  nav.classList.remove('nav_open');
  overlay.classList.remove('nav-overlay_active');
  document.body.classList.remove('no-scroll');
}

// Переключение по клику на бургер / крестик
burgerButton.addEventListener('click', () => {
  const isOpened = nav.classList.contains('nav_open');
  isOpened ? closeMenu() : openMenu();
});

// Закрытие при клике на затемненную область (Backdrop)
overlay.addEventListener('click', closeMenu);

// Закрытие при клике на пункт меню (для якорных ссылок #about и т.д.)
navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu);
});

// Закрытие по клавише Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('nav_open')) {
    closeMenu();
  }
});

// Отслеживание скролла для появления тени у burger__button
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    burgerButton.classList.add('is-scrolled');
  } else {
    burgerButton.classList.remove('is-scrolled');
  }
});
