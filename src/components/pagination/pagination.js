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
