const colorsList = document.querySelector('.accordeon__list');
const items = document.querySelectorAll('.accordeon__item');

const getItemWidth = (button) => {
  let resultWidth = 524;
  const windowWidth = window.innerWidth;
  const contentWidth = button.offsetWidth;
  const isPhone = window.matchMedia('(max-width: 480px)').matches;
  if (isPhone) {
    resultWidth = windowWidth - contentWidth;
  }
  return resultWidth;
};

openMenu = function (button) {
  const contentWidth = button.nextElementSibling;
  const parentElement = button.parentElement;
  const textWidth = contentWidth.firstElementChild;
  contentWidth.style.width = `${getItemWidth(button)}px`;
  textWidth.style.width = `${getItemWidth(button)}px`;
  button.classList.add('accordeon__link--active');
  parentElement.classList.add('accordeon__item--active');
  getItemWidth(button);
};

closeMenu = function (button) {
  if (!button) return;
  const itemWidth = button.nextElementSibling;
  const parentElement = button.parentElement;
  itemWidth.style.width = 0;
  button.classList.remove('accordeon__link--active');
  parentElement.classList.remove('accordeon__item--active');
};

colorsList.addEventListener('click', function (event) {
  event.preventDefault();
  const target = event.target;
  const activeLink = document.querySelector('.accordeon__link--active');
  const prevElement = target.previousElementSibling;
  const parentElement = target.parentElement;
  if (target.classList.contains('accordeon__link')) {
    if (target.classList.contains('accordeon__link--active')) {
      closeMenu(target);
    } else {
      closeMenu(activeLink);
      openMenu(target);
    }
  }
  if (target.classList.contains('accordeon__content')) {
    closeMenu(activeLink);
}
  if (target.classList.contains('accordeon__desc')) {
    closeMenu(activeLink);
}
  if (target.classList.contains('accordeon__link-title')) {
    if (parentElement.classList.contains('accordeon__link--active')) {
      closeMenu(parentElement);
    } else {
      closeMenu(activeLink);
      openMenu(parentElement);
    }
  }
});

window.addEventListener('resize', () => {
  const activeLink = document.querySelector('.accordeon__link--active');
  if (activeLink) {
    closeMenu(activeLink);
  }
})