const teamList = document.querySelector('.team__list');

function openItem(button) {
  const contentWrap = button.nextElementSibling;
  const content = contentWrap.firstElementChild;
  const currentHeight = button.offsetHeight;
}

teamList.addEventListener('click', e => {
  e.preventDefault();
  const target = e.target;
  const activeItem = document.querySelector('.team__title--active');
  const prevElement = target.previousElementSibling;
  const parentElement = target.parentElement;
})