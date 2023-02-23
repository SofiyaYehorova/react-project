import React from 'react';
import {SearchMovie} from "../SearchMovie/SearchMovie";

import logo from '../../image/logo.png';
import day from '../../image/sun.png'
import moon from '../../image/moon.png'

import '../../index.css'


const Header = () => {

    return (

        <div className={'wrapper'}>
            <p>Movie List</p>
            <SearchMovie/>
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