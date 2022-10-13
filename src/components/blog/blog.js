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
          //console.log(categoryItem + ' показать')
        } else {
          item.style.display = 'none';
          //console.log(categoryItem + ' скрыть')
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
        //console.log(currentCategory);
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
