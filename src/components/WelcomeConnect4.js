// Welcome-ttt component renders Tic-Tac-Toe clicked on login 

import React from "react";
import Header from "./Header";
import Connect4 from "./Connect4";

function WelcomeConnect4() {
    // to display the username on the welcome page
    const Username = localStorage.getItem("currentUser");

    return (
        <>
            <Header showWelcome userName = {Username} />  
            <Connect4 />
        </>
    );
}

export default WelcomeConnect4;