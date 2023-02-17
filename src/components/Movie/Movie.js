import React from 'react';

const Movie = ({movie}) => {
    const {id, title, original_title, backdrop_path, poster_path} = movie;

    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>original_title:{original_title}</div>
            <div>
                <img src={backdrop_path} alt="picture"/>
                </div>
            <div>poster_path:{poster_path}</div>

        </div>
    );

}
export {
    Movie
};