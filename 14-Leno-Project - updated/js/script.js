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

// modal(preview section): to show video on click
const modal = document.getElementById('modal-id');
const iframeVideo = document.getElementById('modal-iframe-id');
const videoButton = document.getElementById('video-btn-id');
const closeButton = document.getElementById('close-btn-id');

videoButton.addEventListener('click', ()=> {
  modal.style.display = 'block';
  iframeVideo.src = 'https://www.youtube.com/embed/yVYQeDhAQWk?si=bURDOW_Ga-asH2YO';
})

closeButton.addEventListener('click', ()=> {
  modal.style.display = 'none';
  iframeVideo.src = '';
})