import FetchJson from "../lib/Fetch";

const API = {
    getTodos: () => FetchJson.get(`/todos`),
    addTodo: (data) => FetchJson.post(`/todos`, data),
    getTodoById: (id) => FetchJson.get(`/todos/${id}`),
    deleteTodo: (id) => FetchJson.get(`/todos/${id}`),
    updateTodo: (id, data) => FetchJson.port(`/todos/${id}`, data),
}

export default API;