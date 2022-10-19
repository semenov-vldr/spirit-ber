{

  const portfolio = document.querySelector('.portfolio');

  if (portfolio) {

    const portfolioItems = portfolio.querySelectorAll('.portfolio__item');

    portfolioItems.forEach(portfolioItem => {

      const swiperThumbs = portfolioItem.querySelector('.portfolio-popup__swiper--thumbs');




      // let swiper__thumbs = new Swiper(".portfolio-popup__swiper--thumbs", {
      //   //loop: true,
      //   spaceBetween: 28,
      //   slidesPerView: "auto",
      //   freeMode: true,
      //   watchSlidesProgress: true,
      //   watchSlidesVisibility: true,
      //   watchOverflow: true,
      //   initialSlide: 0,
      // });
      //
      // let swiper__top = new Swiper(".portfolio-popup__swiper--top", {
      //   loop: true,
      //   slidesPerView: 1,
      //   centeredSlides: true,
      //   initialSlide: 0,
      //   thumbs: {
      //     swiper: swiper__thumbs,
      //   },
      //   effect: 'fade',
      //   fadeEffect: {
      //     crossFade: true
      //   }
      // });




    });

  }






  let swiper__thumbs = new Swiper(".portfolio-popup__swiper--thumbs", {
    //loop: true,
    spaceBetween: 28,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    initialSlide: 0,
  });

  let swiper__top = new Swiper(".portfolio-popup__swiper--top", {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 0,
    thumbs: {
      swiper: swiper__thumbs,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  });

  //--------------------------------------



  if (portfolio) {

    const portfolioItems = portfolio.querySelectorAll('.portfolio__item');

    const addClassActive = (item) => item.classList.add('js-popup-active');
    const removeClassActive = (item) => item.classList.remove('js-popup-active');

    portfolioItems.forEach(item => {
      item.addEventListener('click', () => addClassActive(item));

      const close = item.querySelector('.portfolio-popup__close');
      if (close) {
        close.addEventListener('click', function () {
          removeClassActive(item);
          console.log(this)
        });
      }

    });

  }




}











