import { tasksCancel, cancelTasksAll } from "../services/tasks-cancel.js"
import { tasksDay } from "./load.js"
import { inProgress } from "../form/show-task.js"

const deleteTasks = document.querySelector('.more-list')

deleteTasks.addEventListener('click', async (event) => {
    const isConfirm = confirm('Tem certeza que deseja excluir as tarefas ?')

    if(event.target.classList.contains('delete-all')) {
        if(isConfirm) {
            await cancelTasksAll()
            await tasksDay()
            inProgress.innerHTML = ''
        }
    } else if (event.target.classList.contains('delete-completed')) {
        if(isConfirm) {
            await tasksCancel()
            await tasksDay()
        }
    }
    
} )
