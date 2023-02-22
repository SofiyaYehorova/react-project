import {apiService} from "./api.service";
import {urls} from "../configs";

const searchMovie={
    getSearchMovie:(query)=>apiService.get(urls.searchMovie, {params:{query}})
}

export {
    searchMovie
}