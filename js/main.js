const navBtn = document.querySelector('.nav-btn');
const navIcon = document.querySelector('.nav-btn-icon');
const nav = document.querySelector('.header-row');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-btn-icon--active');
    nav.classList.toggle('header-row--mobile');
    document.body.classList.toggle('no-scroll');
}

// header-row--mobile