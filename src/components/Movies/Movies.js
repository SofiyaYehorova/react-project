import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {moviesAction} from "../../redux";
import {Movie} from "../Movie/Movie";
import {Pagination} from "../Pagination/Pagination";

import css from './Movies.module.css'


const Movies = () => {
    const [movies, setMovies] = useState([]);

    const {loading, page, filterParams} = useSelector(state => state.movies)
    // const {genre} = useSelector(state => state.genres);

    const dispatch = useDispatch();

    const [query, setQuery] = useSearchParams();
    const queryPage = query.get('page');


    useEffect(() => {
        moviesAction.setPage(queryPage)
        dispatch(moviesAction.getAllMovies({page: queryPage}))
            .then(({payload}) => setMovies(payload.results))
    }, [page, queryPage]);

    // useEffect(() => {
    //     if (genre) {
    //         setMovies(movies.filter(movie => movie.genre_ids.includes(genre.id)))
    //     } else {
    //         dispatch(moviesAction.getAllMovies({page: queryPage}))
    //             .then(({payload}) => setMovies(payload.results))
    //     }
    // }, [genre])

    useEffect(() => {
        setMovies(movies.filter(movie => movie.title.includes(filterParams)))
        if (filterParams === '') {
            dispatch(moviesAction.getAllMovies({page: queryPage}))
                .then(({payload}) => setMovies(payload.results))
        }
    }, [filterParams])

    return (
        <div>
            {loading && <h1>Loading</h1>}
            <div className={css.Movies}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            {filterParams !== '' &&
                <div>
                    <button onClick={() => dispatch(moviesAction.setFilterParams(''))}>
                        Click me!
                    </button>
                </div>
            }
            <Pagination queryPage={queryPage}/>
        </div>

    );
};

export {
    Movies
};