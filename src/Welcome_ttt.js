// Welcome-ttt component renders Tic-Tac-Toe clicked on login 

import React from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import Tic_Tac_Toe from "./Tic_game";

function Welcome_ttt() {
    // to display the username on the welcome page
    const { state } = useLocation();

    return (
        <>
            <Header showWelcome userName = {state.userName} />  
            <Tic_Tac_Toe />
        </>
    );
}

export default Welcome_ttt;