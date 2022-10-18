const desktopWidth = window.matchMedia('(min-width: 1500px)').matches;
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
        console.log(popup)
      });


    };



    setPopupsPosition()

    window.addEventListener('resize', () => {

      if (desktopWidth) setPopupsPosition();

      if (tabletWidth) resetPopupsPosition();

    });


  }
}

