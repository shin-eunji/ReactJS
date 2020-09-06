import axios from "axios";

const API = {
    getTodos: () => axios.get("http://jsonplaceholder.typicode.com/todos"),
    getUser: (id) => axios.get(`http://localhost:8080/user/${id}`)
}

export default API