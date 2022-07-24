const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('.nav-content');

// const navbar = document.querySelector('.navbar');

// OPEN SIDEBAR MENU
menuBtn.onclick = () => {
   header.classList.toggle('active');
   menuBtn.classList.toggle('active');
}

window.onscroll = () => {
   header.classList.remove('active');
   menuBtn.classList.remove('active');
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

/*===== ADD ACTIVE CLASS IN SELECTED TAB =====*/ 
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

/*===== EMAIL JS =====*/

function validate(e) {
   let name = document.querySelector('.form-name');
   let email = document.querySelector('.form-email');
   let message = document.querySelector('.form-message');
   let sendBtn = document.querySelector('.send-btn');

   sendBtn.onclick = ((e) => {
      e.preventDefault();

      if (name.value == "" || email.value == "" || message.value == "" ) {
         messageError();
      }
      else {
         success();
      }
   })
}
validate();

/*===== POPUP =====*/
const popupBg = document.createElement('div');
const popup = document.createElement('div');

function showPopup() {
   // POPUP BACKGROUNG
   popupBg.classList.add('popup-background');
   document.body.appendChild(popupBg);
   
   // POPUP
   popup.classList.add('popup');
   document.body.appendChild(popup);
}

function hidePopup(el) {
   el.forEach(coisa => {
      coisa.onclick = () => {
         popupBg.classList.remove('popup-background');
         popup.classList.remove('popup');
      }
   })
}

// POPUP ERROR
const messageError = () => {
   showPopup();

   popup.innerHTML = `
   <span><i class="ri-alert-line"></i></span>
   
   <p>Preencha todos os campos</p>
   <button onclick=${hidePopup(popupBg)}>ok</button>`; 
};

// POPUP SUCCESS
const success = () => {
   
};







