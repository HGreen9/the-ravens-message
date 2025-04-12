import videojs from './node_modules/video.js/dist/video.min.js';

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // 🎞️ Add a subtle flickering effect (like dim lighting)
    setInterval(() => {
        const brightness = (Math.random() * 0.1 + 0.95).toFixed(2);
        body.style.filter = `brightness(${brightness})`;
    }, 200); // slowed slightly to feel more intentional

    // 🕵️‍♀️ Create and style a "PLAY MESSAGE" overlay
    const playOverlay = document.createElement('div');
    playOverlay.textContent = '▶ DECRYPTED AUDIO AVAILABLE';
    playOverlay.style.position = 'absolute';
    playOverlay.style.top = '20px';
    playOverlay.style.left = '20px';
    playOverlay.style.padding = '8px 14px';
    playOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.75)';
    playOverlay.style.border = '1px solid #00FF00';
    playOverlay.style.color = '#00FF00';
    playOverlay.style.fontFamily = 'Courier New, monospace';
    playOverlay.style.fontSize = '14px';
    playOverlay.style.textShadow = '0 0 4px #00FF00, 0 0 6px #00FF00';
    playOverlay.style.zIndex = '3';
    playOverlay.style.pointerEvents = 'none'; // keeps it from blocking clicks

    document.body.appendChild(playOverlay);

    // 🎬 Initialize the video player
    const videoPlayer = videojs('raven-message', {
        controls: true,
        autoplay: false,
        preload: 'auto',
        width: 640,
        height: 360,
        sources: [
            {
                src: 'Assets/The Ravens Message.mp4',
                type: 'video/mp4'
            }
        ]
    });

    // 🧠 Optional: Log playback for immersion
    videoPlayer.on('play', () => {
        console.log('[ACCESS GRANTED] Playing surveillance footage...');
    });
});

// filepath: /workspaces/the-ravens-message/webpack.config.js
const path = require('path');

module.exports = {
    entry: './script.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
};
