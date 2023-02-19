import axios from "axios";

import {baseURL, token} from "../configs";

let apiService = axios.create({baseURL});
    // , headers:{
    // Authorization:`Bearer ${token}`
    // }});


apiService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export {
    apiService
}