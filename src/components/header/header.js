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
  headerBurger.addEventListener('click', () => toggleActiveElem(header, headerNav));


  // mobile menu
  const mobileWidth = window.matchMedia('(max-width: 1100px)');

  if (mobileWidth) {
    const headerListSubNav_1 = document.querySelectorAll('.header-subnav-1'); // список подменю 1-го уровня
    headerListSubNav_1.forEach(subNav_1 => {
      const parent = subNav_1.parentNode;
      const link = parent.querySelector('.header-nav__link');
      link.addEventListener('click', () => toggleActiveElem(subNav_1));

    })

  }


  const strList = header.querySelectorAll('.header-contact__link');

  strList.forEach(str => {
    const copied = str.innerText;
    const buttonCopy = str.parentNode.querySelector('.header-contact__button-copy');
    buttonCopy.addEventListener('click', () => copyToClipboard(copied) );
  });



}
