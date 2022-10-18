{

  const data = {
    // класс для всего блока, в котором мы работаем
    classWrapper: '.equipment-slide',
    // класс контента, который будет меняться
    classSlide: '.equipment-slide-machine__item',
    // класс табов
    classNav: '.equipment-slide-pagination__item',
    // имя активного класса
    activeClass: 'js-machine-active',
    // data-атрибут для табов
    dataNameNav: 'data-model',
    // data-атрибут для слайда
    dataNameSlide: 'data-machine',
  };



  const equipment = document.querySelector('.equipment');

  const addClassActive = (item) => item.classList.add('js-type-active');
  const removeClassActive = (item) => item.classList.remove('js-type-active');


  if (equipment) {

    const equipmentSlider = equipment.querySelector('.equipment-slider');

    const prev = equipment.querySelector('.equipment-slider__nav-prev');
    const next = equipment.querySelector('.equipment-slider__nav-next');


      tabsSlides(data);

      const slides = equipmentSlider.querySelectorAll('.equipment-slide');

      const dots = equipmentSlider.querySelectorAll('.equipment-slide-pagination__item');

    addClassActive(slides[0])
    addClassActive(dots[0])


      let index = 0;

      const activeSlide = (num) => {
        slides.forEach(removeClassActive);
        addClassActive(slides[num]);
      };

      const activeSDot = (num) => {
        dots.forEach(removeClassActive);
        addClassActive(dots[num]);
      };

      const currentSlide = (idx) => {
        activeSlide(idx);
        activeSDot(idx);
      };

      const nextSlide = () => {
        if (index === slides.length - 1) {
          index = 0;
          currentSlide(index);
        } else {
          index++;
          currentSlide(index);
        }
      };

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

      next.addEventListener('click', ()=> switchTypeSlide(data) );

  }




}
