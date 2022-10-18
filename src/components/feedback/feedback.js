
{

// ---------upload file---------

const formBlog = document.querySelector('.feedback-form__input-container--blog');

if (formBlog) {

  const dropZone = formBlog.querySelector('.feedback-form-upload');

  const progressLine = formBlog.querySelector('.feedback-form-upload-progress__line'); // линия загрузки
  let filesDone = 0; // количество уже загруженных файлов
  let filesTodo = 0; // сколько файлов выбрано для загрузки

  if (dropZone) {

    const events = ['dragenter', 'dragleave', 'dragover', 'drop'];

//events.forEach(event => dropZone.addEventListener(event,  handlerFunction, false));


    function preventDefaults(evt) {
      evt.preventDefault();
      evt.stopPropagation();
    };

// Сбрасываем стандартное поведение для всех событий
    events.forEach(event => {
      dropZone.addEventListener(event, preventDefaults);
    });

    function highLight() {
      dropZone.classList.add('highlight');
    };

    function unHighLight() {
      dropZone.classList.remove('highlight');
    };

    ['dragenter', 'dragover'].forEach(event => {
      dropZone.addEventListener(event, highLight)
    });

    ['dragleave', 'drop'].forEach(event => {
      dropZone.addEventListener(event, unHighLight)
    });

    function handleFiles(files) {
      files = [...files];
      //initializeProgress(files.length);
      files.forEach(uploadFile);
      files.forEach(createProgressBar);
      console.log(files[0]);
    };

    function handleDrop(evt) {
      let dt = evt.dataTransfer;
      let files = dt.files;
      handleFiles(files);
    };


    function uploadFile(file) {
      let url = 'URL для загрузки файлов';
      let formData = new FormData();

      formData.append('file', file);

      fetch(url, {
        method: 'POST',
        body: formData
      })
        .then(() => {
          //progressDone();
          console.log('готово');
        })
        .catch(() => console.log('Ошибка'))
    };

    //---- Сброс состояния индикатора
    function initializeProgress(numfiles) {
      progressLine.style.width = '0';
      filesDone = 0;
      filesTodo = numfiles;
    };

    // Увеличения числа загруженых файлов на единицу и обновления индикатора
    function progressDone() {
      filesDone++
      progressLine.style.width = `${filesDone / filesTodo * 100} px`;
    };


    dropZone.addEventListener('drop', handleDrop);



    //-----другой вариант-----------------------------


    const progressBarTemplate = document.querySelector('.upload-progress__template');


    const labelText = formBlog.querySelector('.feedback-form-upload__label span');

    const formUpload = formBlog.querySelector('.feedback-form-upload');

    const inputfile = formUpload.querySelector('.feedback-form__input-container--blog #inputfile');


    // createProgressBar
    const createProgressBar = (item) => {
      const progressItem = progressBarTemplate.content.cloneNode(true);

      const nameFile = progressItem.querySelector('.feedback-form-upload-progress__name');
      const sizeFile = progressItem.querySelector('.feedback-form-upload-progress__size');

      nameFile.textContent = item.name;

      let size = item.size;

      if (size > 1024 * 1024 * 2) {
        size = (size / 1024 / 1024).toFixed(1);
        sizeFile.textContent = size + ' мб';
      } else {
        size = (size / 1024).toFixed(1);
        sizeFile.textContent = size + ' кб';
      }

      // let size = (item.size / 1024 / 1024).toFixed(1);
      // sizeFile.textContent = size + ' мб';



      formUpload.before(progressItem);
    };


    function addFileInput(evt) {
      // добавленные файлы
      const files = Array.from(evt.target.files);
      files.forEach(createProgressBar);
    };

    function upload(selector) {
      const inputFile = document.querySelector(selector);

      const changeHandler = (evt) => {
        if (!evt.target.files.length) return
        addFileInput(evt);
      };

      inputFile.addEventListener('change', changeHandler);

    };


    if (inputfile) upload('#inputfile');

  }
  }

}






