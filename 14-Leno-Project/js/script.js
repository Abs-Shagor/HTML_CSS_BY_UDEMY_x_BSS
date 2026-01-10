// Toggle hamburger menu
const hamburger = document.getElementById('hamburgerId');
const menu = document.getElementById('hamburger-menu-items');
const icon = hamburger.querySelector('i');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');

  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');

});
// Changing navbar background color on scroll
window.addEventListener('scroll',  ()=> {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});
