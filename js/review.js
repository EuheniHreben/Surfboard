const reviewAvatars = document.querySelector('#reviewAvatars');

const findReview = (reviewName) => {
  const activeReview = document.querySelector('.reviews__item--active');
  activeReview.classList.remove('reviews__item--active');
  const activeItem = document.querySelector(`.reviews__item[data-item="${reviewName}"]`);
  activeItem.classList.add('reviews__item--active');
}

reviewAvatars.addEventListener('click', e => {
  e.preventDefault();
  const target = e.target;
  if (target.classList.contains('reviews__icon-img')) {
    const activeItemIcon = document.querySelector('.reviews__icon-item--active');
    if (activeItemIcon) {
      activeItemIcon.classList.remove('reviews__icon-item--active');
    }
    const button = target.parentElement;
    const listElement = button.parentElement;
    const reviewId = button.getAttribute('data-open');
    listElement.classList.add('reviews__icon-item--active');
    findReview(reviewId);
  }

})