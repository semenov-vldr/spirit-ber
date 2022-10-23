

  //----------- валидация обязательных полей -----------------

  const forms = document.querySelectorAll('.feedback__form');


    function validForm (forms) {

      const addClassHidden = (item) => item.classList.add('visually-hidden');
      const removeClassHidden = (item) => item.classList.remove('visually-hidden');

      forms.forEach(form => {

        const inputContainerList = form.querySelectorAll('.feedback-form__input-container');
        const errors = form.querySelectorAll('.feedback-form__error');
        errors.forEach(addClassHidden);

        inputContainerList.forEach(inputContainer => {
          const inputItem = inputContainer.querySelector('input[required]');

          if (inputItem) {
            inputItem.addEventListener('input', () => {
              const error = inputContainer.querySelector('input + .feedback-form__error');

              const isValid = inputItem.checkValidity();
              if (isValid || inputItem.value === '' ) {
                addClassHidden(error);
                error.textContent = ''
              } else {
                removeClassHidden(error);
                error.textContent = 'Ошибка ввода';
              }
            })
          }
        });
      })
    };

  if (forms) validForm(forms)
