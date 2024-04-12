var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

const video = document.querySelector('video'); // Assuming there's only one video element on the page
const playButton = document.querySelector('#play');
const pauseButton = document.querySelector('#pause');
const slowButton = document.querySelector('#slower');
const fastButton = document.querySelector('#faster');
const skipButton = document.querySelector('#skip');
const muteButton = document.querySelector('#mute');
const volumeSlider = document.querySelector('#slider');
const vintageButton = document.querySelector('#vintage');
const originalButton = document.querySelector('#orig');
const volumeDisplay = document.querySelector('#volume');

// Initialize video properties
video.autoplay = false;
video.loop = false;
volumeDisplay.textContent = video.volume * 100 + '%';

// Add event listeners
playButton.addEventListener('click', () => {
    video.play();
    volumeDisplay.textContent = video.volume * 100 + '%';
});

pauseButton.addEventListener('click', () => {
    video.pause();
});

slowButton.addEventListener('click', () => {
    video.playbackRate -= 0.1;
    console.log('New playback speed:', video.playbackRate);
});

fastButton.addEventListener('click', () => {
    video.playbackRate += 0.1;
    console.log('New playback speed:', video.playbackRate);
});

skipButton.addEventListener('click', () => {
    video.currentTime += 10;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }
    console.log('Current video time:', video.currentTime);
});

muteButton.addEventListener('click', () => {
    video.muted = !video.muted;
    muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
});

volumeSlider.addEventListener('input', () => {
    video.volume = volumeSlider.value / 100;
    volumeDisplay.textContent = video.volume * 100 + '%';
});

vintageButton.addEventListener('click', () => {
    video.classList.add('oldSchool');
});

originalButton.addEventListener('click', () => {
    video.classList.remove('oldSchool');
});