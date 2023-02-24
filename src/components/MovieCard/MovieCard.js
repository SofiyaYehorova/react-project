import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {image} from "../../configs";

import css from '../../App.css'

const MovieCard = ({movie}) => {
    const {original_title, poster_path, vote_average} = movie;

    const {genres} = useSelector(state => state.movies);
    const findGenre = (id) => {
        const genre = genres?.genres?.find(value => value.id === id)
        return genre?.name;
    }

    return (
        <Link to={`/movie/${movie.id}`} className={'movie'}>
            <div className={'movieCard'}>

                <div className={'box_movieCard'}>
                    <div className={'left_part_movieCard'}>
                        <img src={image + poster_path} className={'imageCard'} alt={original_title}/>
                    </div>
                    <div className={'right_part_movieCard'}>
                        <h4>
                            {/*{*/}
                            {/*    movie?genre_ids.map(value=><div> key={value}>{findGenre(value)}</div>)*/}
                            {/*}*/}
                            {
                                movie?.genre_ids.map(value => <div key={value}> {findGenre(value)}</div>)
                            }
                        </h4>
                    </div>
                </div>

                <div className={'rating'}>vote_average:{vote_average}</div>


            </div>
        </Link>

    );
};


export {
    MovieCard
};