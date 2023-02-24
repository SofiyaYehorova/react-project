import React, {useEffect} from 'react';
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {moviesAction} from "../../redux";
import {image} from "../../configs";

const MovieDetail = () => {

    const {id} = useParams();
    const navigate = useNavigate();
    const {movie, genres} = useSelector(state => state.movies);
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
        <div className={'movie-container'}>
            {/*<FontAwesomeIcon className={'back-icon'} icon={faArrowLeft} onClick={() => navigate(-1)}/>*/}

            {movie ?
                <div className={'movie-wrapper'}>

                    <div>
                        <img src={image + movie?.poster_path} alt={movie?.title}/>
                    </div>
                    <div className={'movie-container_content'}>
                        <h2>{movie?.original_title}</h2>

                        <div>
                            <span>Genre: </span>
                            {
                                movie?.genres?.map(genre => <span key={genre.id}> {findGenre(genre.id)}</span>)
                            }
                        </div>
                        <div><p>Released:<span>{movie?.release_date}</span></p></div>
                        <div><p>Rating: <span>{movie?.vote_average}</span></p></div>
                        <div><p>Runtime: <span>{movie?.runtime}</span></p></div>
                        <div><p>Overview: <span>{movie?.overview}</span></p></div>
                    </div>
                </div>
                :
                <h2 className={"no_info"}>No info</h2>
            }

            <button onClick={() => navigate('/movies/?page=$(page)')}>Back</button>
        </div>
    );
}


//     const location = useLocation();
//     console.log(location);
//     const {state} = location;
//
//     const {movies} = useSelector(state => state.movies);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//
//     const {original_title, original_language, overview, release_date, vote_average, vote_count, poster_path} = state;
//
//
//     return (
//         <div>
//             <div>
//                 <img src={image + poster_path} alt={original_title}/>
//                 <p>Language:{original_language}</p>
//                 <p>Overview:{overview}</p>
//                 <div>Release data:{release_date}</div>
//                 <p>Votes:{vote_count}</p>
//                 <p>Vote Average:{vote_average}</p>
//             </div>
//             <button onClick={() => navigate('/movies/?page=$(page)')}>
//                 Back
//             </button>
//         </div>
//     );
// }


export {
    MovieDetail
};