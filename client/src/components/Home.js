// Home component
//  loads on start, route - "/"

import React, {useState} from "react";
import Header from "./Header";
import Content from "./Content";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const [showPopup, setShowPopup] = useState(true);
    const userLogin = localStorage.getItem("UserLogin");

    function close() {
        setShowPopup(false);
    }

    return (
        <>
            <Header showLogin showSignup />
            {userLogin ? navigate('/welcome', { replace: true }) :
                <Content />
            }
        
            <Popup
                open={showPopup} closeOnEscape={true}
                closeOnDocumentClick={true} 
            >
                <div className="modal-parent-home">
                    <div className="modal-child1-home">
                        <h5> Instructions - Tic-Tac-Toe </h5>
                    </div>
                    <div className="modal-child2">
                        <br></br>
                        The objective is to be the first player to form a line of three symbols ('❌' or '⭕️') horizontally,
                        vertically, or diagonally on the 3x3 grid.
                        <br></br>
                        Players: You and AI bot. You are '⭕️', and AI is '❌'.
                        <br></br>
                        <br></br>
                    </div>

                    <div className="modal-child1-home">
                        <h5> Instructions - Connect 4 </h5>
                    </div>
                    <div className="modal-child2">
                        <br></br>
                        The objective is to be the first player to connect four discs in a row ('🟡' or '🔴') horizontally,
                        vertically, or diagonally on the 6x7 grid.
                        <br></br>
                        Players: You and AI bot. You are yellow(🟡) discs, and AI is red(🔴) discs.
                        <br></br>
                    </div>

                    <div className="modal-child2">
                        <button className="modal-button-home" onClick={close}>Close</button>
                    </div>
                </div>
            </Popup>
        </>
    );
}

export default Home;