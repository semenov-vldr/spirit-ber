{

  const gearPopupItems = document.querySelectorAll('.gear-popup__item');

  if (gearPopupItems.length) {

    // Слайдер внутри pop-up
    gearPopupItems.forEach(gearPopupItem => {

      const swiperThumbs = gearPopupItem.querySelector('.gear-popup__swiper--thumbs');
      const swiperTop = gearPopupItem.querySelector('.gear-popup__swiper--top');


      let swiper__thumbs = new Swiper(swiperThumbs, {
        spaceBetween: 28,
        slidesPerView: "auto",
        freeMode: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        watchOverflow: true,
        initialSlide: 0,
      });

      let swiper__top = new Swiper(swiperTop, {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        initialSlide: 0,
        thumbs: {
          swiper: swiper__thumbs,
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true,
        }
      });

    });


    // Открытие/закрытие gear pop-up
    gearPopupItems.forEach(gearPopupItem => {

      const closeGearPopup = () => {
        gearPopupItem.classList.remove('js-gear-popup-active');
        unblockScrollBody();
      };

      function onDocumentClick () {
        gearPopupItem.addEventListener('click', (evt) => {
          if (evt.target.classList.contains('gear-popup__item')) {
            closeGearPopup();
          }
        });
      };

      const activeGearPopup = (gearPopupBtnActive) => {
        const dataNumberPopup = gearPopupItem.dataset.numberPopup; // номер поп-ап

        const numberGearItemActive = document.querySelector('.swiper-slide-active li.gear__list-item.active');
        const dataNumberGear = numberGearItemActive.dataset.numberGear; // номер активного оборудования

        gearPopupBtnActive.setAttribute('data-number-gear-btn', dataNumberGear);

        if(dataNumberPopup === dataNumberGear) {
          gearPopupItem.classList.add('js-gear-popup-active');
          blockScrollBody();
          onDocumentClick();
        }


        document.addEventListener('keydown', (evt) => {
          if (evt.key === 'Escape') closeGearPopup();
        });
      };


      const gearPopupBtnActiveList = document.querySelectorAll('.gear .js-gearPopupBtnActive');

      gearPopupBtnActiveList.forEach(gearPopupBtnActive => {
        gearPopupBtnActive.addEventListener('click', () => {
          activeGearPopup(gearPopupBtnActive);
        });
      });

      const closeBtnGearPopup = gearPopupItem.querySelector('.gear-popup__close');
      closeBtnGearPopup.addEventListener('click', closeGearPopup);

    });

  }

}









