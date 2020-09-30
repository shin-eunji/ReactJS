import axios from 'axios';
import {navigate} from "./History";

const FetchConsts = {
    GET: 'get',
    PORT: 'port',
    PUT: 'update',
    DELETE: 'delete',
}

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 12000,
})

const request = async (method, url, data) => {
    try {
        let config = {
            method,
            url,
            ...data
        }
        const result = await axiosInstance(config)
        console.log("result", result);

        return result.data
    }
    catch (e) {
        if(e.response.status === 404) {
            console.log("로그인이 만료되었습니다.");
            navigate('/')
        }
    }
}

const FetchJson = {
    get: (url, data) => {
        return request(FetchConsts.GET, url, {params: data})
    },
    port: (url, data) => {
        return request(FetchConsts.PORT, url, {data})
    },
    update: (url, data) => {
        return request(FetchConsts.PUT, url, {data})
    },
    delete: (url, data) => {
        return request(FetchConsts.DELETE, url)
    },
}

export default FetchJson;