import { textTask, form } from "./submit.js"

export const toggleButton = document.getElementById('toggle-button')
const buttonDelete = document.querySelector('.button-delete')
const buttonCancel = document.querySelector('.button-cancel')
const addTask = document.querySelector('.add-task')

buttonDelete.addEventListener('click', () => {
    textTask.value = ''
})

buttonCancel.addEventListener('click', () => {
    form.style.display = 'none'
})

addTask.addEventListener('click', () => {
    form.style.display = 'block'
})

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('pause')

    if(toggleButton.classList.contains('pause')) {
        toggleButton.textContent = 'Pausar'
    } else {
        toggleButton.textContent = 'Começar'
    }
})