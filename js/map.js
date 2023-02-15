ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
      center: [55.76, 37.64],
      zoom: 11,
      controls: []
  });

  myMap.behaviors.disable('scrollZoom');
}