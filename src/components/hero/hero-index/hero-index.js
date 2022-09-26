{

  const heroIndex = document.querySelector('.hero-index');

  if (heroIndex) {

    const prev = heroIndex.querySelector('.arrow-nav__prev');
    const next = heroIndex.querySelector('.arrow-nav__next');
    const slides = heroIndex.querySelectorAll('.hero-slide');
    const dots = heroIndex.querySelectorAll('.hero-slider-pagination__item');

    const addClassActive = (item) => item.classList.add('js-hero-active');
    const removeClassActive = (item) => item.classList.remove('js-hero-active');

    dots.forEach(dot => {
      addClassActive(dots[1]);
      addClassActive (slides[1]);
      dot.addEventListener('click', () => {
        dots.forEach(dot => removeClassActive(dot) );
        slides.forEach(slide => removeClassActive(slide) );
        addClassActive(dot);
        const numberDots = dot.getAttribute('data-pagination');
        slides.forEach(slide => {
          const numberSlide = slide.getAttribute('data-slide');
          if (numberDots === numberSlide) addClassActive(slide);
        });
      });
    });


    let index = 0;

    const activeSlide = (num) => {
      slides.forEach(slide => removeClassActive(slide) );
      addClassActive(slides[num]);
    };

    const activeSDot = (num) => {
      dots.forEach(dot => removeClassActive(dot) );
      addClassActive(dots[num]);
    };

    const currentSlide = (idx) => {
      activeSlide(idx);
      activeSDot(idx)
    };

    const nextSlide = () => {
      if (index === slides.length - 1) {
        index = 0;
        currentSlide(index);
      } else {
        index++;
        currentSlide(index);
      }
    }

    const prevSlide = () => {
      if (index === 0) {
        index = slides.length - 1;
        currentSlide(index);
      } else {
        index--;
        currentSlide(index);
      }
    };

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    dots.forEach((dot, indexDot) => {
      dot.addEventListener('click', () => {
        index = indexDot;
        currentSlide(index);
      });
    });





  }


}
