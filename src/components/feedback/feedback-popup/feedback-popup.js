{
  // все кнопки, по нажатию на которые появляется поп-ап
  const callToActionButtons = document.querySelectorAll('.button-popup');

  const API_URL = 'https://httpbin.org/post';

  let replyPopup;
  let formPopup;


  function removeFormPopup () {
    const formPopup = document.querySelector('.form-popup');
    if (formPopup) formPopup.remove();
  };

  function closeFormPopup (popup) {
    popup.remove();
    unblockScrollBody();
    popup.querySelector('form').reset();
  };

  function openFormPopup (popup) {
    const template = document.querySelector('#form-popup').content.cloneNode(true);
    popup = template.querySelector('.form-popup')
    document.body.append(popup);
    blockScrollBody();
    onDocumentClick(popup);

    upload('.feedback-form-upload__input');

    // drop zone
    const formUpload = document.querySelector('.feedback-form-upload');
    addFunctionUploadFile(formUpload);

    // close
    const close = popup.querySelector('.form-popup__close');
    close.addEventListener('click', () => {
      closeFormPopup(popup);
    });

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        closeFormPopup(popup);
      }
    });


  };

  function onDocumentClick (item) {
    document.body.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('form-popup')) {
        closeFormPopup(item);
      }
    })
  };

  if (callToActionButtons) {

    callToActionButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        openFormPopup(formPopup);
        const phoneInputs = document.querySelectorAll('input[data-tel-input]');
        const forms = document.querySelectorAll('.feedback__form');
        if (phoneInputs) validInputTel(phoneInputs);
        if (forms) validForm(forms);
        userFormSubmit();
          });
    });
  }





// --- reply-popup (ответ на отправленную форму) ------

  function showReplyPopup () {
    document.body.append(replyPopup);
    const closeButton = replyPopup.querySelector('.reply-popup__button');
    closeButton.addEventListener('click', () => {
      replyPopup.remove();
      unblockScrollBody();
    });

    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') {
        replyPopup.remove();
        unblockScrollBody();
      }
    });
  };

  function displayReplyPopupSuccess () {
    const template = document.querySelector('#success').content.cloneNode(true);
    replyPopup = template.querySelector('.reply-popup');
    showReplyPopup();
  };

  function displayReplyPopupError () {
    const template = document.querySelector('#error').content.cloneNode(true);
    replyPopup = template.querySelector('.reply-popup');
    showReplyPopup();
  }


  function sendDataForm (onSuccess, onError, body) {
    fetch(API_URL,{
        method: 'POST',
        body,
      },
    ).then((responce) => {
      responce.ok ? onSuccess() : onError();
      console.log(responce.json())
    })
      .catch(() => onError());
  };

  function userFormSubmit () {

    const forms = document.querySelectorAll('form')

    forms.forEach(form => {
      form.addEventListener('submit', (evt) => {
        evt.preventDefault();
        const isValid = form.checkValidity();

        if (isValid) {
          sendDataForm(() => {
              displayReplyPopupSuccess();
              removeFormPopup();
              form.reset();
            },
            () => {
              displayReplyPopupError;
              removeFormPopup();
            },
            new FormData(evt.target)
          );
        }
      });
    })
  };


  userFormSubmit();











}
