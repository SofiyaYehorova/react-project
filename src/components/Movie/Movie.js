import React from 'react';
import {useNavigate} from "react-router-dom";

import {image} from "../../configs";

import css from './Movie.module.css'

const Movie = ({movie}) => {
    const {original_title, poster_path, vote_average} = movie;
    const navigate = useNavigate();

    return (
        <div className={css.Movie} onClick={() =>navigate(`movie/details`, {state:movie})}>

            <p>{original_title}</p>
            <img src={image + poster_path} alt={original_title}/>

            <div>vote_average:{vote_average}</div>

        </div>

    );

}
export {
    Movie
};