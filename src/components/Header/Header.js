import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import logo from '../../image/logo.png';
import day from '../../image/sun.png'
import moon from '../../image/moon.png'

import '../../App.css'
import {moviesAction} from "../../redux";
import {SearchMovie} from "../SearchMovie/SearchMovie";

const Header = () => {
    const {show} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    return (

        <div className={'header'}>
            <p>Movie List</p>
            <SearchMovie/>

            <div>
                <button onClick={() => dispatch(moviesAction.show(!show))}>Filter genres</button>
            </div>
            {/*<button onClick={() => dispatch(movieActions.show(!show))}>Genres</button>*/}
            <div className={'icon'}>
                <img src={logo} className={'icon-logo'} alt={logo}/>
            </div>
            <div>
                <div className={'theme'}>
                    <img src={day} className={'light'} alt={day}/>
                </div>
                <div>
                    <img src={moon} className={'night'} alt={moon}/>
                </div>
            </div>

        </div>


    );
};

export {
    Header
};