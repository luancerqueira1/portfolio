const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('.nav-content');

// const navbar = document.querySelector('.navbar');

// OPEN SIDEBAR MENU
menuBtn.onclick = () => {
   header.classList.toggle('active');
   menuBtn.classList.toggle('active');
}

// THEME BTNS
const darkMode = document.querySelector('.dark-mode');
const lightMode = document.querySelector('.light-mode');
const themeBtn = document.querySelector('.toogle-theme-btn');

darkMode.onclick = () => {
   themeBtn.classList.add('active');
};

lightMode.onclick = () => {
   console.log('uef');
   themeBtn.classList.remove('active');
};

// ADD ACTIVE CLASS IN SELECTED TAB
const navLink = document.querySelectorAll('.navbar-link');
function activeLink () {
   navLink.forEach((link) => {
      link.classList.remove('nav-link-active');
      this.classList.add('nav-link-active');
   })
}

navLink.forEach((link) => {
   link.addEventListener('click', activeLink);
});



