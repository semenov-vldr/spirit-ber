{

  // copy text
  function copyToClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };




  function addAlertCopyText (copyButton) {
    const span = document.createElement('span');
    span.classList.add('button-copy-alert');
    span.textContent = "Скопировано";
    copyButton.appendChild(span);
    setTimeout(() => span.remove(),1 * 1000);
  };

  const copyButtons = document.querySelectorAll('.button-copy');

  if (copyButtons.length) {

    copyButtons.forEach(copyButton => {
      const copied = copyButton.previousElementSibling.textContent;
      copyButton.addEventListener('click', () => {
        copyToClipboard(copied);
        addAlertCopyText(copyButton);
      });
    })
  }






}
