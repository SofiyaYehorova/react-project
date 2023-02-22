import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import css from './Header.module.css'
import {moviesAction} from "../../redux";

const Header = () => {

    // const {page, movies, filterParams} = useSelector(state => state.movies);
    // const dispatch = useDispatch();
    // const {register, isValid, reset, handleSubmit} = useForm({defaultValues: {filter: ''}});
    //
    // const search = async (data) => {
    //     await dispatch(moviesAction.setFilterParams(data.filter))
    //     reset()
    // };

    return (
        <div className={css.Header}>
            hello header
            {/*<form onSubmit={handleSubmit(search)}>*/}
            {/*    <input type="text" placeholder="Search movie..." {...register('filter')}/>*/}
            {/*    <button>Search</button>*/}
            {/*</form>*/}
        </div>
    );
};

export {
    Header
};