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
