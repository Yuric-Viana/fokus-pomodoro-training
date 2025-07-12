import { apiConfig } from "./api-config.js"

export async function newTask({ id, task }) {
    try {
        await fetch(apiConfig.baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id, task })
        })

    } catch (error) {
        console.log(error);
        alert('Não foi possível criar essa nova tarefa. Tente novamente mais tarde.')
    }
}