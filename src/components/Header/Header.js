import React from 'react';

import css from './Header.module.css'
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    const {page, movies, filterParams} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    useForm()

    return (
        <div className={css.Header}>
            <form onSubmit={}>
                <input type="text" placeholder="Search movie..."/>
                <button>Search</button>
            </form>

        </div>
    );
};

export {
    Header
};