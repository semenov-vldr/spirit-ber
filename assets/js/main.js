

{

  const mobileWidth = window.matchMedia('(max-width: 768px)').matches;

  let mySwiper;

  if (mobileWidth) {

    mySwiper = new Swiper('.about-advantages__content', {
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

  const accordionItems = document.querySelectorAll('.accordion__item'); // список элементов аккордиона

  const toggleClass = (item) => item.classList.toggle('js-accordion-active');

  accordionItems.forEach(accordionItem => {
    accordionItem.addEventListener('click', () => toggleClass(accordionItem));
  });

}

{

  let myMap;

  ymaps.ready(init);

  function init () {
    myMap = new ymaps.Map('map-delivery', {

      center: [55.77567297366562,37.616599835937514],
      zoom: 5,
      controls: []
    });

    var myGeoObject = new ymaps.GeoObject({
      // Описываем геометрию геообъекта.
      geometry: {
        // Тип геометрии - "Многоугольник".
        type: "Polygon",
        // Указываем координаты вершин многоугольника.
        coordinates: [
          // Координаты вершин внешнего контура.
          [[58.90106587919162,50.59202518749981],
            [62.30425365644154,34.39714756249991],
            [61.419288495402085,25.254462624999952],
            [58.3139648375561,23.93404331249995],
            [56.06829508097347,28.657649421874922],
            [54.046752005928525,28.679107093749906],
            [52.637767811218026,31.458390617187398],
            [51.29200291865248,33.09509601562492],
            [50.481450658306365,34.215186499999916],
            [49.88218060774752,36.80864660241689],
            [49.160187972696114,38.9626535798339],
            [48.39125152042711,45.292151909667886],
            [50.596317656485226,47.755836069335814],
            [48.424967397462325,51.62851688867174],
            [51.81210613026443,55.686352618906554],
            [54.14341697177243,55.11942234374991],
            [58.90106587919162,50.59202518749981]]

        ],
        // Задаем правило заливки внутренних контуров по алгоритму "nonZero".
        fillRule: "nonZero"
      },
      // Описываем свойства геообъекта.
      properties:{
        // Содержимое балуна.
        balloonContent: "География поставок"
      }
    }, {
      // Описываем опции геообъекта.
      // Цвет заливки.
      fillColor: '#2CE3FF',
      // Цвет обводки.
      strokeColor: '#24C2DB',
      // Общая прозрачность (как для заливки, так и для обводки).
      opacity: 0.3,
      // Ширина обводки.
      strokeWidth: 2,
      // Стиль обводки.
      strokeStyle: 'solid'
    });

    // Добавляем многоугольник на карту.
    myMap.geoObjects.add(myGeoObject);
  }

}

const phoneInputs = document.querySelectorAll('input[data-tel-input]');

const getInputNumbersValue = (input) => {
  return input.value.replace(/\D/g,"");
};

const onPhoneInput = (evt) => {
  const input = evt.target;
  let inputNumbersValue = getInputNumbersValue(input);
  let formattedInputValue = "";
  let selectionStart = input.selectionStart;

  if ( !inputNumbersValue ) input.value = "";


  if ( input.value.length != selectionStart ) {
    if ( evt.data && /\D/g.test(evt.data) ) {
      input.value = formattedInputValue;
    }
    return;
  }

  if ( ["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1 ) {
    // Российские номера
    if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
    let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
    formattedInputValue = firstSymbols + " ";

    if (inputNumbersValue[0] == "8") {
      phoneInputs[0].setAttribute("pattern", ".{17,}");
      console.log(phoneInputs[0].getAttribute("pattern"));
    }

    if (inputNumbersValue.length > 1) {
      formattedInputValue += "(" + inputNumbersValue.slice(1, 4);
    }

    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ") " + inputNumbersValue.slice(4, 7);
    }

    if (inputNumbersValue.length >= 8) {
      formattedInputValue += "-" + inputNumbersValue.slice(7, 9);
    }

    if (inputNumbersValue.length >= 10) {
      formattedInputValue += "-" + inputNumbersValue.slice(9, 11);
    }

// Не российские номера
  } else formattedInputValue = "+" + inputNumbersValue;

  input.value = formattedInputValue;
};

// Стирание первого символа
const onPhoneKeyDown = (evt) => {
  const input = evt.target;
  if (evt.keyCode == 8 && getInputNumbersValue(input).length == 1) {
    input.value = "";
  }
};

// Вставка цифр в любое место
const onPhonePaste = (evt) => {
  const pasted = evt.clipboardData || window.clipboardData;
  const input = evt.target;
  const inputNumbersValue = getInputNumbersValue(input);

  if (pasted) {
    const pastedText = pasted.getData("Text");
    if ( /\D/g.test(pastedText) ) {
      input.value = inputNumbersValue;
    }
  }
};

phoneInputs.forEach(input => {
  input.addEventListener('input', onPhoneInput);
  input.addEventListener("keydown", onPhoneKeyDown);
  input.addEventListener("paste", onPhonePaste);
});

const forms = document.querySelectorAll('form');

forms.forEach(form => {
  const formMandatory = form.querySelector('form .feedback-form__mandatory');

})


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

  const mobileWidth = window.matchMedia('(max-width: 768px)').matches;

  let mySwiper;


    mySwiper = new Swiper('.team__content-wrapper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.slider-nav__next',
        prevEl: '.slider-nav__prev',
      },

      uniqueNavElements: true,

      slidesPerView: 4,

      // Бесконечная прокрутка
      loop: true,

      // Откл функционала, если слайдов меньше, чем нужно
      watchOverflow: true,

      //centeredSlides: true,

      // Отступ между слайдами
      spaceBetween: 40,

      // Стартовый слайд
      initialSlide: 0,

      // Брейк поинты (адаптив)
      // Ширина экрана
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },

        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },

        768: {
          slidesPerView: 3
        },

        1100: {
          slidesPerView: 4
        },

      }
    });




}

