{

  const header = document.querySelector('.header');
  const headerMenuDropDown = header.querySelector('.header-contact__menu-tablet');
  const headerContactList = header.querySelector('.header-contact__list');

  const headerNav = header.querySelector('.header-nav');
  const headerBurger = header.querySelector('.header__burger');

  function toggleActiveElem(...items) {
    items.forEach( item => item.classList.toggle('js-active') );
  };


  function removeActiveClass(item) {
    item.classList.remove('js-active' );
  };

  headerMenuDropDown.addEventListener('click', () => toggleActiveElem(headerContactList));
  headerBurger.addEventListener('click', () => {
    toggleActiveElem(document.body, header, headerNav);
    toggleScrollBody();

    if (!header.classList.contains('js-active')) {
      header.querySelectorAll('.header-nav__item, .header-subnav, .header-subnav__item').forEach(removeActiveClass)
    }
  });



  const mobileWidth = window.matchMedia('(max-width: 1100px)').matches;

  if (mobileWidth) {
    const headerListSubNav_1 = header.querySelectorAll('.header-subnav-1'); // список подменю 1-го уровня

    headerListSubNav_1.forEach(subNav => {
      const link = subNav.parentNode.querySelector('.header-nav__link');
      link.addEventListener('click', () => {
        toggleActiveElem(subNav);

        // добавление тени над пунктом "цена" в бургер-меню
        const navItems = header.querySelectorAll('.header-nav__item');
        navItems.forEach(navItem => navItem.classList.toggle('js-active'))
      });
    });


    const headerListSubNav = header.querySelectorAll('.header-subnav__item');

    headerListSubNav.forEach(subNav => {
      subNav.addEventListener('click', () => {
        toggleActiveElem(subNav);
        const subNav_2 = subNav.querySelector('.header-subnav-2');
        toggleActiveElem(subNav_2);
      })
    });

 // Сбрасываем стандартное поведение ссылок, имеющих вложенность в меню
const linkPreventDefaultMobile = header.querySelectorAll('.js-prevent-default-mobile');
linkPreventDefaultMobile.forEach(link => {
  link.addEventListener('click', (evt) => evt.preventDefault() );
})

  }

    let previousPosition = window.scrollTop || document.documentElement.scrollTop;


    window.addEventListener("scroll", () => {

      const currentPosition = window.scrollTop || document.documentElement.scrollTop;

      if ( previousPosition < currentPosition) {
        header.classList.add('js-scroll');
      }
      else {
        header.classList.remove('js-scroll');
      }
    });

}






