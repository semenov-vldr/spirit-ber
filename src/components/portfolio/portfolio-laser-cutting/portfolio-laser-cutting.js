
{

  const portfolioSwiper = document.querySelector('.portfolio__swiper');

  if (portfolioSwiper) {

    let mySwiper = new Swiper(portfolioSwiper, {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.slider-nav__next',
        prevEl: '.slider-nav__prev',
      },

      uniqueNavElements: true,

      slidesPerView: 3,

      // Бесконечная прокрутка
      loop: true,

      // Откл функционала, если слайдов меньше, чем нужно
      watchOverflow: true,

      centeredSlides: false,

      // Стартовый слайд
      initialSlide: 0,

      // Брейк поинты (адаптив)
      // Ширина экрана
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 8,
        },
        380: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        1100: {
          spaceBetween: 40,
        },
      }
    });



    // -------Слайдлер внутри карточки портфолио (в виде слайдера)------------------


    const portfolioPopups = document.querySelectorAll('.portfolio-item__popup');


    portfolioPopups.forEach(portfolioPopup => {


      // Слайдеры внутри pop-up портфолио
      const swiperThumbs = portfolioPopup.querySelector('.portfolio-popup__swiper--thumbs');
      const swiperTop = portfolioPopup.querySelector('.portfolio-popup__swiper--top');


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


      // значение дата-атрибута поп-апа (data-number-popup)
      const numberPopup = portfolioPopup.dataset.numberPopup;

        // Слайд в фортфолио, который относится к поп-ап
        const portfolioSlide = portfolioSwiper.querySelector(`[data-number-slide="${numberPopup}"`);

        const closeBtnPortfolioPopup = portfolioPopup.querySelector('.portfolio-popup__close');

        const closePortfolioPopup = () => {
          portfolioPopup.style.display = "";
          unblockScrollBody();
        };

        closeBtnPortfolioPopup.addEventListener('click', closePortfolioPopup);

        function onDocumentClick () {
          portfolioPopup.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('portfolio-item__popup')) {
              closePortfolioPopup();
            }
          });
        };

        const activePortfolioPopup = () => {
          portfolioPopup.style.display = "block";
          blockScrollBody();
          onDocumentClick();
        };

        portfolioSlide.addEventListener('click', activePortfolioPopup);

    });



  }


//document.addEventListener('click', (evt) => console.log(evt.target))






}
