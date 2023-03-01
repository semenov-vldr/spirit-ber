{

  const mapContacts = document.querySelector('#map-contacts');

  if (mapContacts) {

    const pointAddress = [56.130262, 37.079226];

    ymaps.ready(init);

    function init () {
      let myMap = new ymaps.Map('map-contacts', {

        center: pointAddress,
        zoom: 15,
        controls: [],
      });


      const placemarkAddress = new ymaps.Placemark(pointAddress, {}, {
        iconLayout: 'default#image',
        //iconImageHref: './assets/img/icons/orange-mark.svg',
        iconImageHref: '/local/templates/.default/assets/img/icons/orange-mark.svg',
        iconImageSize: [51, 53],
        iconImageOffset: [0, -53]
      });

      //let geoObjects = new ymaps.GeoObjectCollection({});
      // geoObjects.add(placemarkAddress);
      // myMap.geoObjects.add(geoObjects);

      myMap.geoObjects.add(placemarkAddress);

      // myMap.setBounds(geoObjects.getBounds());
      // myMap.setZoom(myMap.getZoom() - 4);

    }

  }




  // copy text

  const heroContacts = document.querySelector('.hero-contacts');

  if (heroContacts) {
    const strList = heroContacts.querySelectorAll('.contacts-item__link');

    strList.forEach(str => {
      const copied = str.innerText;
      const buttonCopy = str.parentNode.querySelector('.contacts__button-copy');
      if (buttonCopy) {
        buttonCopy.addEventListener('click', () => copyToClipboard(copied) );
      }
    });
  }

}
