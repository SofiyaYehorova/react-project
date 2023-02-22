import React from 'react';
import {useDispatch} from "react-redux";
import {genresAction} from "../../redux";

const Genre = ({genre}) => {
    const dispatch = useDispatch();
    const {name} = genre;

    return (
        <div>
            {/*<button onClick={() => {*/}
            {/*    dispatch(genresAction.getGenre(genre))*/}
            {/*}}>{name}</button>*/}
        </div>
    );
};

export {
    Genre
};