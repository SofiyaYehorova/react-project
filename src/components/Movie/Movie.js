import React from 'react';
import {image} from "../../configs";

import css from './Movie.module.css'

const Movie = ({movie}) => {
    const {original_title, poster_path, vote_average} = movie;

    return (
        <div className={css.Movie}>

            <p>{original_title}</p>
            <img src={image + poster_path} alt={original_title}/>

            <div>vote_average:{vote_average}</div>



        </div>
    );

}
export {
    Movie
};