import { textTask, form } from "./submit.js"

export const toggleButton = document.getElementById('toggle-button')
const buttonDelete = document.querySelector('.button-delete')
const buttonCancel = document.querySelector('.button-cancel')
const addTask = document.querySelector('.add-task')
const listTasks = document.querySelector('.list-tasks')

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

    if (toggleButton.classList.contains('pause')) {
        toggleButton.textContent = 'Pausar'
    } else {
        toggleButton.textContent = 'Começar'
    }
})

export function taskFinished({ itemFinished }) {
    if (itemFinished.classList.contains('item-personalized')) {
        itemFinished.style.backgroundColor = 'rgba(0, 244, 191, 0.4)'
    }
}

listTasks.addEventListener('click', (event) => {
    
    if (event.target.classList.contains('edit-task')) {
        const itemSelected = event.target.closest('li')

        const { id } = itemSelected.dataset
        const task = document.querySelector(`[data-id="${id}"] div .task`)        

        if (id) {
            let newTask = prompt('Informe a nova tarefa desejada:')
            task.textContent = newTask
        }
        
    }

})