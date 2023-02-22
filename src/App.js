import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages";
import {MovieDetail, MovieList} from "./components";

const App = () => {
    return (
        <div>
            <Routes>
                {/*<Route path={'/'} element={<MainLayout/>}>*/}
                {/*    <Route index element={<Navigate to={'/movies'}/>}/>*/}
                {/*    <Route path={'/movies'} element={<MoviesPage/>}/>*/}
                {/*    <Route path={'/movie/details'} element={<MovieDetail/>}/>*/}
                {/*    /!*<Route path={'/movie/:id'} element={<MovieDetail/>}/>*!/*/}
                {/*</Route>*/}
                <Route path={'/'} element={<MovieList/>}/>
                <Route path={'movie/:id'} element={<MovieDetail/>} />
            </Routes>
        </div>
    );
};

export {
    App
};