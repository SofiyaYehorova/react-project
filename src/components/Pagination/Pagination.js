import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {moviesAction} from "../../redux";

const Pagination = ({queryPage}) => {
    const {page} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <button disabled={queryPage <= 1} onClick={() => {
                dispatch(moviesAction.prevPage())
                navigate(`?page=${page - 1}`)
            }}>Prev
            </button>
            <button onClick={() => {
                dispatch(moviesAction.nextPage())
                navigate(`?page=${page + 1}`)
            }}>Next
            </button>
        </div>

        // <div>
        //     <button onClick={()=>dispatch(moviesAction.prevPage(1))}>prev</button>
        //     <button onClick={()=>dispatch(moviesAction.nextPage(1))}>next</button>
        // </div>
    );
};

export {
    Pagination
};