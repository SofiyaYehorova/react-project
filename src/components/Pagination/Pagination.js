import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {moviesAction} from "../../redux";

import css  from '../../App.css'

const Pagination = ({queryPage}) => {
    const {page} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className={'button_pagination'}>
            <button className={'btn'} disabled={queryPage <= 1}  onClick={() => {
                dispatch(moviesAction.prevPage())
                navigate(`?page=${page - 1}`)
            }}>Prev
            </button>
            <button className={'btn'} onClick={() => {
                dispatch(moviesAction.nextPage())
                navigate(`?page=${page + 1}`)
            }}>Next
            </button>
        </div>
    );
};

export {
    Pagination
};