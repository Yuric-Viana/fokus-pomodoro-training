import { toggleButton } from './events.js'
import soundFile from '../sons/luna-rise-part-one.mp3'
import soundFilePlay from '../sons/play.wav'
import soundFilePause from '../sons/pause.mp3'

const musicCheck = document.querySelector('.music-check')

const music = new Audio(soundFile);
music.loop = true

const musicPlay = new Audio(soundFilePlay)

const musicPause = new Audio(soundFilePause)

musicCheck.addEventListener('change', () => {
    if(music.paused) {
        music.play()
    } else {
        music.pause()
    }
})

toggleButton.addEventListener('click', () => {
    
    if(toggleButton.classList.contains('pause')) {
        musicPause.pause()
        musicPlay.play()
    } else {
        musicPause.play()
        musicPlay.pause()
    }
})

