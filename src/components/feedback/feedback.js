
{

// ---------upload file---------

const formUpload = document.querySelector('.feedback-form-upload');

if (formUpload) {


    addFunctionUploadFile(formUpload)

  function addFunctionUploadFile (dropZone) {
    const events = ['dragenter', 'dragleave', 'dragover', 'drop'];

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
      files.forEach(uploadFile);
      files.forEach(createProgressBar);
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
          console.log('готово');
        })
        .catch(() => console.log('Ошибка'))
    };


    dropZone.addEventListener('drop', handleDrop);
  };





    //-----другой вариант-----------------------------


    const progressBarTemplate = document.querySelector('.upload-progress__template');

    // createProgressBar
    function createProgressBar (item) {
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


     upload('.feedback-form-upload__input');

  }



}






