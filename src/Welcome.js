// Welcome component renders on successful login

import React from "react";
import Header from "./Header";
import Content from "./Content";
import { useLocation } from "react-router-dom";

function Welcome() {
    // to display the username on the welcome page
    const { state } = useLocation();

    return (
        <>
            <Header showWelcome userName = {state.userName} />  
            <Content onLogin />
        </>
    );
}

export default Welcome;