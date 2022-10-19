const playList = document.querySelectorAll('.play-button');

function playShow (btnPlay, video) {
  video.play();
  btnPlay.classList.add('visually-hidden');
};

function pauseShow (btnPlay, video) {
  video.pause();
  btnPlay.classList.remove('visually-hidden');
};


playList.forEach(play => {
  const parent = play.parentNode;
  const videoContent = parent.querySelector('video');
  play.addEventListener('click', () => playShow(play, videoContent));

  videoContent.addEventListener('click', () => pauseShow(play, videoContent))
});
