
{

  const mobileWidth = window.matchMedia('(max-width: 768px)');

  let mySwiper;

  if (mobileWidth) {

    mySwiper = new Swiper('.production__advantages__wrapper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // navigation: {
      //   nextEl: '.arrow-nav__next',
      //   prevEl: '.arrow-nav__prev',
      // },

      uniqueNavElements: true,

      slidesPerView: 3,

      // Бесконечная прокрутка
      loop: true,

      // Откл функционала, если слайдов меньше, чем нужно
      watchOverflow: true,

      centeredSlides: true,

      // Отступ между слайдами
      spaceBetween: 15,

      // Стартовый слайд
      initialSlide: 0,

      // Брейк поинты (адаптив)
      // Ширина экрана
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        480: {
          slidesPerView: 2
        },
        // 768: {
        //   slidesPerView: 3
        // },
      }
    });

  }


 const productionBlock = document.querySelector('.production');

 const desktopWidth = window.matchMedia('(min-width: 769px)');


 if ( desktopWidth ) {
   // let swiperContainer = productionBlock.querySelector('.production__advantages__wrapper');
   // let swiperWrapper = swiperContainer.querySelector('.production__advantages');
   // let swiperSlides = swiperWrapper.querySelectorAll('.production__advantage');
   //
   // mySwiper.destroy(true, true)
   // swiperSlides.forEach(slide => slide.classList.remove('swiper-slide') );
   // swiperWrapper.classList.remove('swiper-wrapper')
   console.log('desktop')

 }





    }
