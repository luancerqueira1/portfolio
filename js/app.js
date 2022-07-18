const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('.nav-content');

// const navbar = document.querySelector('.navbar');

// OPEN SIDEBAR MENU
menuBtn.onclick = () => {
   header.classList.toggle('active');
   menuBtn.classList.toggle('active');
}

// SWITCH THEME BTN
const darkMode = document.querySelector('.dark-mode-btn');
const lightMode = document.querySelector('.light-mode-btn');
const themeBtn = document.querySelector('.switch-theme-span');

darkMode.onclick = () => {
   themeBtn.classList.remove('light-mode-active');
   themeBtn.classList.add('dark-mode-active');

   document.body.classList.remove('light-theme');
};

lightMode.onclick = () => {
   themeBtn.classList.add('light-mode-active');
   themeBtn.classList.remove('dark-mode-active');

   document.body.classList.add('light-theme');
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



