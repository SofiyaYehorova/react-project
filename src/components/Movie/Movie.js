import React from 'react';
import {image} from "../../configs";
import {Link} from "react-router-dom";

import css from './Movie.module.css'

const Movie = ({movie}) => {
    const {original_title, poster_path, vote_average} = movie;

    return (
        <Link to={`/movie/${movie.id}`}>
            <div className={css.Movie}>

                <p>{original_title}</p>
                <img src={image + poster_path} alt={original_title}/>

                <div>vote_average:{vote_average}</div>



            </div>
        </Link>

    );

}
export {
    Movie
};