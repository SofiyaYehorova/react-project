import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";

import {moviesAction as movieActions} from "../../redux";


// searchMovieV2 = "https://api.themoviedb.org/3/search/movie?api_key=59c369ca7be9658bba6519e92a223e22&query"
const SearchMovie = () => {

    // const [movies, setMovies] = useState([]);
    //
    // const [query, setQuery] = useState('');
    //
    // const searchMovie = async (e) => {
    //     e.preventDefault()
    //     console.log('searching');
    //     try{
    //         const url = `https://api.themoviedb.org/3/search/movie?api_key=59c369ca7be9658bba6519e92a223e22&query=${query}`
    //         const res = await fetch(url)
    //         const data = await res.json()
    //         console.log(data);
    //         setMovies(data.results)
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }
    //
    // const changeHandler=(e)=>{
    //     setQuery(e.target.value)
    // }

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


            {/*<form onSubmit={searchMovie}>*/}
            {/*    <input type="text"*/}
            {/*           placeholder={"Search movie..."}*/}
            {/*           onChange={(e) => setQuery(e.target.value)}*/}
            {/*           value={query}*/}
            {/*    />*/}
            {/*    <button onClick={changeHandler}>Search</button>*/}
            {/*</form>*/}
        </div>
    );
};

export {
    SearchMovie
};