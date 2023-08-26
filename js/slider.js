const slider = $('.slider__list').bxSlider({
  pager: true,
  controls: false, 
  auto: true,
  speed: 2100,
  easing: 'ease-in-out',
  pause: 4000
});

$('.slider-controls__arrow--left').click(e => {
  e.preventDefault();
  slider.goToPrevSlide();
});

$('.slider-controls__arrow--right').click(e => {
  e.preventDefault();
  slider.goToNextSlide();
});