


// ---------upload file (drag&drop)---------

const formUploadList = document.querySelectorAll('.feedback-form-upload');

if (formUploadList)  formUploadList.forEach(addFunctionUploadFile)


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
      dropZone.addEventListener(event, highLight);
    });

    ['dragleave', 'drop'].forEach(event => {
      dropZone.addEventListener(event, unHighLight);
    });

    function handleFiles(files) {
      files = [...files];
      const names = new Set(files)
      console.log(names)
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
          console.log('отправка успешна');
        })
        .catch(() => console.log('Ошибка'))
    };


    dropZone.addEventListener('drop', handleDrop);
  };





    //-----другой вариант (добавление файлов через проводник)-----------------------------


    // createProgressBar
    function createProgressBar (item, index) {
      const formUploadList = document.querySelectorAll('.feedback-form-upload');
      const progressBarTemplate = document.querySelector('.upload-progress__template')
                                  .content.querySelector('.feedback-form__upload-progress');

      if (progressBarTemplate && formUploadList) {

        const progressItem = progressBarTemplate.cloneNode(true);
        progressItem.dataset.progress = index;

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

        formUploadList.forEach(formUpload => formUpload.before(progressItem));
      }
    };


    function addFileInput(evt) {
      // добавленные файлы
      const files = Array.from(evt.target.files);
      files.forEach((createProgressBar));
    };



function visibleProgressUpload (evt) {

  const files = [...evt.target.files];

  function readAndVisible (file) {
    const reader = new FileReader();

    const progress = document.querySelector('.feedback-form-upload-progress__line');

    reader.addEventListener('progress', (evt) => {
      if (evt.loaded && evt.total) {
        console.log(evt.target)
        const percent = (evt.loaded / evt.total) * 100;
        progress.style.width = `${percent}%`;

        if (percent === 100) console.log(`${file.name} - загружен`)
      }
    })
    reader.readAsDataURL(file);
  };

  if (files) files.forEach(readAndVisible);


};


// function visibleProgressUpload (evt) {
//
//   const reader = new FileReader();
//   const files = evt.target.files;
//   const file = files[0];
//   reader.readAsDataURL(file)
//
//   const progress = document.querySelector('.feedback-form-upload-progress__line');
//
//   reader.addEventListener('progress', (evt) => {
//     if (evt.loaded && evt.total) {
//       const percent = (evt.loaded / evt.total) * 100;
//       progress.style.width = `${percent}%`;
//
//       if (percent === 100) console.log(`${file.name} - загружен`)
//     }
//   })
// };



function upload(selector) {
  const inputFile = document.querySelector(selector);
  if (inputFile) {
    const changeHandler = (evt) => {
      if (!evt.target.files.length) return
      addFileInput(evt);
    };

    inputFile.addEventListener('change', (evt) => {
      changeHandler(evt);
      visibleProgressUpload(evt);
    });
  }
};




upload('.feedback-form-upload__input');






