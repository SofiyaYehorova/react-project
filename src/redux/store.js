import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slice/moviesSlice";

const rootReducer = combineReducers({
    movies: movieReducer
});

const setUpStore = () => configureStore(    {
    reducer: rootReducer
}
);

export {setUpStore}