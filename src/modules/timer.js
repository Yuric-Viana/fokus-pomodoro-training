import { musicFinally } from "./music.js"
import { toggleButton } from "./events.js"

const screenTime = document.getElementById('timer')

let idInterval = null
export let countdown = 1500

export function regressive() {
    countdown -= 1
    showTime()

    if (countdown <= 0) {
        musicFinally()
        alert('Parabéns, você finalizou sua tarefa!')
        reset()
        return
    }

}

toggleButton.addEventListener('click', init)

function init() {
    if (idInterval) {
        reset()
        return
    }

    idInterval = setInterval(() => {
        regressive()
    }, 1000)
}

function reset() {
    clearInterval(idInterval)
    idInterval = null
}

export function showTime() {
    const time = new Date(countdown * 1000).toLocaleTimeString('pt-br', {
        minute: '2-digit',
        second: '2-digit'
    })
    screenTime.innerHTML = `${time}`
}

export function getCountdown() {
    return countdown
}

export function setCountdown(value) {
    countdown = value
    showTime()
}

showTime()
