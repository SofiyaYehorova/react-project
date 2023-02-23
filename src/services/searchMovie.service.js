import {apiService} from "./api.service";
import {urls} from "../configs";

const searchMovieService = {
    searchMovie: (movie) => apiService.get(` ${urls.searchMovie}?query=${movie}`),

    // getBySearchMovie: (query) =>apiService.get(urls.searchMovie, {params: {query}}),
    // searchMovieV2="https://api.themoviedb.org/3/search/movie?api_key=59c369ca7be9658bba6519e92a223e22&query"
}

export {
    searchMovieService
}
