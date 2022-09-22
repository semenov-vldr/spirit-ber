
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





  // copy text
  function copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  const strList = header.querySelectorAll('.header-contact__link');

  strList.forEach(str => {
    const copied = str.innerText;
    const buttonCopy = str.parentNode.querySelector('.header-contact__button-copy');
    buttonCopy.addEventListener('click', () => copyToClipboard(copied) );
  });



}


{

  const mobileWidth = window.matchMedia('(max-width: 768px)');

  let mySwiper;

  if (mobileWidth) {

    mySwiper = new Swiper('.production__advantages__wrapper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // navigation: {
      //   nextEl: '.arrow-nav__next',
      //   prevEl: '.arrow-nav__prev',
      // },

      uniqueNavElements: true,

      slidesPerView: 3,

      // Бесконечная прокрутка
      loop: true,

      // Откл функционала, если слайдов меньше, чем нужно
      watchOverflow: true,

      centeredSlides: true,

      // Отступ между слайдами
      spaceBetween: 15,

      // Стартовый слайд
      initialSlide: 0,

      // Брейк поинты (адаптив)
      // Ширина экрана
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        480: {
          slidesPerView: 2
        },
        // 768: {
        //   slidesPerView: 3
        // },
      }
    });

  }


 const productionBlock = document.querySelector('.production');

 const desktopWidth = window.matchMedia('(min-width: 769px)');


 if ( desktopWidth ) {
   // let swiperContainer = productionBlock.querySelector('.production__advantages__wrapper');
   // let swiperWrapper = swiperContainer.querySelector('.production__advantages');
   // let swiperSlides = swiperWrapper.querySelectorAll('.production__advantage');
   //
   // mySwiper.destroy(true, true)
   // swiperSlides.forEach(slide => slide.classList.remove('swiper-slide') );
   // swiperWrapper.classList.remove('swiper-wrapper')
   console.log('desktop')

 }





    }
