import Fetchjson from '../lib/Fetch';

const API = {
    getTodos: () => Fetchjson.get('/todo'),
    postTodos: (data) => Fetchjson.post('/todo', data),
    deleteTodos: (id) => Fetchjson.delete('/todo/:id')
}

export default API;