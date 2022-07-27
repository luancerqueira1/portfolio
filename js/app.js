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
function validate() {
   let name = document.querySelector('.form-name');
   let email = document.querySelector('.form-email');
   let message = document.querySelector('.form-message');
   let sendBtn = document.querySelector('.send-btn');

   sendBtn.onclick = ((e) => {
      e.preventDefault();

      if (name.value == "" || email.value == "" || message.value == "") {
         messageError();
      }
      else {
         sendEmail(name.value,email.value,message.value);
         success();
      }
   })
}
validate();

// ERROR
const messageError = () => {
   popupBg.classList.add('active');

   popupIcon.innerHTML = '<i class="ri-error-warning-line error"></i>';
   popupText.innerHTML = 'Preencha Todos Os Campos';
   
};
  
// SEND EMAIL
function sendEmail(name,email,message) { 
   emailjs.send('service_6m5agqf', 'template_3jyk46p', {
      from_name: name,
      to_name: email,
      message: message,
   });
};

// SUCCESS
 const success = () => {
   popupBg.classList.add('active');

   popupIcon.innerHTML = '<i class="ri-check-line success"></i>';
   popupText.innerHTML = 'Sua Menssagem Foi Enviada Com Sucesso';

   clearInputFields();
 };


/*===== POPUP =====*/
const popupBg = document.querySelector('.popup-background');
const popup = document.querySelector('.popup');

const popupIcon = document.querySelector('.popup-icon');
const popupText = document.querySelector('.popup-text');
const popupBtn = document.querySelector('.popup-btn');


popupBtn.onclick = () => {
   popupBg.classList.remove('active');  
}

//CLEAR FIELDS WHEN MESSAGE SENT
function clearInputFields() {
   let name = document.querySelector('.form-name');
   let email = document.querySelector('.form-email');
   let message = document.querySelector('.form-message');

   name.value = '';
   email.value = '';
   message.value = '';
};





