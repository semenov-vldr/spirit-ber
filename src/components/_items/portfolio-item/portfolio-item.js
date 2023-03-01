{

  const portfolio = document.querySelector('.portfolio');

  if (portfolio) {

    const portfolioItems = portfolio.querySelectorAll('.portfolio__item');

    // Слайдер внутри pop-up
    portfolioItems.forEach(portfolioItem => {

      const swiperThumbs = portfolioItem.querySelector('.portfolio-popup__swiper--thumbs');
      const swiperTop = portfolioItem.querySelector('.portfolio-popup__swiper--top');

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


    // Открытие/закрытие pop-up
    portfolioItems.forEach(portfolioItem => {
      const closeBtnPortfolioPopup = portfolioItem.querySelector('.portfolio-popup__close');

      const closePortfolioPopup = () => {
        portfolioItem.classList.remove('js-popup-active');
        unblockScrollBody();
      };

      function onDocumentClick () {
        portfolioItem.addEventListener('click', (evt) => {
          if (evt.target.classList.contains('portfolio-item__popup')) {
            closePortfolioPopup();
          }
        });
      };

      const activePortfolioPopup = (evt) => {
        if (evt.target === closeBtnPortfolioPopup) {
          closePortfolioPopup();
        } else {
          portfolioItem.classList.add('js-popup-active');
          blockScrollBody();
          onDocumentClick();
        }
      };

      portfolioItem.addEventListener('click', activePortfolioPopup);

    });


  }



}









