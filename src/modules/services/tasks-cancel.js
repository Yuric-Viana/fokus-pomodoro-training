import { apiConfig } from "./api-config.js";

export async function cancelTasksAll() {
    try {
        const response = await fetch(apiConfig.baseURL)
        const tasks = await response.json()

        await Promise.all(
            tasks.map(task =>
                fetch(`${apiConfig.baseURL}/${task.id}`, {
                    method: 'DELETE'
                })
            )
        )

        alert('Tarefas excluidas com sucesso.')

    } catch (error) {
        console.log(error);
        alert('Não foi possível excluir as tarefas nesse momento.')
    }
}

export async function tasksCancel() {
    try {
        const response = await fetch(apiConfig.baseURL)
        const tasks = await response.json()

        const finishedTasks = tasks.filter(task => task.finished === 'task-finished')

        await Promise.all(
            finishedTasks.map(task =>
                fetch(`${apiConfig.baseURL}/${task.id}`, {
                    method: 'DELETE'
                })
            )
        )

        alert('Tarefas excluidas com sucesso.')

    } catch (error) {
        console.log(error);
        alert('Não foi possível excluir as tarefas nesse momento.')
    }
}
