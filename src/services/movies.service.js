import {apiService} from "./api.service";
import {urls} from "../configs";

const moviesService = {
    getAll: (page) => apiService.get(`${urls.movies}`, {params: {page}}),
    // getAll: (page) => apiService.get(`${urls.movies}?page=${page}`),

    getMovieById: (id) => apiService.get(`${urls.movie}/${id}`),
    // getMovie: (id) => axiosService.get(`${urls.movie}/${id}`)

    // getMovieSearch:(query)=>apiService.get(`${urls.searchMovie}`, {params:{query}}),
    searchMovie: (movie) => apiService.get(`${urls.search}?query=${movie}`)
}

export {
    moviesService
}