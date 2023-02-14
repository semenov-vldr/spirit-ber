{




  const heroIndex = document.querySelector('.hero--index');

  if (heroIndex) {

    const videoHeroIndex = heroIndex.querySelector('video.hero__video');

    const prev = heroIndex.querySelector('.slider-nav__prev');
    const next = heroIndex.querySelector('.slider-nav__next');

    const slides = heroIndex.querySelectorAll('.hero-slide');
    const dots = heroIndex.querySelectorAll('.hero-slider-pagination__item');

    const addClassActive = (item) => {
      item.classList.add('js-hero-active');

      const dataBgImgSrc = item.dataset.bgImgSrc;
      const dataBgVideoSrc = item.dataset.bgVideoSrc;

      if (dataBgImgSrc && !dataBgVideoSrc) {
        heroIndex.style.backgroundImage = `url(${dataBgImgSrc})`;
        videoHeroIndex.style.display = "none"
        videoHeroIndex.src = "";
      }

      if (!dataBgImgSrc && !dataBgVideoSrc) {
        heroIndex.style.backgroundImage = "url('')";
        videoHeroIndex.src = "";
        videoHeroIndex.style.display = "none"
      }

      if (dataBgVideoSrc) {
        videoHeroIndex.style.display = "block"
        videoHeroIndex.src = dataBgVideoSrc;
        heroIndex.style.backgroundImage = `url('')`;
      }

    };


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

