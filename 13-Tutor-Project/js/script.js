// Toggle hamburger menu
document.getElementById('hamburgerId').addEventListener('click', ()=> {
  document.getElementById('hamburger-menu-items').classList.toggle('active');
})

// Changing navbar background color on scroll
window.addEventListener('scroll',  ()=> {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('navbar-scroll');
  } else {
    navbar.classList.remove('navbar-scroll');
  }
});
