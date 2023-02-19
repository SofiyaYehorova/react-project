import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {MainLayout} from "./layouts";
import {MoviesPage} from "./pages";
import {MovieDetail} from "./components";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'/movies'}/>}/>
                    <Route path={'/movies'} element={<MoviesPage/>}/>
                    <Route path={'/movies/details'} element={<MovieDetail/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {
    App
};