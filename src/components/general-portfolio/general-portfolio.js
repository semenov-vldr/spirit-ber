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





//------------Pagination--------------------

  function getPageList(totalPages, page, maxLength) {

    function range(start, end) {
      return Array.from(Array(end - start + 1), (_, i) => i + start);
    };

    let sideWidth = maxLength < 9 ? 1 : 2;
    let leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    let rightWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if (totalPages <= maxLength) {
      return range(1, totalPages);
    }

    if (page <= maxLength - sideWidth - 1 - rightWidth) {
      return range(1, maxLength - sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }

    if (page >= totalPages - sideWidth - 1 - rightWidth) {
      return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rightWidth - leftWidth, totalPages));
    }

    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rightWidth), 0, range(totalPages - sideWidth + 1, totalPages));
  }


  $(function (){
    let items = $('.general-portfolio__cards-grid .portfolio__item');
    let numberOfItems = items.length;
    const limitPerPages = 6; // how may card items visible per a page
    let totalPages = Math.ceil(numberOfItems / limitPerPages);
    const paginationSIze = 6; // How many page elements visible in the pagination
    let currentPage;

    function showPage(whichPage) {
      if (whichPage < 1 || whichPage > totalPages) return false;

      currentPage = whichPage;

      items.hide().slice((currentPage - 1) * limitPerPages, currentPage * limitPerPages).show();


      $('.pagination li').slice(1, -1).remove();

      getPageList(totalPages, currentPage, paginationSIze).forEach(item => {
        $('<li>').addClass('pagination__item').addClass(item ? 'js-pagination-current' : 'pagination__item--dots')
        .toggleClass('js-pagination-active', item === currentPage ).text(item || '...').insertBefore('.pagination__next');
      });


      $('.pagination__prev').toggleClass('js-pagination-disable', currentPage === 1);
      $('.pagination__next').toggleClass('js-pagination-disable', currentPage === totalPages);
      return true;
    };


    $('.pagination').append(
      $('<li>').addClass('pagination__item').addClass('pagination__prev'),
      $('<li>').addClass('pagination__item').addClass('pagination__next'),
    );

    $('.general-portfolio__cards-grid').show();
    showPage(1);


    $(document).on('click', '.pagination li.js-pagination-current:not(.js-pagination-active)', function() {
      return showPage(+$(this).text());
    });

    $('.pagination__next').on('click', function () {
      return showPage(currentPage + 1);
    });

    $('.pagination__prev').on('click', function () {
      return showPage(currentPage - 1);
    });

  });


  //------------Pagination END--------------------




}
