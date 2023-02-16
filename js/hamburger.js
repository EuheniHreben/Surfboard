const hamburgerMenu = document.getElementById('hamburgerMenu');
const hamburgerButton = document.getElementById('hamburgerButton');
const body = document.body;

hamburgerButton.addEventListener('click', e => {
  e.preventDefault();
  hamburgerMenu.classList.toggle('active');
  hamburgerButton.classList.toggle('active');
  body.classList.toggle('locked');

})