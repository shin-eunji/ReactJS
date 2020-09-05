import axios from 'axios'

export const API = {
    getUsers: () => axios.get("http://jsonplaceholder.typicode.com/users")
 }