import { taskFinished, toggleButton } from "../events.js"
import { musicFinally } from "./music.js"
import { updateTaskFinished } from "../services/new-task.js"

const screenTime = document.getElementById('timer')

export let idInterval = null
export let countdown = 1500

export async function regressive() {
    countdown -= 1
    showTime()

    if (countdown <= 0) {
        const itemPersonalized = document.querySelector('.item-list.item-personalized')


        if (itemPersonalized) {
            taskFinished({
                itemFinished: itemPersonalized
            })


            const { id } = itemPersonalized.dataset
            itemPersonalized.classList.remove('item-personalized')
            itemPersonalized.classList.add('task-finished')
            itemPersonalized.style.border = 'none'

            const taskValue = itemPersonalized.textContent           

            let imgCheck = document.querySelectorAll('.task-finished .img-check')

            imgCheck.forEach(img => {
                img.setAttribute('src', 'src/assets/icons/check-green.svg')
            })

            alert('Parabéns, você finalizou sua tarefa!')

            await updateTaskFinished({ id, finishedClass: 'task-finished' })
        } else {
            alert('Tempo finalizado!')
        }

        reset()
        musicFinally()
        toggleButton.classList.remove('pause')
        toggleButton.textContent = 'Começar'
    }
}

toggleButton.addEventListener('click', init)

function reset() {
    clearInterval(idInterval)
    idInterval = null
    countdown = getCountdown()
    showTime()
}

function getCountdown() {
    const selected = document.querySelector('.type-option.type-selected')

    if (selected.classList.contains('focus')) return 1500
    if (selected.classList.contains('short-rest')) return 300
    if (selected.classList.contains('long-rest')) return 900

    return 0
}

function init() {
    if (idInterval) {
        reset()
        return
    }

    idInterval = setInterval(regressive, 1000)
}

export function showTime() {
    const time = new Date(countdown * 1000).toLocaleTimeString('pt-br', {
        minute: '2-digit',
        second: '2-digit'
    })
    screenTime.innerHTML = `${time}`
}

export function setCountdown(value) {
    countdown = value
    showTime()
}

showTime()
