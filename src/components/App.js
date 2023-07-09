// App component, maintains routes and renders 
//  the needed components.

import React from "react";
import Home from "./Home";
import Signup from "./Signup";
import {Routes, Route} from "react-router-dom";
import Welcome_ttt from "./WelcomeTicTacToe";
import Welcome_Check from "./WelcomeConnect4";
import Login from "./Login";
import Welcome from "./Welcome";


function App() {

    // returns:
    //  route based components.

    return (
        <div>
            <Routes>
                <Route key={1} path="/" exact element={<Home />} />
                <Route key={2} path="/signup-react" exact element={<Signup />} />
                <Route key={3} path="/login-react" exact element={<Login />} />
                <Route key={2} path="/welcome" exact element={<Welcome />} />
                <Route key={4} path="/welcome/tic-tac-toe" exact element={<Welcome_ttt />} />
                <Route key={5} path="/welcome/connect4" exact element={<Welcome_Check />} />
            </Routes>
        </div>
    );
}

export default App; 