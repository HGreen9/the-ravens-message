import videojs from 'video.js'; // Correct import for the video.js library

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