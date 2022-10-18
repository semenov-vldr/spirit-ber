//----------- валидация обязательных полей -----------------

const forms = document.querySelectorAll('.feedback__form');

forms.forEach(form => {

  const inputContainerList = form.querySelectorAll('.feedback-form__input-container');

  const errors = form.querySelectorAll('.feedback-form__error');
  errors.forEach(error => error.classList.add('visually-hidden'))

  inputContainerList.forEach(inputContainer => {

    const inputItem = inputContainer.querySelector('input[required]');

    if (inputItem) {
      inputItem.addEventListener('input', () => {
        const error = inputContainer.querySelector('input + .feedback-form__error');

        console.log(inputItem.value)

        const isValid = inputItem.checkValidity();
        if (isValid || inputItem.value === '' ) {
          error.classList.add('visually-hidden');
          error.textContent = ''
        } else {
          error.classList.remove('visually-hidden');
          error.textContent = 'Ошибка ввода';
        }
        if (inputItem.value === '' ) {
          console.log('пусто')
        }

      })
    }


  });

})
