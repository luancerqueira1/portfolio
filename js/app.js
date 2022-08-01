
/*===== LOADING ANIMATION =====*/
const loadingAnimation = document.querySelector('.loader');

window.onload = () => {
   loadingAnimation.remove('loader');
   window.scrollTo({
      top: 0,
   });
};

/*===== OPEN SIDEBAR MENU =====*/
const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('.nav-content');

menuBtn.onclick = () => {
   header.classList.toggle('active');
   menuBtn.classList.toggle('active');
};

window.onscroll = () => {
   header.classList.remove('active');
   menuBtn.classList.remove('active');
};

/*===== CHECK THEME =====*/
const darkMode = document.querySelector('.dark-mode-btn');
const lightMode = document.querySelector('.light-mode-btn');
const themeBtn = document.querySelector('.switch-theme-span');
const pageTheme = localStorage.getItem('theme');


const defaultTheme = () => {
   themeBtn.classList.remove('light-mode-active');
   themeBtn.classList.add('dark-mode-active');

   document.body.classList.remove('light-theme');
};

const setLightTheme = () => {
   themeBtn.classList.add('light-mode-active');
   themeBtn.classList.remove('dark-mode-active');

   document.body.classList.add('light-theme');
};

const checkTheme = () => {
   let themeSet = null;
   let theme = localStorage.getItem('theme');
   themeSet = theme;
   if (themeSet == null) {
      defaultTheme();

      document.body.classList.remove('light-theme');
   }
   else if (themeSet == 'light-mode-active') {
      setLightTheme();
   }
};

checkTheme();

/*===== SWITCH THEME BTN =====*/
darkMode.onclick = () => {
   localStorage.setItem('theme', 'dark-mode-active');
   defaultTheme();
};

lightMode.onclick = () => {
   localStorage.setItem('theme', 'light-mode-active');
   setLightTheme();
};

/*===== ADD ACTIVE CLASS IN SELECTED TAB =====*/
const navLink = document.querySelectorAll('.navbar-link');
function activeLink() {
   navLink.forEach((link) => {
      link.classList.remove('nav-link-active');
      this.classList.add('nav-link-active');
   });
}

navLink.forEach((link) => {
   link.addEventListener('click', activeLink);
});

/*===== EMAIL JS =====*/
function validate() {
   let name = document.querySelector('.form-name');
   let email = document.querySelector('.form-email');
   let message = document.querySelector('.form-message');
   let sendBtn = document.querySelector('.send-btn');
   let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

   sendBtn.onclick = (e) => {
      e.preventDefault();

      if (name.value == '' || email.value == '' || message.value == '') {
         emptyError();
      } else if (!email.value.match(emailPattern)) {
         invalidEmail();
      } else {
         sendEmail(name.value, email.value, message.value);
         success();
      }
   };
}
validate();

// SEND EMAIL
function sendEmail(name, email, message) {
   emailjs.send('service_6m5agqf', 'template_3jyk46p', {
      from_name: name,
      to_name: email,
      message: message,
   });
}

/*===== POPUP =====*/
const popupBg = document.querySelector('.popup-background');
const popup = document.querySelector('.popup');

const popupIcon = document.querySelector('.popup-icon');
const popupText = document.querySelector('.popup-text');
const popupBtn = document.querySelector('.popup-btn');

// POPUP ERROR
const emptyError = () => {
   popupBg.classList.add('active');

   popupIcon.innerHTML = '<i class="ri-error-warning-line error"></i>';
   popupText.innerHTML = 'Preencha Todos Os Campos';
};

// POPUP SUCCESS
const success = () => {
   popupBg.classList.add('active');

   popupIcon.innerHTML = '<i class="ri-check-line success"></i>';
   popupText.innerHTML = 'Sua Menssagem Foi Enviada Com Sucesso';

   clearInputFields();
};

// INVALID EMAIL
const invalidEmail = () => {
   popupBg.classList.add('active');

   popupIcon.innerHTML = '<i class="ri-error-warning-line error"></i>';
   popupText.innerHTML = 'Email Invalido';
};

// REMOVE POPUP
popupBtn.onclick = () => {
   popupBg.classList.remove('active');
};

//CLEAR FIELDS WHEN MESSAGE SENT
function clearInputFields() {
   let name = document.querySelector('.form-name');
   let email = document.querySelector('.form-email');
   let message = document.querySelector('.form-message');

   name.value = '';
   email.value = '';
   message.value = '';
}

// DATE
const year = document.querySelector('.date');
const dateYear = new Date().getFullYear();
year.innerText = dateYear;
