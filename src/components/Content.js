// Content component, renders the,
//  Tic-Tac-Toe and Connect$ buttons.

import React, { useState } from "react";

function Content() {
    const [showAlert, setAlert] = useState(false);

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

            {showAlert && (
                <button className="content-child glow-on-hover"
                    onClick={handleCloseAlert}>
                    <h1>Please Login to continue </h1>
                </button>
            )}
        </div>
    );
}

export default Content; 