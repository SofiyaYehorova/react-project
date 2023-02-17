import {apiService} from "./api.service";
import {urls} from "../configs";

const moviesService = {
    getAll: () => apiService.get(urls.movies)
}

export {
    moviesService
}