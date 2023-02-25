import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

import {moviesAction} from "../../redux";


const SearchMovie = () => {

    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (query) {
            dispatch(moviesAction.searchMovie(query))
        }
    }, [dispatch, query])

    const clear = (e) => {
        e.preventDefault()
        if (query) {
            dispatch(moviesAction.searchMovie(query))
        }
        setQuery('');
    }

    return (
        <div>
            <form>
                <input type="text"
                       placeholder={"Search movie..."}
                       onChange={(e) => setQuery(e.target.value)}
                       value={query}
                />
                <button onClick={clear}>Search</button>
            </form>
        </div>
    );
};

export {
    SearchMovie
};