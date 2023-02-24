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
                <h4>{movie.title}</h4>
                <div className={'box_movieCard'}>
                    <div className={'left_part_movieCard'}>
                        {
                            movie.poster_path ?
                                <img src={image + poster_path} className={'imageCard'} alt={original_title}/> :
                                <img
                                    className={'no-photo'}
                                    src="https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?k=20&m=1357365823&s=612x612&w=0&h=ZH0MQpeUoSHM3G2AWzc8KkGYRg4uP_kuu0Za8GFxdFc="
                                    alt="No picture"
                                />
                        }
                    </div>
                    <div className={'right_part_movieCard'}>
                        <h5>
                            {
                                movie?.genre_ids.map(value => <div key={value}> {findGenre(value)}</div>)
                            }
                        </h5>
                    </div>
                </div>
                <p>{movie.release_date}</p>
                <div className={"genre_container"}>
                    {
                        movie?.genre_ids.map(value => <div key={value}> {findGenre(value)}</div>)
                    }
                </div>
                <div className={'rating'}>vote_average:{vote_average}</div>
                {/*<Rating rating={movie.vote_average}/>*/}
            </div>
        </Link>
    )
};


export {
    MovieCard
};