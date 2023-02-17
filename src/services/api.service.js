import axios from "axios";

import {baseURL} from "../configs";

let apiService = axios.create({baseURL});


apiService.interceptors.request.use((config) => {
    const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OWMzNjljYTdiZTk2NThiYmE2NTE5ZTkyYTIyM2UyMiIsInN1YiI6IjYzZWU2YzE0ODEzY2I2MDA4ZWM2MzQzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0iqoQvbYk6qcCJ88BkIyrHvVznZK_WKXCrkLF4NSB3I';
    config.headers.Authorization = `Bearer ${access}`
    return config
})

export {
    apiService
}