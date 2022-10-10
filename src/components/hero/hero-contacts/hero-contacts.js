{

  let myMap;

  ymaps.ready(init);

  function init () {
    myMap = new ymaps.Map('map-contacts', {

      center: [56.13050415063692,37.07479867231817],
      zoom: 16,
      controls: []
    });

    const pointPickup = [56.130236759852764,37.07856198817317];
    const pointAddress = [56.130021055835314,37.079999652205565];

    const myPlacemarkPickup = new ymaps.Placemark(pointPickup, {}, {
      iconLayout: 'default#image',
      iconImageHref: './assets/img/icons/orange-mark.svg',
      iconImageSize: [51, 53],
      iconImageOffset: [0, -53]
    });

    const myPlacemarkAddress = new ymaps.Placemark(pointAddress, {}, {
      iconLayout: 'default#image',
      iconImageHref: './assets/img/icons/accent-mark.svg',
      iconImageSize: [51, 53],
      iconImageOffset: [0, -53]
    })

    myMap.geoObjects.add(myPlacemarkPickup)
    myMap.geoObjects.add(myPlacemarkAddress)


  }

}
