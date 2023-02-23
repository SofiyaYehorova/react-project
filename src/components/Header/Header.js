import React from 'react';


import css from './Header.module.css'

import {SearchMovie} from "../SearchMovie/SearchMovie";

const Header = () => {

    return (
        <div
            // className={css.Header}
        >
            hello header
            <hr/>
          <SearchMovie/>
        </div>
    );
};

export {
    Header
};