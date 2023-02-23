import React from 'react';
import {SearchMovie} from "../SearchMovie/SearchMovie";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import icon from '../../image/user-icon.png';
import '../../index.css'
import {faLightbulb} from "@fortawesome/free-solid-svg-icons";


const Header = () => {

    return (
        <div>
            <div className={'wrapper'}>
                hello header
                <div className={'icon-user'}>
                    <img src={icon}/>
                    {/*<img scr="https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png" alt='user-icon'/>*/}
                    {/*<FontAwesomeIcon  icon="fa-solid fa-user" />*/}
                    {/*<FontAwesomeIcon className={'icon'} icon={"fa-solid fa-user"}></FontAwesomeIcon>*/}
                    {/*<FontAwesomeIcon className={'icon'} icon={faLightbulb}></FontAwesomeIcon>*/}
                </div>
            </div>

            <hr/>
            <SearchMovie/>
        </div>
    );
};

export {
    Header
};