

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

  const blog = document.querySelector('.blog'); // blog

  if (blog) {

    const paginationList = blog.querySelector('.pagination__list'); // paginationList

    const blogList = blog.querySelector('.blog__list'); // cards-wrapper
    const blogItems = blogList.querySelectorAll('.blog__item'); // cards
    const prevButton = blog.querySelector('.slider-nav__prev'); // prev
    const nextButton = blog.querySelector('.slider-nav__next'); // next

    const paginationLimit = 8;

    const pageCount = Math.ceil(blogItems.length / paginationLimit);
    let currentPage = 1;

    const disableButton = (button) => {
      button.setAttribute('disabled', true);
    };

    const enableButton = (button) => {
      button.removeAttribute('disabled');
    };

    const handlePageButtonsStatus = () => {
      (currentPage === 1) ? disableButton(prevButton) : enableButton(prevButton);
      (pageCount === currentPage) ? disableButton(nextButton) : enableButton(nextButton);
    };

    const handleActivePageNumber = () => {
      const paginationItems = paginationList.querySelectorAll('.pagination__item');
      paginationItems.forEach( button => {
        button.classList.remove('js-pag-active');
        const pageIndex = Number(button.getAttribute('page-index'));
        if (pageIndex === currentPage) {
          button.classList.add('js-pag-active');
        }
      });
    };

    const appendPageNumber = (index) => {
      const pageNumber = document.createElement('li');
      pageNumber.className = 'pagination__item';
      pageNumber.innerHTML = index;
      pageNumber.setAttribute('page-index', index);
      pageNumber.setAttribute('arial-label', 'Page' + index);
      paginationList.appendChild(pageNumber);
    };

    const getPaginationNumbers = () => {
      for (let i =1; i<=pageCount; i++) {
        appendPageNumber(i);
      }
    };

    const setCurrentPage = (pageNum) => {
      currentPage = pageNum;

      handleActivePageNumber();
      handlePageButtonsStatus();

      const prevRange = (pageNum - 1) * paginationLimit;
      const currRange = pageNum * paginationLimit;

      blogItems.forEach((item, index) => {
        item.style.display = 'none';
        if (index >= prevRange && index < currRange) {
          item.style.display = 'flex';
        }
      });
    };


    window.addEventListener('load', () => {
      getPaginationNumbers();
      setCurrentPage(1);

      prevButton.addEventListener('click', () => setCurrentPage(currentPage - 1) );
      nextButton.addEventListener('click', () => setCurrentPage(currentPage + 1) );

      const paginationItems = paginationList.querySelectorAll('.pagination__item');

      paginationItems.forEach(button => {
        const pageIndex = Number(button.getAttribute('page-index'));

        if (pageIndex) {
          button.addEventListener('click', () => setCurrentPage(pageIndex));
        }
      });

    });


    //------------------------------------------FILTER-----------------------------------

    function filterBlog (category, items) {

      items.forEach(item => {
        const categoryItem = item.dataset.category;
        if (categoryItem === category) {
          item.style.display = 'flex';
        } else {
          item.style.display = 'none';
        }
      })

    };

    const filterItems = blog.querySelectorAll('.blog-nav__item');
    const resetBtn = blog.querySelector('.blog-nav__reset');

    const addClassActive = (elem) => elem.classList.add('js-filter-active');
    const removeClassActive = (elem) => elem.classList.remove('js-filter-active');

    filterItems.forEach(button => {
      button.addEventListener('click', () => {
        filterItems.forEach(item => removeClassActive(item));
        addClassActive(button);
        const currentCategory = button.dataset.filter;
        filterBlog(currentCategory, blogItems);

      });
    });

    resetBtn.addEventListener('click', () => {
      blogItems.forEach(item => {
        item.style.display = 'flex';
      });
      filterItems.forEach(button => removeClassActive(button));
    });



  }






}

