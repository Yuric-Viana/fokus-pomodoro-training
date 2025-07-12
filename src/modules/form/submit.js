import { tasksDay } from "../tasks/load.js"
import { newTask } from "../services/new-task.js"

export const form = document.querySelector('form')
export const textTask = document.getElementById('task')
const itemPersonalized = document.querySelector('.task-finished')

form.onsubmit = async (event) => {
    event.preventDefault()

    let taskValue = textTask.value
    textTask.value = ''

    const id = String(new Date().getTime())

    await newTask({ id, task: taskValue, finished: itemPersonalized })

    await tasksDay()
}