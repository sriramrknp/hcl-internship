// Content component, renders the,
//  Tic-Tac-Toe and checkers buttons.

import React, { useState } from "react";

function Content({ onLogin = false, userName_ = "" }) {
    const [showAlert, setAlert] = useState(false);
    const [ticGameClicked, setTicGameClicked] = useState(false);
    const [c4GameClicked, setC4GameClicked] = useState(false);
    const [userNameSend, setUserName] = useState({
        userName: ""
    });

    if (onLogin) {
        function loginClickTic() {
            window.location.href = "/welcome/tic-tac-toe";
            setTicGameClicked(true);
        }
        function loginClickC4() {
            window.location.href = "/welcome/connect4";
            setC4GameClicked(true);
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
    } else {

        function handleCloseAlert() {
            setAlert(false);
        }
        function handleButtonClick() {
            setAlert(true);
        }

        return (
            <div className="content-parent">
                {!showAlert &&
                    <>
                        <button className="content-child1 glow-on-hover" type="button"
                            onClick={handleButtonClick}>
                            <h1>Tic-Tac-Toe</h1>
                        </button>
                    
                        <button className="content-child2 glow-on-hover" type="button"
                            onClick={handleButtonClick}>
                            <h1>Connect 4 </h1>
                        </button>
                    </>
                }

                {/* alert on no login */}
                {showAlert && (
                    <button className="content-child glow-on-hover"
                        onClick={handleCloseAlert}>
                        <h1>Please Login to continue </h1>
                    </button>
                )}
            </div>
        );
    }
}

export default Content; 