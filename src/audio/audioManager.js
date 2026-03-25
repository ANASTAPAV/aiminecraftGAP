// audioManager.js

class AudioManager {
    constructor() {
        this.backgroundMusic = new Audio();
        this.soundEffects = {};
        this.volume = 1.0; // Volume level from 0.0 to 1.0
    }

    // Load background music
    loadBackgroundMusic(src) {
        this.backgroundMusic.src = src;
        this.backgroundMusic.loop = true;
    }

    // Play background music
    playBackgroundMusic() {
        this.backgroundMusic.volume = this.volume;
        this.backgroundMusic.play();
    }

    // Pause background music
    pauseBackgroundMusic() {
        this.backgroundMusic.pause();
    }

    // Load sound effect
    loadSoundEffect(name, src) {
        this.soundEffects[name] = new Audio(src);
    }

    // Play sound effect
    playSoundEffect(name) {
        if (this.soundEffects[name]) {
            this.soundEffects[name].volume = this.volume;
            this.soundEffects[name].play();
        }
    }

    // Set volume
    setVolume(value) {
        this.volume = Math.max(0, Math.min(value, 1)); // Restrict volume between 0 and 1
        this.backgroundMusic.volume = this.volume;
        for (const soundEffect of Object.values(this.soundEffects)) {
            soundEffect.volume = this.volume;
        }
    }
}

// Example usage:
// const audioManager = new AudioManager();
// audioManager.loadBackgroundMusic('path/to/background.mp3');
// audioManager.loadSoundEffect('jump', 'path/to/jump.mp3');
// audioManager.playBackgroundMusic();
// audioManager.playSoundEffect('jump');

export default AudioManager;