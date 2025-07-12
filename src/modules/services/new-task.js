import { apiConfig } from "./api-config.js"

export async function newTask({ id, task, finished }) {
    try {
        await fetch(apiConfig.baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, task, finished })
        })

    } catch (error) {
        console.log(error);
        alert('Não foi possível criar essa nova tarefa. Tente novamente mais tarde.')
    }
}

export async function updateTaskFinished({ id, finishedClass }) {
    try {
        await fetch(`${apiConfig.baseURL}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ finished: finishedClass })
        })
    } catch (error) {
        console.error('Erro ao atualizar tarefa:', error)
    }
}