{

  let myMap;

  const mapDelivery = document.querySelector('#map-delivery');

  if (mapDelivery) {

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




}


{

  const mobileWidth = window.matchMedia('(max-width: 1500px)').matches;

  let mySwiper;

  if (mobileWidth) {

    mySwiper = new Swiper('.lazer__popup-slider-wrapper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.popup-next',
        prevEl: '.popup-prev',
      },

      uniqueNavElements: true,

      slidesPerView: 1,

      // Бесконечная прокрутка
      loop: true,

      // Откл функционала, если слайдов меньше, чем нужно
      watchOverflow: true,

      centeredSlides: true,

      // Отступ между слайдами
      spaceBetween: 0,

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

{

  const data = {
    // класс для всего блока, в котором мы работаем
    classWrapper: '.exchange-edo__content',
    // класс контента, который будет меняться
    classSlide: '.exchange-edo-step__list',
    // класс табов
    classNav: '.exchange-edo__tab-item',
    // имя активного класса
    activeClass: 'js-exchange-active',
    // data-атрибут для табов
    dataNameNav: 'data-tab',
    // data-атрибут для слайда
    dataNameSlide: 'data-step-list',
  };


  tabsSlides(data)


}




// ---------upload file (drag&drop)---------


const formUploadList = document.querySelectorAll('.feedback-form-upload');

if (formUploadList)  formUploadList.forEach(addFunctionUploadFile)


  function addFunctionUploadFile (dropZone) {
    const events = ['dragenter', 'dragleave', 'dragover', 'drop'];

    function preventDefaults(evt) {
      evt.preventDefault();
      evt.stopPropagation();
    };

// Сбрасываем стандартное поведение для всех событий
    events.forEach(event => {
      dropZone.addEventListener(event, preventDefaults);
    });

    function highLight() {
      dropZone.classList.add('highlight');
    };

    function unHighLight() {
      dropZone.classList.remove('highlight');
    };

    ['dragenter', 'dragover'].forEach(eventName => {
      dropZone.addEventListener(eventName, highLight);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropZone.addEventListener(eventName, unHighLight);
    });

    function handleFiles(files) {
      files = [...files];
      files.forEach(uploadFile);
      files.forEach(createProgressBar);

    };

    function handleDrop(evt) {
      let dt = evt.dataTransfer;
      console.log(dt.items)
      let files = dt.files;
      handleFiles(files);
      visibleProgressUpload(evt);
    };


    function uploadFile(file) {
      let url = 'URL для загрузки файлов';
      let formData = new FormData();

      formData.append('file', file);

      fetch(url, {
        method: 'POST',
        body: formData
      })
        .then(() => {
          console.log('отправка успешна');
        })
        .catch(() => console.log('Ошибка'))
    };

    dropZone.addEventListener('drop', handleDrop);
  };




    //-----другой вариант (добавление файлов через проводник)-----------------------------

// Перевод байтов в Кб, Мб, Гб
function formatBytes(bytes, decimals = 0) {
  if (!+bytes) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Байт', 'Кб', 'Мб', 'Гб'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};


// createProgressBar
function createProgressBar (item, index, inputFile) {
  const formUploadList = document.querySelectorAll('.feedback-form-upload');
  const progressBarTemplate = document.querySelector('.upload-progress__template')
                              .content.querySelector('.feedback-form__upload-progress');

  //let arrInputFile = [...inputFile.files];

  if (progressBarTemplate && formUploadList) {

    const progressItem = progressBarTemplate.cloneNode(true);
    const progressLine = progressItem.querySelector('.feedback-form-upload-progress__line');
    const close = progressItem.querySelector('.feedback-form-upload-progress__close');
    progressLine.dataset.progress = index;
    close.dataset.name = item.name;

    const nameFile = progressItem.querySelector('.feedback-form-upload-progress__name');
    const sizeFile = progressItem.querySelector('.feedback-form-upload-progress__size');

    nameFile.textContent = item.name;

    let size = item.size;
    sizeFile.textContent = formatBytes(size);

    formUploadList.forEach(formUpload => formUpload.before(progressItem));

    const newInputFile = progressItem.parentNode

    let arrInputFile = [...inputFile.files];

    close.addEventListener('click', () => {
      progressItem.remove();
      let indexDeletedFile = arrInputFile.findIndex(val => val.name === close.dataset.name)
      arrInputFile.splice(indexDeletedFile, 1)
      console.log(arrInputFile)
    });

  }
};





function visibleProgressUpload (evt) {
  let files

  if (evt.target.files) files = [...evt.target.files];
  if (evt.dataTransfer) files = [...evt.dataTransfer.files];

  // Получение стутуса загрузки файла и отображение процесса загрузки
  function readAndVisible (file, index) {
    const reader = new FileReader();
    const progress = document.querySelector(`.feedback-form-upload-progress__line[data-progress="${index}"]`);
    const sizeFile = progress.parentNode.querySelector('.feedback-form-upload-progress__size');

    reader.addEventListener('progress', (evt) => {
      let loaded = evt.loaded;
      let total = evt.total;
        if (loaded && total) {
          const percent = (loaded / total) * 100;
          progress.style.width = `${percent}%`;
          sizeFile.textContent = `${formatBytes(loaded)} из ${formatBytes(total)}`;

          if (percent === 100) {
            console.log(`${file.name} - загружен`);
            sizeFile.textContent = formatBytes(total);
          }
        }
    });
    reader.readAsDataURL(file);
  };

  if (files) files.forEach(readAndVisible);
};


let files = [];

function upload(selector) {
  const inputFile = document.querySelector(selector);
  if (inputFile) {
    const changeHandler = (evt) => {
      if (!evt.target.files.length) return
      files.push(...evt.target.files); // вставка в пустой массив files загруженных файлы
      let filterFiles = [...new Set(files)]; // новый (отфильтрованный) массив без повторных файлов
      filterFiles.forEach((filterFile, index) => createProgressBar(filterFile, index, inputFile));
    };

    inputFile.addEventListener('change', (evt) => {
      changeHandler(evt);
      visibleProgressUpload(evt);
      console.log(evt.target.files)
    });
  }
};



upload('.feedback-form-upload__input');







const phoneInputs = document.querySelectorAll('input[data-tel-input]');

function validInputTel (phoneInputs) {
  const getInputNumbersValue = (input) => {
    return input.value.replace(/\D/g,"");
  };

  const onPhoneInput = (evt) => {
    const input = evt.target;
    let inputNumbersValue = getInputNumbersValue(input);
    let formattedInputValue = "";
    let selectionStart = input.selectionStart;

    if ( !inputNumbersValue ) input.value = "";

    if ( input.value.length !== selectionStart ) {
      if ( evt.data && /\D/g.test(evt.data) ) {
        input.value = formattedInputValue;
      }
      return;
    }

    if ( ["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1 ) {
      // Российские номера
      if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
      let firstSymbols = (inputNumbersValue[0] === "8") ? "8" : "+7";
      formattedInputValue = firstSymbols + " ";

      {
        if (inputNumbersValue[0] === "8") {
          phoneInputs.forEach(phoneInput => phoneInput.setAttribute("pattern", ".{17,}") )
        } else {
          phoneInputs.forEach(phoneInput => phoneInput.setAttribute("pattern", ".{18,}") )
        }
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
    if (evt.keyCode === 8 && getInputNumbersValue(input).length === 1) {
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

  phoneInputs.forEach(phoneInput => {
    phoneInput.addEventListener('input', onPhoneInput);
    phoneInput.addEventListener("keydown", onPhoneKeyDown);
    phoneInput.addEventListener("paste", onPhonePaste);
  });
}


if (phoneInputs) validInputTel(phoneInputs);





  //----------- валидация обязательных полей -----------------

  const forms = document.querySelectorAll('.feedback__form');


    function validForm (forms) {

      const addClassHidden = (item) => item.classList.add('visually-hidden');
      const removeClassHidden = (item) => item.classList.remove('visually-hidden');

      forms.forEach(form => {

        const inputContainerList = form.querySelectorAll('.feedback-form__input-container');
        const errors = form.querySelectorAll('.feedback-form__error');
        errors.forEach(addClassHidden);

        inputContainerList.forEach(inputContainer => {
          const inputItem = inputContainer.querySelector('input[required]');

          if (inputItem) {
            inputItem.addEventListener('input', () => {
              const error = inputContainer.querySelector('input + .feedback-form__error');

              const isValid = inputItem.checkValidity();
              if (isValid || inputItem.value === '' ) {
                addClassHidden(error);
                error.textContent = ''
              } else {
                removeClassHidden(error);
                error.textContent = 'Ошибка ввода';
              }
            })
          }
        });
      })
    };

  if (forms) validForm(forms)

let gear_block = document.querySelectorAll('.gear')

if (gear_block) {

  let gearCategory = [];
  let categories = document.querySelectorAll('.gear__category[data-gearCategory]');

  for (let i = 0; i < categories.length; i++) {
    let data_category = categories[i].dataset.gearcategory;
    gearCategory.push(data_category)
  }

  const categories_slider = new Swiper('.js-gear_category_swiper', {
    slidesPerView: 1,
    createElements: true,
    grabCursor: false,
    simulateTouch: true,
    allowTouchMove: true,
    centeredSlides: true,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    mousewheel: {
      forceToAxis: true,
    },
    uniqueNavElements: true,
    slideClass: 'gear__category',
    navigation: {
      nextEl: '.js-gear_category_swiper_next',
      prevEl: '.js-gear_category_swiper_prev',
      disabledClass: 'disabled'
    },
    focusableElements: 'input, select, option, textarea, button, video, label, a',
    pagination: {
      el: '.gear__category_controls-pagination',
      type: 'bullets',
      bulletClass: "gear__category_controls-pagination-item",
      bulletActiveClass: "active",
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 2,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (gearCategory[index]) + "</span>";
      }
    },
  });


  let internal_slider = document.querySelectorAll('.js-gear-internal_slider')

  internal_slider.forEach(slider => {
    let gear_item_slider_controls = slider.querySelectorAll('.js-gear_item_slider_controls [data-gearitem_control]')

    const gear_item_slider = new Swiper(slider.querySelector('.js-gear_item_slider'), {
      createElements: true,
      slideClass: 'gear__items-slide',
      slidesPerView: 1,
      grabCursor: false,
      simulateTouch: false,
      observer: true,
      observeParents: true,
      allowTouchMove: false,
      effect: 'fade',
      preventClicksPropagation: true,
      fadeEffect: {
        crossFade: true
      },
      mousewheel: {
        forceToAxis: true,
      },
      uniqueNavElements: true,
      focusableElements: 'input, select, option, textarea, button, label',
    });

    for(let i = 0; i < gear_item_slider_controls.length; i++) {

      gear_item_slider_controls[i].addEventListener('click', (e)=>{
        e.stopPropagation()
        gear_item_slider_controls.forEach(control => {
          e.currentTarget === control ? control.classList.add('active') : control.classList.remove('active')
        })

        gear_item_slider.slideTo(i)
      })
    }

    if ( window.matchMedia('(max-width: 1279px)').matches) {
      let gear_popups = slider.querySelectorAll('.gear__popups')
      gear_popups.forEach(gp => {
        const gear_popup_slider = new Swiper(gp, {
          createElements: true,
          slideClass: 'gear__popups-item',
          slidesPerView: 1,
          observer: true,
          effect: 'fade',
          touchMoveStopPropagation: true,
          preventClicksPropagation: true,
          fadeEffect: {
            crossFade: true
          },
          spaceBetween: 80,
          mousewheel: {
            forceToAxis: true,
          },
          // uniqueNavElements: false,
          focusableElements: 'input, select, option, textarea, button, label',
          pagination: true,
          navigation: true
        });

        gear_popup_slider.on('observerUpdate', function(){
          gear_popup_slider.updateSlidesClasses()
        })
      })


    }

  })


  let gear_slide = document.querySelectorAll('.js-placeGearPopups')

  gear_slide.forEach(gs => {

    function setPopupsPosition() {
      let points = gs.querySelectorAll('.js-point')

      points.forEach(point => {
        let coeff = (window.innerWidth / 1920);

        let popup = gs.querySelector('.js-gear_popup[data-position="' + point.dataset.point + '"]')

        if (point.dataset.point === 'left') {
          popup.style.left = ((point.getBBox().x - 32) * coeff) + 'px'
          popup.style.top = (point.getBBox().y * coeff) + 'px'
          popup.style.transform = "translate(-100%, calc(-100% + 48px))"
        }
        if (point.dataset.point === 'top') {
          popup.style.left = ((point.getBBox().x) * coeff) + 'px'
          popup.style.top = (point.getBBox().y * coeff) + 'px'
          popup.style.transform = "translate(32px, calc(-50% - 24px))"
        }
        if (point.dataset.point === 'bottom') {
          popup.style.left = ((point.getBBox().x) * coeff) + 'px'
          popup.style.top = (point.getBBox().y * coeff) + 'px'
          popup.style.transform = "translate(32px, -24px)"
        }
      })
    };


    function resetPopupsPosition() {
      let popups = gs.querySelectorAll('.js-lazer__popup')
      popups.forEach(popup => {
        popup.style.transform = "initial";
      });
    };

    window.matchMedia('(min-width: 1280px)').matches ? setPopupsPosition() : resetPopupsPosition();

    window.addEventListener('resize', () => {
      window.matchMedia('(min-width: 1280px)').matches ? setPopupsPosition() : resetPopupsPosition()
    });

  })

}


const generalPortfolio = document.querySelector('.general-portfolio');

if (generalPortfolio) {

  // Выбор категории
  const categories = generalPortfolio.querySelectorAll('.general-portfolio__categories-item');

  categories.forEach(category => {
    category.addEventListener('click', () => {
      categories.forEach(item => item.classList.remove('js-categories-active'));
      category.classList.add('js-categories-active');
    })
  });


  // Выбор тега
  const tags = generalPortfolio.querySelectorAll('.general-portfolio__tags-item');

  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      tags.forEach(item => item.classList.remove('js-tag-active'));
      tag.classList.add('js-tag-active');
    })
  });

}

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
        toggleActiveElem(subNav)
        const subNav_2 = subNav.querySelector('.header-subnav-2');
        toggleActiveElem(subNav_2)
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




{

  const mobileWidth = window.matchMedia('(max-width: 768px)').matches;

  let mySwiper;

  if (mobileWidth) {

    mySwiper = new Swiper('.image-text__swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // navigation: {
      //   nextEl: '.slider-nav__next',
      //   prevEl: '.slider-nav__prev',
      // },

      uniqueNavElements: true,

      slidesPerView: 1,

      // Бесконечная прокрутка
      loop: true,

      // Откл функционала, если слайдов меньше, чем нужно
      watchOverflow: true,

      //centeredSlides: true,

      // Отступ между слайдами
      spaceBetween: 20,

      // Стартовый слайд
      initialSlide: 0,

      // Брейк поинты (адаптив)
      // Ширина экрана
      breakpoints: {
        // 320: {
        //   slidesPerView: 1,
        // },

      }
    });

  }







}




const paginations = document.querySelectorAll('.pagination');

if (paginations) {

  paginations.forEach(pagination => {
    const paginationItems = pagination.querySelectorAll('.pagination__item');
    paginationItems.forEach(paginationItem => paginationActive(paginationItem, paginationItems));
  })
}

function paginationActive (paginationItem, paginationList) {
  paginationItem.addEventListener('click', () => {
    paginationList.forEach(item => item.classList.remove('js-pagination-active'));
    paginationItem.classList.add('js-pagination-active');
  })
};


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

{

  const vacansy = document.querySelector('.vacancy')


if (vacansy) {

  const strList = vacansy.querySelectorAll('.vacancy-contact__link');
  strList.forEach(str => {
    const copied = str.innerText;
    const buttonCopy = str.parentNode.querySelector('.vacancy-contact__button-copy');

    if (buttonCopy) {
      buttonCopy.addEventListener('click', () => copyToClipboard(copied) );
    }

  });


}

}

{

  const portfolio = document.querySelector('.portfolio');

  if (portfolio) {

    const portfolioItems = portfolio.querySelectorAll('.portfolio__item');

    portfolioItems.forEach(portfolioItem => {

      const swiperThumbs = portfolioItem.querySelector('.portfolio-popup__swiper--thumbs');


      let swiper__thumbs = new Swiper(".portfolio-popup__swiper--thumbs", {
        //loop: true,
        spaceBetween: 28,
        slidesPerView: "auto",
        freeMode: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        watchOverflow: true,
        initialSlide: 0,
      });

      let swiper__top = new Swiper(".portfolio-popup__swiper--top", {
        loop: true,
        slidesPerView: 1,
        centeredSlides: true,
        initialSlide: 0,
        thumbs: {
          swiper: swiper__thumbs,
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        }
      });

    });

  }




  if (portfolio) {

    const portfolioItems = portfolio.querySelectorAll('.portfolio__item');


    portfolioItems.forEach(portfolioItem => {

      portfolioItem.addEventListener('click', () => {
        portfolioItem.classList.add('js-popup-active');
      });

      const closePortfolioItem = portfolioItem.querySelector('.portfolio-popup__close');

      closePortfolioItem.addEventListener('click', () => {
        portfolioItem.classList.remove('js-popup-active');
        console.log(portfolioItem)

      })
    });



  }




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

const desktopWidth = window.matchMedia('(min-width: 1500.1px)').matches;
const tabletWidth = window.matchMedia('(max-width: 1500px)').matches;

// ------Установка для лазерной резки---------------
{
  // laser 1-1
  let lazer_block = document.getElementById('lazer-1-1');


  if ( lazer_block ) {

    function setPopupsPosition(){
      let points = lazer_block.querySelectorAll('.js-point')

      points.forEach(point => {
        let coeff = (window.innerWidth / 1920);

        let popup = lazer_block.querySelector('.js-lazer__popup[data-position="'+ point.dataset.point +'"]')

          if ( point.dataset.point === 'left' ) {
            popup.style.left = ((point.getBBox().x - 32) * coeff) +'px'
            popup.style.top = (point.getBBox().y * coeff) +'px'
            popup.style.transform = "translate(-100%, calc(-100% + 48px))"
          }
          if ( point.dataset.point === 'top' ) {
            popup.style.left = ((point.getBBox().x) * coeff) +'px'
            popup.style.top = (point.getBBox().y * coeff) +'px'
            popup.style.transform = "translate(32px, calc(-50% - 24px))"
          }
          if ( point.dataset.point === 'bottom' ) {
            popup.style.left = ((point.getBBox().x ) * coeff) +'px'
            popup.style.top = (point.getBBox().y * coeff) +'px'
            popup.style.transform = "translate(32px, -24px)"
          }
      })
    };



    function resetPopupsPosition(){
      let popups = lazer_block.querySelectorAll('.js-lazer__popup')
      popups.forEach(popup => {
        popup.style.transform = "initial";
      });

    };

    if (desktopWidth) setPopupsPosition();
    if (tabletWidth) resetPopupsPosition();
    //setPopupsPosition()

    window.addEventListener('resize', () => {

      if (desktopWidth) setPopupsPosition();

      if (tabletWidth) resetPopupsPosition();

    });


  }
}


{
  // все кнопки, по нажатию на которые появляется поп-ап
  const callToActionButtons = document.querySelectorAll('.button-popup');

  const API_URL = 'https://httpbin.org/post';

  let replyPopup;
  let formPopup;


  function removeFormPopup () {
    const formPopup = document.querySelector('.form-popup');
    if (formPopup) formPopup.remove();
  };

  function closeFormPopup (popup) {
    popup.remove();
    unblockScrollBody();
    popup.querySelector('form').reset();
  };

  function openFormPopup (popup) {
    const template = document.querySelector('#form-popup').content.cloneNode(true);
    popup = template.querySelector('.form-popup')
    document.body.append(popup);
    blockScrollBody();

    upload('.feedback-form-upload__input');

    // drop zone
    const formUpload = document.querySelector('.feedback-form-upload');
    addFunctionUploadFile(formUpload);

    // close
    const close = popup.querySelector('.form-popup__close');
    close.addEventListener('click', () => {
      closeFormPopup(popup);
      onDocumentClick(popup);
    });
  };

  function onDocumentClick (item) {
    document.body.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('form-popup')) {
        closeFormPopup(item);
      }
    })
  };

  if (callToActionButtons) {

    callToActionButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        openFormPopup(formPopup);
        const phoneInputs = document.querySelectorAll('input[data-tel-input]');
        const forms = document.querySelectorAll('.feedback__form');
        if (phoneInputs) validInputTel(phoneInputs);
        if (forms) validForm(forms);
        userFormSubmit();
          });
    });
  }





