import axios from 'axios';

const API = {
    getUsers: () => axios.get("http://jsonplaceholder.typicode.com/users").then
}

export default API;