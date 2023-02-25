import React, {createContext, useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";

import {Genres, Header, MovieDetail, MoviesList} from "./components";

import css from './index.css'

const ThemeContext = createContext(null)
const App = () => {
    const {show} = useSelector(state => state.movies);
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div id={theme}>

                <Header toggleTheme={toggleTheme}/>
                <hr/>
                {
                    show ? <Genres/> : null
                }
                <Routes>
                    <Route path={'/'} element={<MoviesList/>}/>
                    <Route path={'movie/:id'} element={<MovieDetail/>}/>
                </Routes>
            </div>
        </ThemeContext.Provider>
    );
};

export {
    App,
    ThemeContext
};