// --- reply-popup (ответ на отправленную форму) ------

  function showReplyPopup () {
    document.body.append(replyPopup);
    const closeButton = replyPopup.querySelector('.reply-popup__button');
    closeButton.addEventListener('click', () => {
      replyPopup.remove();
      unblockScrollBody();
    });
  };

  function displayReplyPopupSuccess () {
    const template = document.querySelector('#success').content.cloneNode(true);
    replyPopup = template.querySelector('.reply-popup');
    showReplyPopup();
  };

  function displayReplyPopupError () {
    const template = document.querySelector('#error').content.cloneNode(true);
    replyPopup = template.querySelector('.reply-popup');
    showReplyPopup();
  }


  function sendDataForm (onSuccess, onError, body) {
    fetch(API_URL,{
        method: 'POST',
        body,
      },
    ).then((responce) => {
      responce.ok ? onSuccess() : onError();
      console.log(responce.json())
    })
      .catch(() => onError());
  };

  function userFormSubmit () {

    const forms = document.querySelectorAll('form')

    forms.forEach(form => {
      form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        const isValid = form.checkValidity();

        if (isValid) {
          sendDataForm(() => {
              displayReplyPopupSuccess();
              removeFormPopup();
              form.reset();
            },
            () => {
              displayReplyPopupError;
              removeFormPopup();
            },
            new FormData(evt.target)
          );
        }
      });
    })
  };


  userFormSubmit();











}

