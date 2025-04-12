import videojs from 'video.js'; // Correct import for the video.js library

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Add a flickering effect
    setInterval(() => {
        body.style.filter = `brightness(${Math.random() * 0.2 + 0.9})`;
    }, 100);

    // Add a "PLAY" overlay
    const playOverlay = document.createElement('div');
    playOverlay.textContent = 'PLAY';
    playOverlay.style.position = 'absolute';
    playOverlay.style.top = '10px';
    playOverlay.style.left = '10px';
    playOverlay.style.color = '#00FF00';
    playOverlay.style.fontFamily = 'Press Start 2P, monospace';
    playOverlay.style.fontSize = '20px';
    playOverlay.style.textShadow = '0 0 5px #00FF00, 0 0 10px #00FF00';
    playOverlay.style.zIndex = '3';
    document.body.appendChild(playOverlay);

    // Initialize the video player
    const videoPlayer = videojs('video-player-container', {
        controls: true,
        autoplay: false,
        preload: 'auto',
        width: 640,
        height: 360,
        sources: [
            {
                src: 'Assets/The Ravens Message.mp4', // Replace with the path to your video file
                type: 'video/mp4' // Replace with the correct MIME type for your video
            }
        ]
    });

    // Optional: Add event listeners or customize further
    videoPlayer.on('play', () => {
        console.log('Video is playing');
    });
});