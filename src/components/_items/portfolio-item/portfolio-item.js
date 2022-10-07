{
  let swiper__thumbs = new Swiper(".portfolio-popup__swiper--thumbs", {
    //loop: true,
    spaceBetween: 10,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    initialSlide: 0,
  });

  let swiper__top = new Swiper(".portfolio-popup__swiper--top", {
    loop: true,
    spaceBetween: 10,
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

}
