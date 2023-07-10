// Welcome component renders on successful login

import React from "react";
import Header from "./Header";
import ContentLogin from "./ContentLogin";


function Welcome() {
    // to display the username on the welcome page
    const Username = localStorage.getItem("currentUser");


    return (
        <>
            <Header showWelcome userName = {Username} />  
            <ContentLogin />
        </>
    );
}

export default Welcome;