{

  const mapContacts = document.querySelector('#map-contacts');

  if (mapContacts) {

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
      let geoObjects = new ymaps.GeoObjectCollection();

      const placemarkPickup = new ymaps.Placemark(pointPickup, {}, {
        iconLayout: 'default#image',
        iconImageHref: './assets/img/icons/orange-mark.svg',
        iconImageSize: [51, 53],
        iconImageOffset: [0, -53]
      });

      const placemarkAddress = new ymaps.Placemark(pointAddress, {}, {
        iconLayout: 'default#image',
        iconImageHref: './assets/img/icons/accent-mark.svg',
        iconImageSize: [51, 53],
        iconImageOffset: [0, -53]
      })

      myMap.geoObjects
        .add(placemarkAddress)
        .add(placemarkPickup)

      myMap.setBounds(myMap.geoObjects.getBounds());
      myMap.setZoom(myMap.getZoom() - 4);

    }

  }




  // copy text

  const heroContacts = document.querySelector('.hero-contacts');

  if (heroContacts) {
    const strList = heroContacts.querySelectorAll('.contacts-item__link');

    strList.forEach(str => {
      const copied = str.innerText;
      const buttonCopy = str.parentNode.querySelector('.contacts__button-copy');
      if (buttonCopy) {
        buttonCopy.addEventListener('click', () => copyToClipboard(copied) );
      }
    });
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

  const mobileWidth = window.matchMedia('(max-width: 768px)').matches;

  let mySwiper;

  if (mobileWidth) {

    mySwiper = new Swiper('.hero-point__swiper', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

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

  //tabsSlides(data)



  const heroIndex = document.querySelector('.hero--index');

  if (heroIndex) {

    const prev = heroIndex.querySelector('.slider-nav__prev');
    const next = heroIndex.querySelector('.slider-nav__next');

    const slides = heroIndex.querySelectorAll('.hero-slide');
    const dots = heroIndex.querySelectorAll('.hero-slider-pagination__item');

    const addClassActive = (item) => item.classList.add('js-hero-active');
    const removeClassActive = (item) => item.classList.remove('js-hero-active');

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

function blockScrollBody () {
  document.body.classList.add('js-block-scroll');
}

function unblockScrollBody () {
  document.body.classList.remove('js-block-scroll');
}

{

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




  function addAlertCopyText (copyButton) {
    const span = document.createElement('span');
    span.classList.add('button-copy-alert');
    span.textContent = "Скопировано";
    copyButton.appendChild(span);
    setTimeout(() => span.remove(),1 * 1000);
  };

  const copyButtons = document.querySelectorAll('.button-copy');

  if (copyButtons.length) {

    copyButtons.forEach(copyButton => {
      const copied = copyButton.previousElementSibling.textContent;
      copyButton.addEventListener('click', () => {
        copyToClipboard(copied);
        addAlertCopyText(copyButton);
      });
    })
  }






}

const playList = document.querySelectorAll('.play-button');

function playShow (btnPlay, video) {
  video.play();
  btnPlay.classList.add('visually-hidden');
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
        addClassActive(tab);
        const numberTab = tab.getAttribute(dataNameNav);
        slides.forEach(slide => {
          const numberSlide = slide.getAttribute(dataNameSlide);
          if (numberTab === numberSlide) addClassActive(slide);
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



