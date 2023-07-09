// Welcome-ttt component renders Tic-Tac-Toe clicked on login 

import React from "react";
import Header from "./Header";
import TicTacToe from "./TicTacToe";

function WelcomeTicTacToe() {
    // to display the username on the welcome page
    const Username = localStorage.getItem("currentUser");

    return (
        <>
            <Header showWelcome userName = {Username} />  
            <TicTacToe />
        </>
    );
}

export default WelcomeTicTacToe;