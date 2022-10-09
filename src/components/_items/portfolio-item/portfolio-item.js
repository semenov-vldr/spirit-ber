{
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

  const activeClass = 'js-popup-active';

  const portfolio = document.querySelector('.portfolio');
  const portfolioItems = portfolio.querySelectorAll('.portfolio__item');


  const addClassActive = (item) => item.classList.add(activeClass);
  const removeClassActive = (item) => {
    item.classList.remove(activeClass);
    console.log('close');
  }

  portfolioItems.forEach(item => {
    item.addEventListener('click', () => addClassActive(item));

    const close = item.querySelector('.portfolio-popup__close');
    if (close) {
      close.addEventListener('click', () => {
        removeClassActive(item);
        console.log(item)
      });

    }

  });


}











