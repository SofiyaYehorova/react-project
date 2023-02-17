import React from 'react';
import {image} from "../../configs";

import css from './Movie.module.css'

const Movie = ({movie}) => {
    const {id, original_title, poster_path} = movie;

    return (
        <div>
            <div className={css.Movie}>
                <div>id:{id}</div>
                <p>{original_title}</p>
                <img src={image + poster_path} alt="picture"/>
            </div>



        </div>
    );

}
export {
    Movie
};