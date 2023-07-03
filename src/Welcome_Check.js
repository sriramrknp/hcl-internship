// Welcome-ttt component renders Tic-Tac-Toe clicked on login 

import React from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import Connect4 from "./Connect4";

function Welcome_ttt() {
    // to display the username on the welcome page
    const { state } = useLocation();

    return (
        <>
            <Header showWelcome userName = {state.userName} />  
            <Connect4 />
        </>
    );
}

export default Welcome_ttt;