// {
//
//   const vacansy = document.querySelector('.vacancy')
//   const strList = vacansy.querySelectorAll('.vacancy-contact__link');
//
//   console.log(vacansy)
//
//   strList.forEach(str => {
//     const copied = str.innerText;
//     const buttonCopy = str.parentNode.querySelector('.vacancy-contact__button-copy');
//     buttonCopy.addEventListener('click', () => copyToClipboard(copied) );
//   });
//
// }

{
  // let swiper__thumbs = new Swiper(".portfolio-popup__swiper--thumbs", {
  //   //loop: true,
  //   spaceBetween: 28,
  //   slidesPerView: "auto",
  //   freeMode: true,
  //   watchSlidesProgress: true,
  //   watchSlidesVisibility: true,
  //   watchOverflow: true,
  //   initialSlide: 0,
  // });
  //
  // let swiper__top = new Swiper(".portfolio-popup__swiper--top", {
  //   loop: true,
  //   slidesPerView: 1,
  //   centeredSlides: true,
  //   initialSlide: 0,
  //   thumbs: {
  //     swiper: swiper__thumbs,
  //   },
  //   effect: 'fade',
  //   fadeEffect: {
  //     crossFade: true
  //   }
  // });

  //--------------------------------------

  const portfolio = document.querySelector('.portfolio');
  const portfolioItems = portfolio.querySelectorAll('.portfolio__item');

  const addClassActive = (item) => item.classList.add('js-popup-active');
  const removeClassActive = (item) => item.classList.remove('js-popup-active');

  portfolioItems.forEach(item => {
    item.addEventListener('click', () => addClassActive(item));

    const close = item.querySelector('.portfolio-popup__close');
      close.addEventListener('click', function () {
        removeClassActive(item);
        console.log(this)
      });



  });


}













{

  const mobileWidth = window.matchMedia('(max-width: 768px)').matches;

  let mySwiper;

  if (mobileWidth) {

    mySwiper = new Swiper('.also-interesting-laser-cutting__slider', {
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

      // centeredSlides: true,

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
      }
    });

  }






}

