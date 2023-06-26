// Content component, renders the,
//  Tic-Tac-Toe and checkers buttons.

import React, { useState } from "react";
import { Navigate } from "react-router-dom";

function Content({ onLogin = false, userName_ = "" }) {
    const [showAlert, setAlert] = useState(false);
    const [ticGameClicked, setTicGameClicked] = useState(false);
    const [c4GameClicked, setC4GameClicked] = useState(false);
    const [userNameSend, setUserName] = useState({
        userName: ""
    })

    if (onLogin) {
        function loginClickTic() {
            setUserName({
                userName: userName_
            });
            setTicGameClicked(true);
        }
        function loginClickC4() {
            setC4GameClicked(true);
        }

        return (
            <div className="content-parent">
                {ticGameClicked &&
                    <Navigate to="/welcome/tic-tac-toe" state={userNameSend} />
                }
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