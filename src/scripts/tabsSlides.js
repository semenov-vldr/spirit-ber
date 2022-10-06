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

  const heroDelivery = document.querySelector(classWrapper);

  if (heroDelivery) {

    const slides = heroDelivery.querySelectorAll(classSlide);
    const tabs = heroDelivery.querySelectorAll(classNav);

    const addClassActive = (item) => item.classList.add(activeClass);
    const removeClassActive = (item) => item.classList.remove(activeClass);

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(tab => removeClassActive(tab));
        slides.forEach(slide => removeClassActive(slide));
        addClassActive(tab);
        const numberTabs = tab.getAttribute(dataNameNav);
        slides.forEach(slide => {
          const numberSlide = slide.getAttribute(dataNameSlide);
          if (numberTabs === numberSlide) addClassActive(slide);
        });
      });
    });

  }

};
