import { showTask } from "../form/show-task.js"
import { fetchTask } from "../services/fetch-task.js"

export async function tasksDay() {
    const task = await fetchTask()
    
    showTask({ taskIncluded: task })
}