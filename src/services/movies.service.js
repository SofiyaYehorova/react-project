import {apiService} from "./api.service";
import {urls} from "../configs";

const moviesService = {
    getAll: (page) => apiService.get(`${urls.movies}`, {params: {page}}),
    getMovieById: (id) => apiService.get(`${urls.movie}/${id}`),
    getByMovieSearch:(query)=>apiService.get(`${urls.searchMovie}`, {params:{query}})
}

export {
    moviesService
}