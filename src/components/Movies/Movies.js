import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {moviesAction} from "../../redux";
import {Movie} from "../Movie/Movie";

import css from './Movies.module.css'


const Movies = () => {

    const {movies, loading, page} = useSelector(state => state.movies)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesAction.getAllMovies(page))
    }, [dispatch]);

    return (
        <div>
            <div className={css.Movies}>
                {
                    loading ? <h1>Loading</h1>
                        :
                        movies?.result.map(movie => <Movie key={movie.id} movie={movie}/>)}
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