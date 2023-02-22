import React from 'react';
import {Outlet} from "react-router-dom";

import {Footer, Genres, Header} from "../components";


const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Genres/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {
    MainLayout
};