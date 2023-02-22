import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {image} from "../../configs";

const MovieCard = ({movie}) => {
    const {original_title, poster_path, vote_average} = movie;

    const {genres} = useSelector(state => state.movies);
    const findGenre = (id) => {
        const genre = genres?.genres?.find(value => value.id === id)
        return genre?.name;
    }

    return (
        <Link to={`/movie/${movie.id}`}>
            <div>
                <img src={image + poster_path} alt={original_title}/>
                <div>vote_average:{vote_average}</div>
                <h4>
                    {/*{*/}
                    {/*    movie?genre_ids.map(value=><div> key={value}>{findGenre(value)}</div>)*/}
                    {/*}*/}
                    {
                        movie?.genre_ids.map(value => <div key={value}> {findGenre(value)}</div>)
                    }
                </h4>
            </div>
        </Link>

    );
};


export {
    MovieCard
};