{

  let myMap;

  ymaps.ready(init);

  function init () {
    myMap = new ymaps.Map('map-contacts', {

      center: [56.13050415063692,37.07479867231817],
      zoom: 16,
      controls: []
    });

    const pointPickup = [56.130236759852764,37.07856198817317];
    const pointAddress = [56.130021055835314,37.079999652205565];

    const myPlacemarkPickup = new ymaps.Placemark(pointPickup, {}, {
      iconLayout: 'default#image',
      iconImageHref: './assets/img/icons/orange-mark.svg',
      iconImageSize: [51, 53],
      iconImageOffset: [0, -53]
    });

    const myPlacemarkAddress = new ymaps.Placemark(pointAddress, {}, {
      iconLayout: 'default#image',
      iconImageHref: './assets/img/icons/accent-mark.svg',
      iconImageSize: [51, 53],
      iconImageOffset: [0, -53]
    })

    myMap.geoObjects.add(myPlacemarkPickup)
    myMap.geoObjects.add(myPlacemarkAddress)


  }

}

{

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
  };


  tabsSlides(data)


}

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


{

  const mobileWidth = window.matchMedia('(max-width: 768px)').matches;

  let mySwiper;

  if (mobileWidth) {

    mySwiper = new Swiper('.materials-laser-cutting__wrapper', {
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

  let mySwiper;

    mySwiper = new Swiper('.portfolio__swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.slider-nav__next',
        prevEl: '.slider-nav__prev',
      },

      uniqueNavElements: true,

      slidesPerView: 3,

      // Бесконечная прокрутка
      loop: true,

      // Откл функционала, если слайдов меньше, чем нужно
      watchOverflow: true,

      centeredSlides: false,

      // Отступ между слайдами
      spaceBetween: 40,

      // Стартовый слайд
      initialSlide: 0,

      // Брейк поинты (адаптив)
      // Ширина экрана
      breakpoints: {
        320: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 3
        },
      }
    });







}

{


  const priceLaserCutting = document.querySelector('.price-laser-cutting'); // блок с таблицей цен

  //console.log(priceLaserCutting)

  let tableRowList = document.querySelectorAll('.table-row');    // строки значений

  //console.log(tableRowList)

  const table_thickness = document.querySelectorAll('.col');       // строка толщин материалов


  const addClassActive = (item) => item.classList.add('js-price-hover');
  const removeClassActive = (item) => item.classList.remove('js-price-hover');

  const createArrayRow = (arrayEmpty, idxItemHover) => {
    tableRowList.forEach(rowInactive => {
      const items = rowInactive.querySelectorAll('td');
      arrayEmpty.push(items[idxItemHover]);
    });
  };


  const selectRowCol = (index) => {
    addClassActive (table_thickness[index]) ;
    let arrayItems = [];
    createArrayRow( arrayItems, index );
    arrayItems.forEach(item => addClassActive(item))
  };

  const DontSelectRowCol = (index) => {
    removeClassActive (table_thickness[index]) ;
    let arrayItems = [];
    createArrayRow( arrayItems, index );
    arrayItems.forEach(item => removeClassActive(item))
  };


  if (priceLaserCutting) {

    tableRowList.forEach(tableRow => {
      const tds = tableRow.querySelectorAll('td');
      tds.forEach((td, idx) => {
        td.addEventListener('mouseover', () => selectRowCol(idx));
        td.addEventListener('mouseout', () => DontSelectRowCol(idx) );
      });
    });



  }


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

const playList = document.querySelectorAll('.play-button');

function playShow (btnPlay, video) {
  video.play();
  btnPlay.classList.add('visually-hidden');
  console.log('play')
};

function pauseShow (btnPlay, video) {
  video.pause();
  btnPlay.classList.remove('visually-hidden');
};


playList.forEach(play => {
  const parent = play.parentNode;
  const videoContent = parent.querySelector('video');
  play.addEventListener('click', () => playShow(play, videoContent));

  videoContent.addEventListener('click', () => pauseShow(play, videoContent))
});

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
