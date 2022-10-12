

  const phoneInputs = document.querySelectorAll('input[data-tel-input]');

  const getInputNumbersValue = (input) => {
    return input.value.replace(/\D/g,"");
  };

  const onPhoneInput = (evt) => {
    const input = evt.target;
    let inputNumbersValue = getInputNumbersValue(input);
    let formattedInputValue = "";
    let selectionStart = input.selectionStart;

    if ( !inputNumbersValue ) input.value = "";


    if ( input.value.length != selectionStart ) {
      if ( evt.data && /\D/g.test(evt.data) ) {
        input.value = formattedInputValue;
      }
      return;
    }

    if ( ["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1 ) {
      // Российские номера
      if (inputNumbersValue[0] == "9") inputNumbersValue = "7" + inputNumbersValue;
      let firstSymbols = (inputNumbersValue[0] == "8") ? "8" : "+7";
      formattedInputValue = firstSymbols + " ";

      {
        if (inputNumbersValue[0] == "8") {
          phoneInputs[0].setAttribute("pattern", ".{17,}");
        } else {
          phoneInputs[0].setAttribute("pattern", ".{18,}");
        }
      }



      if (inputNumbersValue.length > 1) {
        formattedInputValue += "(" + inputNumbersValue.slice(1, 4);
      }

      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ") " + inputNumbersValue.slice(4, 7);
      }

      if (inputNumbersValue.length >= 8) {
        formattedInputValue += "-" + inputNumbersValue.slice(7, 9);
      }

      if (inputNumbersValue.length >= 10) {
        formattedInputValue += "-" + inputNumbersValue.slice(9, 11);
      }

// Не российские номера
    } else formattedInputValue = "+" + inputNumbersValue;

    input.value = formattedInputValue;
  };

// Стирание первого символа
  const onPhoneKeyDown = (evt) => {
    const input = evt.target;
    if (evt.keyCode === 8 && getInputNumbersValue(input).length === 1) {
      input.value = "";
    }
  };

// Вставка цифр в любое место
  const onPhonePaste = (evt) => {
    const pasted = evt.clipboardData || window.clipboardData;
    const input = evt.target;
    const inputNumbersValue = getInputNumbersValue(input);

    if (pasted) {
      const pastedText = pasted.getData("Text");
      if ( /\D/g.test(pastedText) ) {
        input.value = inputNumbersValue;
      }
    }
  };

  phoneInputs.forEach(input => {
    input.addEventListener('input', onPhoneInput);
    input.addEventListener("keydown", onPhoneKeyDown);
    input.addEventListener("paste", onPhonePaste);
  });




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
          if (isValid || inputItem.value.length === 0 ) {
            error.classList.add('visually-hidden');
            error.textContent = ''
          } else {
            error.classList.remove('visually-hidden');
            error.textContent = 'Ошибка ввода'
          }
          if (inputItem.value === '' ) {
            console.log('пусто')
          }

        })
      }



    });



  })



  //-------------------------------------------------------------


// ---------upload file---------

//   const dropZone = document.querySelector('.feedback-form-upload');
//
//   const events = ['dragenter', 'dragleave', 'dragover', 'drop'];
//
// //events.forEach(event => dropZone.addEventListener(event,  handlerFunction, false));
//
//   function preventDefaults (evt) {
//     evt.preventDefault();
//     evt.stopPropagation();
//   };
//
// // Сбрасываем стандартное поведение для всех событий
//   events.forEach(event => {
//     dropZone.addEventListener(event, preventDefaults);
//   });
//
//   function highLight (evt) {
//     dropZone.classList.add('highlight');
//   };
//
//   function unHighLight (evt) {
//     dropZone.classList.remove('highlight');
//   };
//
//   ['dragenter', 'dragover'].forEach(event => {
//     dropZone.addEventListener(event, highLight)
//   });
//
//   ['dragleave', 'drop'].forEach(event => {
//     dropZone.addEventListener(event, unHighLight)
//   });
//
//   function handleDrop (evt) {
//     let dt = evt.dataTransfer;
//     let files = dt.files;
//     handleFiles(files);
//   };
//
//   function handleFiles(files) {
//     ([...files].forEach(uploadFile));
//   };
//
//   function uploadFile(file) {
//     let url = 'URL для загрузки файлов';
//     let formData = new FormData();
//
//     formData.append('file', file)
//
//     fetch(url, {
//       method: 'POST',
//       body: formData
//     })
//       .then(() => console.log('Готово'))
//       .catch(() => console.log('Ошибка'))
//   }
//
//   dropZone.addEventListener('drop', handleDrop);













