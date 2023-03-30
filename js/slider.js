const slider = $('.slider__list').bxSlider({
  pager: false,
  controls:false, 
  auto: true,
  speed: 1100,
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