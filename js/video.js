var video;

window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.querySelector(".video");
    console.log(video);

    // Turn off autoplay and looping
    video.autoplay = false;
    console.log("Video Autoplay is off");
    video.loop = false;
    console.log("Video Loop is off");

    var volumeSpan = document.querySelector("#volume");
    // volumeSpan.textContent = Math.round(video.volume * 100) + "%";
    var volumeSlider = document.querySelector("#slider");

    video.addEventListener("volumechange", function() {
        volumeSpan.textContent = Math.round(video.volume * 100) + "%";
    });

    video.addEventListener("play", function() {
        volumeSpan.textContent = Math.round(video.volume * 100) + "%";
        volumeSlider.value = video.volume * 100;
    });
});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
    video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate *= 0.9;
    console.log("Current: " + Math.round(video.playbackRate * 100) / 100);
});

document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate /= 0.9;
    console.log("Current: " + Math.round(video.playbackRate * 100) / 100);
});

document.querySelector("#skip").addEventListener("click", function() {
    var targetTime = video.currentTime + 10;
    if (targetTime < video.duration) {
        video.currentTime = targetTime;
    } else {
        video.currentTime = 0;
        video.pause(); // Pause video after skipping to the end
    }
    console.log("Current: " + Math.round(video.currentTime));
});

document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted == false) {
        video.muted = true;
        document.querySelector("#mute").innerHTML = "Unmute";
        console.log("Muted");
    } else {
        video.muted = false;
        document.querySelector("#mute").innerHTML = "Mute";
        console.log("Unmuted");
    }
});

document.querySelector("#slider").addEventListener("input", function() {
    video.volume = this.value / 100;
    document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
    console.log("Current: " + Math.round(video.volume * 100) + "%");
});

document.querySelector("#volume").addEventListener("click", function() {
    if (video.volume == 0) {
        video.volume = 1;
        document.querySelector("#volume").textContent = "Volume: 100%";
        console.log("Volume is " + Math.round(video.volume * 100) + "%");
    } else {
        video.volume = 0;
        document.querySelector("#volume").textContent = "Mute";
        console.log("Volume is " + Math.round(video.volume * 100) + "%");
    }
});

document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
    console.log("Old School");
});

document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
    console.log("Original");
});