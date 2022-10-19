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
