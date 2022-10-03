
{

  const mobileWidth = window.matchMedia('(max-width: 768px)').matches;

  let mySwiper;


    mySwiper = new Swiper('.team__content-wrapper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.slider-nav__next',
        prevEl: '.slider-nav__prev',
      },

      uniqueNavElements: true,

      slidesPerView: 4,

      // Бесконечная прокрутка
      loop: true,

      // Откл функционала, если слайдов меньше, чем нужно
      watchOverflow: true,

      //centeredSlides: true,

      // Отступ между слайдами
      spaceBetween: 40,

      // Стартовый слайд
      initialSlide: 0,

      // Брейк поинты (адаптив)
      // Ширина экрана
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },

        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        768: {
          slidesPerView: 3
        },

        1100: {
          slidesPerView: 4
        },

      }
    });







}
