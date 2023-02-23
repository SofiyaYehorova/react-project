import React from 'react';
import {SearchMovie} from "../SearchMovie/SearchMovie";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import icon from '../../image/user-icon.png';
import logo from '../../image/logo.png';
// import 'icon-logo' from '../../'
import '../../index.css'
import {faLightbulb} from "@fortawesome/free-solid-svg-icons";


const Header = () => {

    return (

            <div className={'wrapper'}>
                <p>hello header</p>
                <SearchMovie/>
                <div className={'icon'}>
                    <img src={logo} className={'icon-logo'}/>
                </div>
            </div>


    );
};

export {
    Header
};