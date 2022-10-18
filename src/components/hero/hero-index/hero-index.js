{

  const data = {
    // класс для всего блока, в котором мы работаем
    classWrapper: '.hero--index',
    // класс контента, который будет меняться
    classSlide: '.hero-slider-pagination__item',
    // класс табов
    classNav: '.hero-slide',
    // имя активного класса
    activeClass: 'js-hero-active',
    // data-атрибут для табов
    dataNameNav: 'data-pagination',
    // data-атрибут для слайда
    dataNameSlide: 'data-slide',
  };


  tabsSlides(data)


  const heroIndex = document.querySelector('.hero--index');

  if (heroIndex) {

    const prev = heroIndex.querySelector('.slider-nav__prev');
    const next = heroIndex.querySelector('.slider-nav__next');

    const slides = heroIndex.querySelectorAll('.hero-slide');
    const dots = heroIndex.querySelectorAll('.hero-slider-pagination__item');

    const addClassActive = (item) => item.classList.add('js-hero-active');
    const removeClassActive = (item) => item.classList.remove('js-hero-active');


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

