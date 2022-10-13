{

  const header = document.querySelector('.header');
  const headerMenuDropDown = header.querySelector('.header-contact__menu-tablet');
  const headerContactList = header.querySelector('.header-contact__list');

  const headerNav = header.querySelector('.header-nav');
  const headerBurger = header.querySelector('.header__burger');

  function toggleActiveElem(...items) {
    items.forEach( item => item.classList.toggle('js-active') );
  };

  headerMenuDropDown.addEventListener('click', () => toggleActiveElem(headerContactList));
  headerBurger.addEventListener('click', () => {
    toggleActiveElem(header, headerNav);
    toggleActiveElem(document.body);
  });


  // mobile menu
  const mobileWidth = window.matchMedia('(max-width: 1100px)');

  if (mobileWidth) {
    const headerListSubNav_1 = document.querySelectorAll('.header-subnav-1'); // список подменю 1-го уровня

    headerListSubNav_1.forEach(subNav => {
        const parent = subNav.parentNode;
        const link = parent.querySelector('.header-nav__link');
        link.addEventListener('click', () => {
          toggleActiveElem(subNav);

          // добавление тени над рунктом "цена" в бургер-меню
          const NavItems = header.querySelectorAll('.header-nav__item');
          NavItems.forEach(navItem => navItem.classList.toggle('js-active'))
        });
      });


    const headerListSubNav = header.querySelectorAll('.header-subnav__item');

    headerListSubNav.forEach(subNav => {
      subNav.addEventListener('click', () => {
        subNav.classList.toggle('js-active');
        const subNav_2 = subNav.querySelector('.header-subnav-2');

        subNav_2.classList.toggle('js-active');
      })
    });
  }






  // copy text
  const strList = header.querySelectorAll('.header-contact__link');

  strList.forEach(str => {
    const copied = str.innerText;
    const buttonCopy = str.parentNode.querySelector('.header-contact__button-copy');
    buttonCopy.addEventListener('click', () => copyToClipboard(copied) );
  });



}
