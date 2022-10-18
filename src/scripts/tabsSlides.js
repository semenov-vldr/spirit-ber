{
  // пример объекта
  const data = {
    // класс для всего блока, в котором мы работаем
    classWrapper: '.hero-delivery',
    // класс контента, который будет меняться
    classSlide: '.hero-data__list',
    // класс табов
    classNav: '.hero-nav__item',
    // имя активного класса
    activeClass: 'js-delivery-active',
    // data-атрибут для табов
    dataNameNav: 'data-delivery-nav',
    // data-атрибут для слайда
    dataNameSlide: 'data-delivery-info',
  }
}


function tabsSlides ( { classWrapper, classSlide, classNav, activeClass,  dataNameNav, dataNameSlide} ) {

  const blockWrapper = document.querySelector(classWrapper);

  if (blockWrapper) {

    const slides = blockWrapper.querySelectorAll(classSlide);
    const tabs = blockWrapper.querySelectorAll(classNav);

    const addClassActive = (item) => item.classList.add(activeClass);
    const removeClassActive = (item) => item.classList.remove(activeClass);

    addClassActive(tabs[0]);
    addClassActive(slides[0]);

    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        tabs.forEach(removeClassActive);
        slides.forEach(removeClassActive);
        addClassActive(this);
        const numberTabs = this.getAttribute(dataNameNav);
        slides.forEach(slide => {
          const numberSlide = slide.getAttribute(dataNameSlide);
          if (numberTabs === numberSlide) addClassActive(slide);
        });
      });
    });

  }

};


  //------------------


function switchTypeSlide ( { classWrapper, classSlide, classNav, activeClass,  dataNameNav, dataNameSlide} ) {

  const blockWrappers = document.querySelectorAll(classWrapper);

  blockWrappers.forEach(blockWrapper => {

    const isActiveSlide = blockWrapper.classList.contains('js-type-active');

    if (isActiveSlide) {

      const slides = blockWrapper.querySelectorAll(classSlide);
      const tabs = blockWrapper.querySelectorAll(classNav);

      const addClassActive = (item) => item.classList.add(activeClass);
      const removeClassActive = (item) => item.classList.remove(activeClass);

      addClassActive(tabs[0]);
      addClassActive(slides[0]);

      tabs.forEach(tab => {
        tab.addEventListener('click', function() {
          tabs.forEach(removeClassActive);
          slides.forEach(removeClassActive);
          addClassActive(this);
          const numberTabs = this.getAttribute(dataNameNav);
          slides.forEach(slide => {
            const numberSlide = slide.getAttribute(dataNameSlide);
            if (numberTabs === numberSlide) addClassActive(slide);
          });
        });
      });

    }

  });


  }



