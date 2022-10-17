
{

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


  //-------------------------------------------------------------


// ---------upload file---------

  const dropZone = document.querySelector('.feedback-form-upload');

if (dropZone) {

  const events = ['dragenter', 'dragleave', 'dragover', 'drop'];

//events.forEach(event => dropZone.addEventListener(event,  handlerFunction, false));

  function preventDefaults (evt) {
    evt.preventDefault();
    evt.stopPropagation();
  };

// Сбрасываем стандартное поведение для всех событий
  events.forEach(event => {
    dropZone.addEventListener(event, preventDefaults);
  });

  function highLight (evt) {
    dropZone.classList.add('highlight');
  };

  function unHighLight (evt) {
    dropZone.classList.remove('highlight');
  };

  ['dragenter', 'dragover'].forEach(event => {
    dropZone.addEventListener(event, highLight)
  });

  ['dragleave', 'drop'].forEach(event => {
    dropZone.addEventListener(event, unHighLight)
  });

  function handleDrop (evt) {
    let dt = evt.dataTransfer;
    let files = dt.files;
    handleFiles(files);
  };

  function handleFiles(files) {
    ([...files].forEach(uploadFile));
    console.log(files)
  };

  function uploadFile(file) {
    let url = 'URL для загрузки файлов';
    let formData = new FormData();

    formData.append('file', file)

    fetch(url, {
      method: 'POST',
      body: formData
    })
      .then(() => console.log('Готово'))
      .catch(() => console.log('Ошибка'))
  }

  dropZone.addEventListener('drop', handleDrop);

}




  //-----другой вариант-----------------------------



  const formBlog = document.querySelector('.feedback-form__input-container--blog');
  if (formBlog) {


    const labelText = formBlog.querySelector('.feedback-form-upload__label span');

    function addFileInput (evt) {
      // добавленные файлы
      const files = Array.from(evt.target.files);

      // добавление имён файлов и общий размер файлов
      labelText.textContent = '';
      let arrayNames = [];
      let size = 0;
      files.forEach(file => {
        console.log(file)
        arrayNames.push(file.name);
        size += file.size / 1024 / 1024;
      })

      arrayNames = arrayNames.join(', ');
      size = size.toFixed(1);
      labelText.textContent = arrayNames + ' (' + size + ' мб)';
    };

  }

  function upload (selector, options = {}) {
    const inputFile = document.querySelector(selector);

    const changeHandler = (evt) => {
      if (!evt.target.files.length) return
      addFileInput (evt);
    };

    inputFile.addEventListener('change', changeHandler);

  };


  const inputfile = document.querySelector('.feedback-form__input-container--blog #inputfile');
  if (inputfile)  upload('#inputfile')






  }






