import {apiService} from "./api.service";
import {urls} from "../configs";

const searchMovieService = {
    searchMovie: (movie) => apiService.get(` ${urls.searchMovie}?query=${movie}`)

}

export {
    searchMovieService
}