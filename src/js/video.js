let thumbnail = document.getElementById('video-foto');
let playButton = document.getElementById('play-button');
let videoIframe = document.getElementById('video-iframe');

playButton.addEventListener('click', function () {
  thumbnail.style.display = 'none';
  playButton.style.display = 'none';
  videoIframe.src = 'https://www.youtube.com/embed/o9Dh7r_Ih5Q?controls=0';
  videoIframe.style.display = 'block';
});
