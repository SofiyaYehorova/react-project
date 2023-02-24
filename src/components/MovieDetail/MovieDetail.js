import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {moviesAction} from "../../redux";
import {image} from "../../configs";

import css from '../../App.css'

const MovieDetail = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const {movies, movie, genres} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    dispatch(moviesAction.show(false))

    useEffect(() => {
        if (id) dispatch(moviesAction.getMovieById(id))
    }, [id])

    const findGenre = (id) => {
        const genre = genres?.genres?.find(value => value.id === id)
        return genre?.name;
    }

    return (
        <div className={'movie_detail-container'}>
            {/*<FontAwesomeIcon className={'back-icon'} icon={faArrowLeft} onClick={() => navigate(-1)}/>*/}
            <h2>{movie?.original_title}</h2>
            {movie ?
                <div className={'movie_detail-box'}>


                        <img src={image + movie?.poster_path} className={'image_detail'} alt={movie?.title}/>

                    <div className={'movie_content_box'}>
                        <div>
                            <span>Genre: </span>
                            {
                                movie?.genres?.map(genre => <span key={genre.id}> {findGenre(genre.id)}</span>)
                            }
                        </div>
                        <div>Released:{movie?.release_date}</div>
                        <div>Rating: {movie?.vote_average}</div>
                        <div>Runtime: {movie?.runtime} min</div><br/>

                        <div>Overview:{movie?.overview}</div>
                    </div>
                </div>
                :
                <h2 className={"no_info"}>No info</h2>
            }
            <button className={'back_to_list'} onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}

export {
    MovieDetail
};