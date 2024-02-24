let myMap;
 
const init = () => {
 myMap = new ymaps.Map("map", {
   center: [24.041977, -69.773732],
   zoom: 4.5, 
   controls: []
 });

 var coords = [
  [32.407918, -64.866823],
  [25.970498, -80.180277],
  [18.289044, -66.285679]
  ];

  var myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: 'default#image',
    iconImageHref: 'svg/marker.svg',
    iconImageSize: [53, 60],
    iconImageOffset: [-3, -42]
  });

  for (var i = 0; i < coords.length; i++) {
    myCollection.add(new ymaps.Placemark(coords[i]));
  }
  
  myMap.geoObjects.add(myCollection);
  myMap.behaviors.disable('scrollZoom');
};
 
ymaps.ready(init);