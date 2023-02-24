import React from 'react';
import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";

import {Genres, Header, MovieDetail, MoviesList} from "./components";

import css from './index.css'


const App = () => {
    const {show} = useSelector(state => state.movies);

    return (
        <div>
            <Header/>
            <hr/>
            {
                show ? <Genres/> : null
            }
            <Routes>
                <Route path={'/'} element={<MoviesList/>}/>
                <Route path={'movie/:id'} element={<MovieDetail/>}/>
            </Routes>
        </div>
    );
};

export {
    App
};