// Profile component, renders user Dashboard

import React from "react";
import { useNavigate } from "react-router-dom";

function ContentLogin() {

    const navigate = useNavigate();
   
    function loginClickTic() {
        navigate("/welcome/tic-tac-toe");
    }
    function loginClickC4() {
        navigate("/welcome/connect4");
    }

    return (
        <div className="content-parent">
            <button className="content-child1 glow-on-hover" type="button"
                onClick={loginClickTic}>
                <h1>Tic-Tac-Toe</h1>
            </button>
            <button className="content-child2 glow-on-hover" type="button"
                onClick={loginClickC4}>
                <h1>Checkers </h1>
            </button>
        </div>
    );
}

export default ContentLogin; 