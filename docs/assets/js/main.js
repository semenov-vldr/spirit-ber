
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

  const mobileWidth = window.matchMedia('(max-width: 768px)').matches;

  let mySwiper;

  if (mobileWidth) {

    mySwiper = new Swiper('.production__advantages-wrapper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // navigation: {
      //   nextEl: '.arrow-nav__next',
      //   prevEl: '.arrow-nav__prev',
      // },

      uniqueNavElements: true,

      slidesPerView: 1,

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
        // 320: {
        //   slidesPerView: 1
        // },
      }
    });

  }






    }

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

{
  const heroService = document.querySelector('.hero-service');
  const tabsBtn = heroService.querySelectorAll('.hero-service-nav__name');
  const tabsContent = heroService.querySelectorAll('.hero-service__item');

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
    } else {
      btn.classList.remove('button--bg-grey')
      btn.classList.add('button--bg-accept');
    }


  }


}
