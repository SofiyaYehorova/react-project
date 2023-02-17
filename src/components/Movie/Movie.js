import React from 'react';

const Movie = ({movie}) => {
    const {id, name} = movie;

    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
        </div>
    );

}
export {
    Movie
};