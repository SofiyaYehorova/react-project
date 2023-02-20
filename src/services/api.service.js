import axios from "axios";

import {baseURL, token_1} from "../configs";

let apiService = axios.create({baseURL});



apiService.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${token_1}`
    return config
})

export {
    apiService
}