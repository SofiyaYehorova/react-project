import {apiService} from "./api.service";
import {urls} from "../configs";

const genresService={
    getAll:()=>apiService.get(urls.posts)
}

export {
    genresService
}