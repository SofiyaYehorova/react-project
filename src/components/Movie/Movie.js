import React from 'react';
import {image} from "../../configs";

import css from './Movie.module.css'

const Movie = ({movie}) => {
    const {id, original_title, poster_path} = movie;

    return (
        <div className={css.Movie}>
            <div>
                <p>{original_title}</p>
                <img src={image + poster_path} alt={original_title}/>
            </div>



        </div>
    );

}
export {
    Movie
};