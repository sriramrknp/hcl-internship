// App component, maintains routes and renders 
//  the needed components.

import React from "react";
import Home from "./Home";
import Signup from "./Signup";
import Login from "./Login";
import {Routes, Route} from "react-router-dom";
import Welcome from "./Welcome";
import Welcome_ttt from "./Welcome_ttt";


function App(props) {

    // returns:
    //  route based components.

    return (
        <div>
            <Routes>
                <Route key={1} path="/" exact element={<Home />}>
                </Route>
                <Route key={2} path="/login-react" exact element={<Login />}>
                </Route>
                <Route key={3} path="/signup-react" exact element={<Signup />}>
                </Route>
                <Route key={4} path="/welcome" exact element={<Welcome />}>
                </Route>
                <Route key={5} path="/welcome/tic-tac-toe" exact element={<Welcome_ttt />}>
                </Route>
            </Routes>
        </div>
    );
}

export default App; 