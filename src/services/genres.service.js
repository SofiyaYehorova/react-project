import {apiService} from "./api.service";
import {urls} from "../configs";

const genresService = {
    getAllGenres: () => apiService.get(urls.genres),
    getGenresById: (id, page) => apiService.get(urls.movies, {params: {with_genres: id, page}})
}

export {
    genresService
}