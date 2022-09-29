{
  const heroService = document.querySelector('.hero-service');
  const tabsBtn = document.querySelectorAll('.hero-service-nav__name');
  const tabsContent = document.querySelectorAll('.hero-service__item');


  const classActive = 'js-service-active';

  if (heroService) {

    //const addClassActive = (item) => item.classList.add(classActive);
    const removeClassActive = (item) => item.classList.remove(classActive);

    heroService.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('hero-service-nav__name') || evt.target.classList.contains('hero-service-nav__number')) {
        const tabsPath = evt.target.parentNode.dataset.tab;
        tabsBtn.forEach(tab => removeClassActive(tab.parentNode) );
        heroService.querySelector(`[data-tab="${tabsPath}"]`).classList.add(classActive);
        tabsHandler(tabsPath);
      }
    });

    function tabsHandler (path) {
      tabsContent.forEach(contentItem => {
        removeClassActive(contentItem)
        heroService.querySelector(`[data-content="${path}"]`).classList.add(classActive);
      })
    };



    const mobileWidth = window.matchMedia('(max-width: 1100px)').matches;
    if (mobileWidth) {
      const heroServiceButtons = heroService.querySelectorAll('.button');
      heroServiceButtons.forEach(btn => {
        btn.classList.remove('button--bg-accept');
        btn.classList.add('button--bg-grey')
      })
    };


  }


}
