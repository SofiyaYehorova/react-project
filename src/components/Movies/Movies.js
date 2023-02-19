import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {moviesAction} from "../../redux";
import {Movie} from "../Movie/Movie";

import css from './Movies.module.css'


const Movies = () => {

    const {movies, currentPage, total_page, loading} = useSelector(state => state.movies)
    const dispatch = useDispatch();
    // let [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(moviesAction.getAllMovies({currentPage}))
    }, [dispatch]);

    return (
        <div>
            <div className={css.Movies}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            <div>
                <button>prev</button>
                <button>next</button>
            </div>
        </div>

    );
};

export {
    Movies
};