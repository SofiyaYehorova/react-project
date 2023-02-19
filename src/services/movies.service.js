import {apiService} from "./api.service";
import {baseURL, urls} from "../configs";

const moviesService = {
    getAll: (page) => apiService.get(`${baseURL}/${urls.page}${page}`),
    getById: (id) => apiService.get(`${urls.movie}/{id}`)
}

export {
    moviesService
}