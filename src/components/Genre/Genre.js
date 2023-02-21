import React from 'react';
import {useDispatch} from "react-redux";

const Genre = ({genre}) => {
    const {name} = genre;

    return (
        <div>
            <p>Genre name:{name}</p>
        </div>
    );
};

export {
    Genre
};