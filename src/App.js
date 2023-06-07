import React from "react";
import Header from "./Header";
import Content from "./Content";
import Signup from "./Signup";
import Login from "./Login";
import {Routes, Route} from "react-router-dom";


function App() {

    return (
        <div>
            <Routes>
                <Route key={1} path="/" exact element={[
                    <>
                        <Header showLogin showSignup /> 
                        <Content />
                    </>
                    ]}>
                </Route>
                <Route key={2} path="/login-react" exact element={<Login />}>
                </Route>
                <Route key={3} path="/signup-react" exact element={<Signup />}>
                </Route>
            </Routes>
        </div>
    );
}

export default App; 