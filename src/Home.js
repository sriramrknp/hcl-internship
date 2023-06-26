// Home component
//  loads on start, route - "/"

import React from "react";
import Header from "./Header";
import Content from "./Content";

function Home() {
    return (
        <>
            <Header showLogin showSignup />
            <Content onLogin = {false} />
        </>
    );
}

export default Home;