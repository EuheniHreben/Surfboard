const slider = $('.slider').bxSlider({
  pager: false,
  controls:false, 
  speed: 1100,
  auto: true,
  pause: 7000
});

$('.slider-controls__arrow--left').click(e => {
  e.preventDefault();
  slider.goToPrevSlide();
});
$('.slider-controls__arrow--right').click(e => {
  e.preventDefault();
  slider.goToNextSlide();
});