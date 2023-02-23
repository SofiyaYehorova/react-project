import {apiService} from "./api.service";
import {urls} from "../configs";

const genresService = {
    // getAllGenres: () => apiService.get(urls.genres),
    // getGenresById: (id, page) => apiService.get(urls.movies, {params: {with_genres: id, page}}),

    getGenres: () => apiService.get(urls.genres),
    searchByGenre: (genre) => apiService.get(`${urls.movies}?&with_genres=${genre}`)
}

export {
    genresService
}