{

  let myMap;

  ymaps.ready(init);

  function init () {
    myMap = new ymaps.Map('map-contacts', {

      center: [56.13050415063692,37.07479867231817],
      zoom: 17,
      controls: []
    });


  }

}
