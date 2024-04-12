
window.addEventListener('load', () => {
    const video = document.getElementById('player1');
    video.autoplay = false; // Turn off autoplay
    video.loop = false; // Turn off looping
});

document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('#player1');
    const playButton = document.querySelector('#play');
    const pauseButton = document.querySelector('#pause');
    const slowerButton = document.querySelector('#slower');
    const fasterButton = document.querySelector('#faster');
    const skipButton = document.querySelector('#skip');
    const muteButton = document.querySelector('#mute');
    const volumeSlider = document.querySelector('#slider');
    const volumeText = document.querySelector('#volume');
    const vintageButton = document.querySelector('#vintage');
    const originalButton = document.querySelector('#orig');

    // Initialize video
    video.autoplay = false;
    video.loop = false;

    // Play Button
    playButton.addEventListener('click', () => {
        video.play();
        updateVolumeInfo();
    });

    // Pause Button
    pauseButton.addEventListener('click', () => {
        video.pause();
    });

    // Slow Down Button
    slowerButton.addEventListener('click', () => {
        video.playbackRate *= 0.9;
        console.log('New speed:', video.playbackRate);
    });

    // Speed Up Button
    fasterButton.addEventListener('click', () => {
        video.playbackRate *= 1.1;
        console.log('New speed:', video.playbackRate);
    });

    // Skip Ahead Button
    skipButton.addEventListener('click', () => {
        video.currentTime += 10;
        if (video.currentTime >= video.duration) {
            video.currentTime = 0;
        }
        console.log('Current time:', video.currentTime);
    });

    // Mute Button
    muteButton.addEventListener('click', () => {
        video.muted = !video.muted;
        muteButton.textContent = video.muted ? 'Unmute' : 'Mute';
    });

    // Volume Slider
    volumeSlider.addEventListener('input', () => {
        video.volume = volumeSlider.value / 100;
        updateVolumeInfo();
    });

    // Update volume information
    function updateVolumeInfo() {
        volumeText.textContent = `${Math.round(video.volume * 100)}%`;
    }

    // Old School Button
    vintageButton.addEventListener('click', () => {
        video.classList.add('oldSchool');
    });

    // Original Button
    originalButton.addEventener('click', () => {
        video.classList.remove('oldSchool');
    });
});