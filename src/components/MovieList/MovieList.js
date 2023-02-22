import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {moviesAction} from "../../redux";
import {MovieCard} from "../MovieCard/MovieCard";
import {Pagination} from "../Pagination/Pagination";

const MovieList = () => {

    const {movies, loading, currentGenre, page} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentGenre) {
            dispatch(moviesAction.getAllMovies(page))
        } else {
            dispatch(moviesAction.searchMovieGenres({currentGenre}))
        }
    }, [page, currentGenre])

    return (
        <div>
            <div>
                {movies?.results?.map(movie => <MovieCard key={movie.id} movie={movie}/>)}

            </div>
            <Pagination/>
        </div>
    )
};

export {
    MovieList
};