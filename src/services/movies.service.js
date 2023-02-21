import {apiService} from "./api.service";
import {urls} from "../configs";

const moviesService = {
    getAll: (page) => apiService.get(`${urls.page}${page}`),
}

export {
    moviesService
}