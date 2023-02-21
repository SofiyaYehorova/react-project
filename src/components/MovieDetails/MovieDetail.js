import React, {useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {moviesAction} from "../../redux";
import {image} from "../../configs";

const MovieDetail = ({movie}) => {
    const location = useLocation();
    console.log(location);
    const {state} = location;

    // const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {original_title, original_language, overview, release_date, vote_average, vote_count, poster_path} = state;


    return (
        <div>
            <div>
                <img src={image + poster_path} alt={original_title}/>
                <p>Language:{original_language}</p>
                <p>Overview:{overview}</p>
                <div>Release data:{release_date}</div>
                <p>Votes:{vote_count}</p>
                <p>Vote Average:{vote_average}</p>
            </div>
            <button onClick={() => navigate('/movies/?page=$(page)')}>
                Back
            </button>
        </div>
    );
}


export {
    MovieDetail
};