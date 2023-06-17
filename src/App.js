import React from "react";
import Header from "./Header";
import Content from "./Content";
import Signup from "./Signup";
import Login from "./Login";
import {Routes, Route} from "react-router-dom";
import Welcome from "./Welcome";


function App(props) {

    return (
        <div>
            <Routes>
                <Route key={1} path="/" exact element={[
                    <React.Fragment key={1}>
                        <Header showLogin showSignup /> 
                        <Content />
                    </React.Fragment>
                    ]}>
                </Route>
                <Route key={2} path="/login-react" exact element={<Login />}>
                </Route>
                <Route key={3} path="/signup-react" exact element={<Signup />}>
                </Route>
                <Route key={4} path="/welcome" exact element={<Welcome />}>
                </Route>
            </Routes>
        </div>
    );
}

export default App; 