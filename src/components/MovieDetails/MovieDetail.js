import React, {useEffect} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {moviesAction} from "../../redux";

const MovieDetail = () => {
    const location = useLocation();
    console.log(location);
    const {state} = location;

    const {page, movie} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    // const navigate = useNavigate();

    const {title} = state;

    useEffect(() => {

    }, [])

    return (
        <div>
            <h1>{title}</h1>
        </div>
    );
};


export {
    MovieDetail
};