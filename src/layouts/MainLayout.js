import React from 'react';
import {Outlet} from "react-router-dom";

import {Header, Movies} from "../components";


const MainLayout = () => {
    return (
        <div>
            <Header/>
            <hr/>
            <Movies/>
        </div>
    );
};

export {
    MainLayout
};