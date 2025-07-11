import { showTask } from "./show-task.js"

export const form = document.querySelector('form')
export const listTasks = document.querySelector('.list-tasks')
export const textTask = document.getElementById('task')

form.onsubmit = (event) => {
    event.preventDefault()

    let taskValue = textTask.value
    textTask.value = ''

    const taskCreate = showTask({ task: taskValue })    

    listTasks.append(taskCreate.li)
}