import * as axios from "axios";


const API = {
    getUsers: axios.get('http://jsonplaceholder.typicode.com/users')
}

export default API