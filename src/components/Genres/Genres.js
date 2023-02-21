import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genresAction} from "../../redux";

const Genres = () => {
    // const [genres, setGenres] = useState([]);
    const {genre} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresAction.getAllGenres())
        // .then(({payload}) => setGenres(payload.genres))
    }, [dispatch])

    return (
        <div>

        </div>
    );
};

export {
    Genres
};