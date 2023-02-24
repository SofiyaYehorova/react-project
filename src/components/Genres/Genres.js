import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {moviesAction} from "../../redux";


const Genres = () => {
    const {genres, currentGenre} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesAction.getAllGenres())
    }, [])

    const handleSubmit = (id) => {
        if (currentGenre?.includes(id)) {
            dispatch(moviesAction.deleteGenre(id))
        } else dispatch(moviesAction.selectGenre(id))
    }

    return (
        <div>
            <div className={"genre_select"}>
                <div>
                    <button onClick={() => dispatch(moviesAction.show(false))}>Filter genres</button>
                </div>
                {
                    genres?.genres?.map(genre => <div key={genre.id}>
                        <label className={"checkbox-el"}>
                            <input
                                type="checkbox"
                                value={genre.name}
                                name={genre.name}
                                onClick={() => handleSubmit(genre.id)}
                            />
                            {genre.name}
                        </label>
                    </div>)
                }
            </div>
        </div>
    );
};

export {
    Genres
};