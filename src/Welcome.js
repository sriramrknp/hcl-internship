import React from "react";
import Header from "./Header";
import Content from "./Content";
import { useLocation } from "react-router-dom";


function Welcome() {
    const { state } = useLocation();

    return (
        <>
            <Header showWelcome userName = {state.userName} />  
            <Content onLogin />
        </>

    );
}

export default Welcome;