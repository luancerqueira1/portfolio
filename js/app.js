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
         console.log('oiiiii');
         success();
      }
   })
}
validate();

// POPUP ERROR
const messageError = () => {
   const poupupError = document.createElement('div');
   
   poupupError.classList.add('popup-error');
   document.body.appendChild(poupupError);

   showPopup(); 
};
// POPUP SUCCESS
const success = () => {
   const poupupSuccess = document.createElement('div');
   
   poupupSuccess.classList.add('popup-success');
   document.body.appendChild(poupupSuccess);

   showPopup(); 
};

/*===== POPUP =====*/
function showPopup() {
   const poupupBg = document.createElement('div');
   const poupup = document.createElement('div');

   // POPUP BACKGROUNG

   poupupBg.classList.add('popup-background');
   document.body.appendChild(poupupBg);
   poupupBg.onclick = () => {
      poupupBg.classList.remove('popup-background');
      poupup.classList.remove('popup');
   }
   // POPUP
   poupup.classList.add('popup');
   document.body.appendChild(poupup);
}





