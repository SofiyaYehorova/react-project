import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {MovieCard} from "../MovieCard/MovieCard";
import {moviesAction} from "../../redux";
import {Pagination} from "../Pagination/Pagination";

import css from '../../App.css'


const MoviesList = () => {
    const [, setMovies] = useState([]);
    const {movies, loading, currentGenre, page} = useSelector(state => state.movies);
    const [query] = useSearchParams();
    const queryPage = query.get('page');
    const dispatch = useDispatch();


    useEffect(() => {
        moviesAction.setPage(queryPage)
        dispatch(moviesAction.getAllMovies({page: queryPage}))
            .then(({payload}) => setMovies(payload.results))
    }, [page, queryPage, dispatch]);

    useEffect(() => {
        if (!currentGenre) {
            dispatch(moviesAction.getAllMovies(page))
        } else {
            dispatch(moviesAction.searchByGenre({currentGenre}))
        }
    }, [page, currentGenre, dispatch]);

    return (
        <div>
            <div className={'containerMovies'}>
                {loading ?
                    <div className={'loading'}><h3>Loading.......</h3>
                    </div>
                    :
                    movies?.results?.map(movie => <MovieCard key={movie.id} movie={movie}/>)
                }
            </div>
            <Pagination/>
        </div>
    );
};
export {
    MoviesList
};