
{

  const mobileWidth = window.matchMedia('(max-width: 768px)').matches;

  let mySwiper;

  if (mobileWidth) {

    mySwiper = new Swiper('.also-interesting-laser-cutting__slider', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // navigation: {
      //   nextEl: '.arrow-nav__next',
      //   prevEl: '.arrow-nav__prev',
      // },

      uniqueNavElements: true,

      slidesPerView: 1,

      // Бесконечная прокрутка
      loop: true,

      // Откл функционала, если слайдов меньше, чем нужно
      watchOverflow: true,

      // centeredSlides: true,

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
      }
    });

  }






}
