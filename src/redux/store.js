import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {moviesReducer} from "./slice/moviesSlice";
import {genresReducer} from "./slice/genresSlice";

const rootReducer = combineReducers({
    movies: moviesReducer,
    genres: genresReducer
});

const setUpStore = () => configureStore({
        reducer: rootReducer
    }
);

export {setUpStore}