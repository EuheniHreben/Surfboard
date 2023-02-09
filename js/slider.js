const slider = $('.slider').bxSlider({
  pager: false,
  controls:false, 
  speed: 800,
  auto: true,
  pause: 6000
});

$('.slider-controls__arrow--left').click(e => {
  e.preventDefault();
  slider.goToPrevSlide();
});
$('.slider-controls__arrow--right').click(e => {
  e.preventDefault();
  slider.goToNextSlide();
});