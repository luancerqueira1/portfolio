const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('.header-content');

menuBtn.onclick = () => {
   header.classList.toggle('active');
   menuBtn.classList.add('active');
}