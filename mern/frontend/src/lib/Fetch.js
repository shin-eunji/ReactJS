import axios from 'axios';
import {Navigate} from './History';


const FetchConsts = {
    GET: 'get',
    POST: 'post',
    PUT: 'put',
    DELETE: 'delete',
}

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 12000,
    headers: {
        "Context-Type": "application/json",
    }

})

const request = async (method, url, data) => {
    try {
        let config = {
            method,
            url,
            ...data
        }
        
        console.log("config", config);

        const result = await axiosInstance(config)

        return result.data;

    } catch (e) {
        if(e.response) {
            if(e.response.status === 404) {
                console.log("로그인이 만료되었습니다. 로그인으로 이동합니다.");
                Navigate('/sign/signin')
            }
        }
    }
}

const Fetch = {
    fetchJsonGet: (url, data) => {
        return request(FetchConsts.GET, url, {params: data})
    },

    fetchJsonPost: (url, data) => {
        return request(FetchConsts.POST, url, data)
    },

    fetchJsonUpdate: (url, data) => {
        return request(FetchConsts.PUT, url, data )
    },

    fetchJsonDelete: (url) => {
        return request(FetchConsts.DELETE, url)
    },
}


export default Fetch;












