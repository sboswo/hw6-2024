
window.addEventListener('load', () => {
    const video = document.getElementById('player1');
    video.autoplay = false; // Turn off autoplay
    video.loop = false; // Turn off looping
});

const video = document.getElementById('player1');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');
const slowerButton = document.getElementById('slower');
const fasterButton = document.getElementById('faster');
const skipButton = document.getElementById('skip');
const muteButton = document.getElementById('mute');
const volumeSlider = document.getElementById('slider');
const volumeDisplay = document.getElementById('volume');
const vintageButton = document.getElementById('vintage');
const originalButton = document.getElementById('orig');

// Play button
playButton.addEventListener('click', () => {
    video.play();
    volumeDisplay.textContent = `${video.volume * 100}%`;
});

// Pause button
pauseButton.addEventListener('click', () => {
    video.pause();
});

// Slow down video speed
slowerButton.addEventListener('click', () => {
    video.playbackRate *= 0.9;
    console.log('New playback speed:', video.playbackRate);
});

// Speed up video speed
fasterButton.addEventListener('click', () => {
    video.playbackRate /= 0.9;
    console.log('New playback speed:', video.playbackRate);
});

// Skip ahead
skipButton.addEventListener('click', () => {
    video.currentTime += 10;
    if (video.currentTime >= video.duration) {
        video.currentTime = 0;
    }
    console.log('Current video location:', video.currentTime);
});

// Mute/unmute video
muteButton.addEventListener('click', () => {
    video.muted = !video.muted;
    muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
});

// Volume slider
volumeSlider.addEventListener('input', () => {
    video.volume = volumeSlider.value / 100;
    volumeDisplay.textContent = `${volumeSlider.value}%`;
});

// Add oldSchool class to video
vintageButton.addEventListener('click', () => {
    video.classList.add('oldSchool');
});

// Remove oldSchool class from video
originalButton.addEventListener('click', () => {
    video.classList.remove('oldSchool');
});