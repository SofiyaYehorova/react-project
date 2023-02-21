import React from 'react';
import {Outlet} from "react-router-dom";

import {Footer, Genres, Header} from "../components";


const MainLayout = () => {
    return (
        <div>
            <Header/>
            <div>
                <input type="text" placeholder={"Search...."} />
                <button>SEARCH</button>
            </div>
            <Genres/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {
    MainLayout
};