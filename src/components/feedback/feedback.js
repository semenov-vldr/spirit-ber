


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

    ['dragenter', 'dragover'].forEach(eventName => {
      dropZone.addEventListener(eventName, highLight);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropZone.addEventListener(eventName, unHighLight);
    });

    function handleFiles(files) {
      files = [...files];
      files.forEach(uploadFile);
      files.forEach(createProgressBar);

    };

    function handleDrop(evt) {
      let dt = evt.dataTransfer;
      console.log(dt.items)
      let files = dt.files;
      handleFiles(files);
      visibleProgressUpload(evt);
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

// Перевод байтов в Кб, Мб, Гб
function formatBytes(bytes, decimals = 0) {
  if (!+bytes) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Байт', 'Кб', 'Мб', 'Гб'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
};


// createProgressBar
function createProgressBar (item, index, inputFile) {
  const formUploadList = document.querySelectorAll('.feedback-form-upload');
  const progressBarTemplate = document.querySelector('.upload-progress__template')
                              .content.querySelector('.feedback-form__upload-progress');

  //let arrInputFile = [...inputFile.files];

  if (progressBarTemplate && formUploadList) {

    const progressItem = progressBarTemplate.cloneNode(true);
    const progressLine = progressItem.querySelector('.feedback-form-upload-progress__line');
    const close = progressItem.querySelector('.feedback-form-upload-progress__close');
    progressLine.dataset.progress = index;
    close.dataset.name = item.name;

    const nameFile = progressItem.querySelector('.feedback-form-upload-progress__name');
    const sizeFile = progressItem.querySelector('.feedback-form-upload-progress__size');

    nameFile.textContent = item.name;

    let size = item.size;
    sizeFile.textContent = formatBytes(size);

    formUploadList.forEach(formUpload => formUpload.before(progressItem));

    const newInputFile = progressItem.parentNode

    let arrInputFile = [...inputFile.files];

    close.addEventListener('click', () => {
      progressItem.remove();
      let indexDeletedFile = arrInputFile.findIndex(val => val.name === close.dataset.name)
      arrInputFile.splice(indexDeletedFile, 1)
      console.log(arrInputFile)
    });

  }
};





function visibleProgressUpload (evt) {
  let files

  if (evt.target.files) files = [...evt.target.files];
  if (evt.dataTransfer) files = [...evt.dataTransfer.files];

  // Получение стутуса загрузки файла и отображение процесса загрузки
  function readAndVisible (file, index) {
    const reader = new FileReader();
    const progress = document.querySelector(`.feedback-form-upload-progress__line[data-progress="${index}"]`);
    const sizeFile = progress.parentNode.querySelector('.feedback-form-upload-progress__size');

    reader.addEventListener('progress', (evt) => {
      let loaded = evt.loaded;
      let total = evt.total;
        if (loaded && total) {
          const percent = (loaded / total) * 100;
          progress.style.width = `${percent}%`;
          sizeFile.textContent = `${formatBytes(loaded)} из ${formatBytes(total)}`;

          if (percent === 100) {
            console.log(`${file.name} - загружен`);
            sizeFile.textContent = formatBytes(total);
          }
        }
    });
    reader.readAsDataURL(file);
  };

  if (files) files.forEach(readAndVisible);
};


let files = [];

function upload(selector) {
  const inputFile = document.querySelector(selector);
  if (inputFile) {
    const changeHandler = (evt) => {
      if (!evt.target.files.length) return
      files.push(...evt.target.files); // вставка в пустой массив files загруженных файлы
      let filterFiles = [...new Set(files)]; // новый (отфильтрованный) массив без повторных файлов
      filterFiles.forEach((filterFile, index) => createProgressBar(filterFile, index, inputFile));
    };

    inputFile.addEventListener('change', (evt) => {
      changeHandler(evt);
      visibleProgressUpload(evt);
      console.log(evt.target.files)
    });
  }
};



upload('.feedback-form-upload__input');






