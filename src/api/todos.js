import axiosClient from '../config/axios'

export const todosService = {
  getTodos
}

async function getTodos() {
    return await axiosClient.get('/todos').then(function (response) {return response.data})
}