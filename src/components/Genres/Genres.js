import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {genresAction} from "../../redux";


const Genres = () => {

    const {genres, currentGenre} = useSelector(state => state.genres);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresAction.getAllGenres())
    }, [])

    const handleSubmit = (id) => {
        if (currentGenre?.includes(id)) {
            dispatch(genresAction.deleteGenre(id))
        } else dispatch(genresAction.selectGenre(id))
    }


    // const [genres, setGenres] = useState([]);
    // const {genre} = useSelector(state => state.genres);
    // const dispatch = useDispatch();
    //
    // useEffect(() => {
    //     dispatch(genresAction.getAllGenres())
    //         .then(({payload}) => setGenres(payload.genres))
    // }, [dispatch])

    return (
        <div>
            hello genres

            <div>
                <div className={"genre_select"}>
                    {
                        genres?.genres?.map(genre => <div key={genre.id}>
                            <label className={"checkbox-el"}>
                                <input
                                    type="checkbox"
                                    value={genre.name}
                                    name={genre.name}
                                    onClick={() => handleSubmit(genre.id)}
                                />
                                {genre.name}
                            </label>
                        </div>)
                    }
                </div>
                {/*<div className={'genre_select_btn'} >*/}
                {/*    <button onClick={() => dispatch(movieActions.show(false))}>Hide</button>*/}
                {/*</div>*/}
            </div>

            {/*{*/}
            {/*    genres.map(genre => (*/}
            {/*        <button*/}
            {/*            key={genre.id}*/}
            {/*            onClick={() => {*/}
            {/*                dispatch(genresAction.getGenre(genre))*/}
            {/*            }}>{genre.name}</button>)*/}
            {/*    )*/}

            {/*    // <Genre key={genre.id} genre={genre}/>)*/}
            {/*}*/}
        </div>
    );
};

export {
    Genres
};