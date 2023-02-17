import React from 'react';

const Movie = ({movie}) => {
    const {id, name, backdrop_path} = movie;

    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <div>backdrop_path:{backdrop_path}</div>
        </div>
    );

}
export {
    Movie
};