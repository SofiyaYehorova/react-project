import React from 'react';
import {image} from "../../configs";

import css from './Movie.module.css'

const Movie = ({movie}) => {
    const {id, original_title, poster_path} = movie;

    return (
        <div>
            <div className={css.Movie}>
                <div>id:{id}</div>
                <h4>{original_title}</h4>
                <div> <img src={image + poster_path} alt="picture"/></div>
            </div>



        </div>
    );

}
export {
    Movie
};