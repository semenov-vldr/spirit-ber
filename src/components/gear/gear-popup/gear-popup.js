{

  const gearPopupItems = document.querySelectorAll('.gear-popup__item');

  if (gearPopupItems.length) {

    // Слайдер внутри pop-up
    gearPopupItems.forEach(gearPopupItem => {

      const swiperThumbs = gearPopupItem.querySelector('.gear-popup__swiper--thumbs');
      const swiperTop = gearPopupItem.querySelector('.gear-popup__swiper--top');


      let swiper__thumbs = new Swiper(swiperThumbs, {
        //loop: true,
        spaceBetween: 28,
        slidesPerView: "auto",
        freeMode: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        watchOverflow: true,
        initialSlide: 0,
      });

      let swiper__top = new Swiper(swiperTop, {
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

      const closePortfolioPopup = () => {
        gearPopupItem.classList.remove('js-gear-popup-active');
        unblockScrollBody();
      };

      function onDocumentClick () {
        gearPopupItem.addEventListener('click', (evt) => {
          if (evt.target.classList.contains('gear-popup__item')) {
            closePortfolioPopup();
          }
        });
      };

      const activePortfolioPopup = (gearPopupBtnActive) => {
        const dataNumberPopup = gearPopupItem.dataset.number;
        const dataNumberGear = gearPopupBtnActive.dataset.numberGear;

        if(dataNumberPopup === dataNumberGear) {
          gearPopupItem.classList.add('js-gear-popup-active');
          blockScrollBody();
          onDocumentClick();
        }
      };


      const gearPopupBtnActiveList = document.querySelectorAll('.gear .js-gearPopupBtnActive');

      gearPopupBtnActiveList.forEach(gearPopupBtnActive => {
        gearPopupBtnActive.addEventListener('click', function () {
          activePortfolioPopup(gearPopupBtnActive)
        });
      });

      const closeBtnGearPopup = gearPopupItem.querySelector('.gear-popup__close');
      closeBtnGearPopup.addEventListener('click', closePortfolioPopup);

    });


  }



}









