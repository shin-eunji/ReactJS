import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 12000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

const request = async (method, url, data) => {

    const config = {
        method,
        url,
        ...data
    }
    
    try {
        const result = await instance(config);
        console.log("result", result);
        return result.data;
    } catch {
        console.log("err");
    }
    

    
    
    
};


const Fetch = {
    fetchJsonGet: (url, data) => request('get', url, {params: data}),
    fetchJsonPost: (url, data) => request('post', url, {data: data}),
    fetchJsonPut: (url, data) => request('put', url, {data: data}),
    fetchJsonDelete: (url) => request('delete', url),
}

export default Fetch