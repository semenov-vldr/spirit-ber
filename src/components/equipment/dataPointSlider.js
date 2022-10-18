
{

  const mobileWidth = window.matchMedia('(max-width: 1500px)').matches;

  let mySwiper;

  if (mobileWidth) {

    mySwiper = new Swiper('.lazer__popup-slider-wrapper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.popup-next',
        prevEl: '.popup-prev',
      },

      uniqueNavElements: true,

      slidesPerView: 1,

      // Бесконечная прокрутка
      loop: true,

      // Откл функционала, если слайдов меньше, чем нужно
      watchOverflow: true,

      centeredSlides: true,

      // Отступ между слайдами
      spaceBetween: 0,

      // Стартовый слайд
      initialSlide: 0,

      // Брейк поинты (адаптив)
      // Ширина экрана
      breakpoints: {
        // 320: {
        //   slidesPerView: 1
        // },
      }
    });

  }






}
