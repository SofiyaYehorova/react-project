import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {genresAction, moviesAction} from "../../redux";
import {Movie} from "../Movie/Movie";
import {Pagination} from "../Pagination/Pagination";

import css from './Movies.module.css'


const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const {loading, page} = useSelector(state => state.movies)
    const {genre, currentGenre} = useSelector(state => state.genres);
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams();
    const queryPage = query.get('page');

    // useEffect(() => {
    //     if (!currentGenre) {
    //         dispatch(genresAction.searchByGenre(page))
    //     } else {
    //         dispatch(genresAction.searchByGenre({currentGenre}))
    //     }
    // }, [page,currentGenre]);


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


    return (
        <div>
            {loading && <h1>Loading</h1>}
            <div className={css.Movies}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
            {/*        {filterParams !== '' &&}<div>*/}
            {/*        <button onClick={() => dispatch(moviesAction.setFilterParams(''))}>*/}
            {/*                Click me!*/}
            {/*</button>*/}
            {/*               </div>*/}
            {/*}*/}
            <Pagination queryPage={queryPage}/>
        </div>

    );

    // const {movies, page, total_page} = useSelector(state => state.movies);
    // const dispatch = useDispatch();
    //
    // const [totalPage, setTotalPage] = useState(1);
    //
    // useEffect(() => {
    //     dispatch(moviesAction.getAllMovies({page}))
    // }, [dispatch, page])
    //
    // const pageBack = () => {
    //     if (page > 1) {
    //         setTotalPage(page - 1);
    //     }
    // }
    //
    // const pageForward = () => {
    //     if (page < 500) {
    //         setTotalPage(page + 1);
    //     }
    // }

    // return (
    //     <div>
    //         {/*{movies&&*/}
    //         {/*    <div>*/}
    //                 {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
    //             {/*</div>}*/}
    //
    //     </div>
    // )
};

export {
    MoviesList
};