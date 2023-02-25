import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {moviesAction} from "../../redux";
import {SearchMovie} from "../SearchMovie/SearchMovie";

import logo from '../../image/logo.png';
import day from '../../image/sun.png'

import '../../App.css'

const Header = ({toggleTheme}) => {
    const {show} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    return (

        <div className={'header'}>
            <div className={'header-list'}>Movie List</div>
            <SearchMovie/>

            <div>
                <button onClick={() => dispatch(moviesAction.show(!show))}>Filter genres</button>
            </div>

            <div className={'icon'}>
                <img src={logo} className={'icon-logo'} alt={logo}/>
            </div>

            <div>
                <div className={'theme'}>
                    <img src={day} className={'light'}  onClick={toggleTheme} alt={day}/>
                </div>
            </div>

        </div>


    );
};

export {
    Header
};