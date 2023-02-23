import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";


import {MoviesPage} from "./pages";
import {Genres, Header, MovieDetail, MovieList, MoviesList} from "./components";

import css from './index.css'

const App = () => {
    return (
        <div>
            <Header/>
            <hr/>
            <Genres/>
            <Routes>
                <Route path={'/'} element={<MoviesList/>}/>
                <Route path={'movie/:id'} element={<MovieDetail/>} />
            </Routes>
        </div>
    );
};

export {
    App
};