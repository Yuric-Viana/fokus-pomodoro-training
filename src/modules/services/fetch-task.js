import { apiConfig } from "./api-config.js"

export async function fetchTask() {
    try {
        const response = await fetch(`${apiConfig.baseURL}/tasks`)

        const data = await response.json()                

        return data

    } catch (error) {
        console.log(error);
        alert('Não foi possível exibir suas tarefas criadas.')
    }
}