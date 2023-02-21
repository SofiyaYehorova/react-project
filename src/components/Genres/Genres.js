import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {genresAction} from "../../redux";
import {Genre} from "../Genre/Genre";

const Genres = () => {
    const [genres, setGenres] = useState([]);
    // const {genre} = useSelector(state => state.genres);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresAction.getAllGenres())
        .then(({payload}) => setGenres(payload.genres))
    }, [dispatch])

    return (
        <div>
            {
                genres.map(genre=><Genre key={genre.id} genre={genre}/>)
            }
        </div>
    );
};

export {
    Genres
};