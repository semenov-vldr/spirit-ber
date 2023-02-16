{


  const priceLaserCutting = document.querySelector('.price-laser-cutting'); // блок с таблицей цен

  let tableRowList = document.querySelectorAll('.table-row');    // строки значений

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



  // Открытие поп-ап "Формирование цены"
  const tablePrice = document.querySelector('.price');

  if (tablePrice) {

    const openPriceFormation = tablePrice.querySelector('.price-table__pricing');

    if (openPriceFormation) {

      const priceFormation = tablePrice.querySelector('.price-formation');
      const closePriceFormation = priceFormation.querySelector('.accordion .accordion__close');

      openPriceFormation.addEventListener('click', () => {
        priceFormation.classList.add('js-priceFormation-visible');
        blockScrollBody()
      });

      closePriceFormation.addEventListener('click', () => {
        priceFormation.classList.remove('js-priceFormation-visible');
        unblockScrollBody()
      });

      priceFormation.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('price-formation')) {
          priceFormation.classList.remove('js-priceFormation-visible');
          unblockScrollBody()
        }
      })
    }

  }


}
