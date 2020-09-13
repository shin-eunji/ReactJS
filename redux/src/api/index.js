
import Fetch from "../lib/Fetch";

const API = {
    getTodos: () => Fetch.fetchJsonGet('/todo'),
    getTodoByid: (id) =>Fetch.fetchJsonGet(`/todo/${id}`),
    addTodo: (data) => Fetch.fetchJsonPost(`/todo`, data),
    updateTodo: (id, data) => Fetch.fetchJsonPut(`/todo/${id}`, data),
    deleteTodo: (id) => Fetch.fetchJsonPut(`/todo/${id}`),
}

export default API