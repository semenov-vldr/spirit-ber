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
