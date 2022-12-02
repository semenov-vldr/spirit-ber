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

