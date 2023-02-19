import {apiService} from "./api.service";
import {urls} from "../configs";

const moviesService = {
    getAllMovies: (page = 1) => apiService.get(urls.discover + urls.movie + '?page=' + page)
    // getAllMovies: (page = 1) => apiService.get(`${urls}/{discover}/{movie}/'?page='`, page),


    // getMovieById:(id)=>apiService.get(`${urls.movie}/{id}`)
    // getMovieById: (id)=> apiService.get(urls.movie + '/' + id)
}

export {
    moviesService
}