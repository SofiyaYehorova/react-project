import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

import {moviesAction as movieActions} from "../../redux";


// searchMovieV2 = "https://api.themoviedb.org/3/search/movie?api_key=59c369ca7be9658bba6519e92a223e22&query"
const SearchMovie = () => {

    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        if (query) {
            dispatch(movieActions.searchMovie(query))
        }
    }, [query])

    const clear = (e) => {
        e.preventDefault()
        if (query) {
            dispatch(movieActions.searchMovie(query))
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