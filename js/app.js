const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('.header-content');
const navLinkActive = document.querySelector('.navbar-link');

menuBtn.onclick = () => {
   header.classList.toggle('active');
   menuBtn.classList.toggle('active');
}

navLinkActive.forEach()