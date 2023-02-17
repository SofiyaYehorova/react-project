import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {moviesAction} from "../../redux";
import {Movie} from "../Movie/Movie";

const Movies = () => {

    const {movies} = useSelector(state => state.movies)
    console.log(movies);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(moviesAction.getAll())
    }, [dispatch]);

    return (
        <div>
            {movies.map(movie=><Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {
    Movies
};