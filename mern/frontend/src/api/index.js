import Fetch from '../lib/Fetch';

const API = {
    getTodos: () => Fetch.jsonGet('/todo'),
    postTodos: (data) => Fetch.jsonPost('/todo', data),
    deleteTodos: (id) => Fetch.jsonDelete('/todo/:id')
}

export default API;