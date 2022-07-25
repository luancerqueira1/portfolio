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

      if (name.value == "" || email.value == "" || message.value == "") {
         messageError();
      }
      else {
         success();
      }
   })
}
validate();

/*===== POPUP =====*/
const popupBg = document.querySelector('.popup-background');
const popup = document.querySelector('.popup');
const btn = document.querySelector('.btn');


// POPUP ERROR
const messageError = () => {
   console.log('iowf');
   popupBg.classList.add('active');
   popup.innerHTML += `
   <span><i class="ri-alert-line"></i></span>
   <p>Preencha todos os campos</p>
   <button onclick="hidePopup()">ok</button>`;
};
  

// POPUP SUCCESS

const success = () => {
  
   console.log('susss');
   popupBg.classList.add('active');
   popup.innerHTML += `
   <i class="ri-check-line"></i>
   <p>Sucesso</p>
   <button onclick="hidePopup()">ok</button>`; 
};


function hidePopup() {
   btn.onclick = () => {
      popupBg.classList.remove('active');
   };
}


