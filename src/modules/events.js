import { textTask, form } from "./submit.js"

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