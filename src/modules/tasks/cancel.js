import { tasksCancel, cancelTasksAll } from "../services/tasks-cancel.js"
import { listTasks } from "../form/show-task.js"
import { tasksDay } from "./load.js"

const deleteTasks = document.querySelector('.more-list')

deleteTasks.addEventListener('click', async (event) => {
    if(event.target.classList.contains('delete-all')) {
        const isConfirm = confirm('Tem certeza que deseja excluir as tarefas ?')
        
        if(isConfirm) {
            await cancelTasksAll()
            await tasksDay()
        }
    }
    
} )
