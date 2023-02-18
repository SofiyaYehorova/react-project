import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {moviesAction} from "../../redux";
import {Movie} from "../Movie/Movie";

import css from './Movies.module.css'


const Movies = () => {

    const {movies, page} = useSelector(state => state.movies)
    console.log(movies);
    const dispatch = useDispatch();
    let [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(moviesAction.getAll({page: query.get('page')}))
    }, [dispatch, query]);

    return (
        <div>
            <div>
                <button onClick={()=>setQuery(query=>({page:+query.get('page')-1}))}>prev</button>
                <button onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>next</button>
            </div>
            <div className={css.Movies}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>
        </div>

    );
};

export {
    Movies
};