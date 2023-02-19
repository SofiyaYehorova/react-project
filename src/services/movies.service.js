import {apiService} from "./api.service";
import {urls} from "../configs";

const moviesService = {
    getAll: (page) => apiService.get(`${urls.movies}?page=${page}`),
    getById: (id) => apiService.get(`${urls.movie}/{id}`)
}

export {
    moviesService
}