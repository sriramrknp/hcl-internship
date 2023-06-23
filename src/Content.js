// Content component, renders the,
//  Tic-Tac-Toe and checkers buttons.

import React, { useState } from "react";

function Content({ onLogin = false }) {
    
    // before login alert
    const [showAlert, setShowAlert] = useState(false);

    const handleButtonClick = () => {
        setShowAlert(true);
    };

    const handleCloseAlert = () => {
        setShowAlert(false);
    };

    return (
        <div className="content-parent">
            {!showAlert ? (
                <button className="content-child1 glow-on-hover" type="button"
                    onClick={handleButtonClick}>
                    <h1>Tic-Tac-Toe</h1>
                </button>
            ) :
                onLogin && (
                    <button className="content-child1 glow-on-hover" type="button">
                        <h1>Tic-Tac-Toe</h1>
                    </button>
                )
            }
            
            {!showAlert ? (
                <button className="content-child2 glow-on-hover" type="button"
                    onClick={handleButtonClick}>
                    <h1>Checkers </h1>
                </button>
            ) :
                onLogin && (
                    <button className="content-child2 glow-on-hover" type="button">
                        <h1>Checkers </h1>
                    </button>
                )
            }

            {/* // alert on no login */}
            {showAlert && !onLogin && (
                <button className="content-child glow-on-hover"
                    onClick={handleCloseAlert}>
                    <h1>Please Login to continue </h1>
                </button>
            )}
        </div>
    );
}

export default Content; 