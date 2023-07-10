// Connect4 game

import React, { useState } from "react";
import { isWinner, isBoardFull, findBestMove } from "./connect4Algorithm";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';

function Connect4() {

	const [gameBoard, setGameBoard] = useState([
		[" ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " "],
		[" ", " ", " ", " ", " ", " ", " "],
	]);

	function handleIcon(j) {
		// Create a new copy of the game board
		const updatedGameBoard = [...gameBoard];

		if (updatedGameBoard[0][j] === " ") {
			// Find the bottom-most empty row in the selected column
			let row = 5;
			while (row >= 0 && updatedGameBoard[row][j] !== " ") {
				row--;
			}

			if (row >= 0) {
				// Update the user's move
				updatedGameBoard[row][j] = "🟡";
				setGameBoard(updatedGameBoard);

				// Call the AI algorithm to find the best move
				const bestMove = findBestMove(updatedGameBoard);

				// Find the bottom-most empty row in the AI's selected column
				let aiRow = 5;
				while (aiRow >= 0 && updatedGameBoard[aiRow][bestMove] !== " ") {
					aiRow--;
				}

				if (aiRow >= 0) {
					// Update the AI's move
					updatedGameBoard[aiRow][bestMove] = "🔴";
				}

				// Update the gameBoard state with the new game board
				setGameBoard(updatedGameBoard);

				if (isWinner(updatedGameBoard, "🔴")) {
					setIsAiWon(true);
				}
				else if (isWinner(updatedGameBoard, "🟡")) {
                    setIsPlayerWon(true);
                }
                else if (!isWinner(updatedGameBoard, "🔴") &&
                    !isWinner(updatedGameBoard, "🟡") &&
                    isBoardFull(updatedGameBoard)) {
                    setIsDraw(true);
				}
			}
		}
    }
    
    const [isAiWon, setIsAiWon] = useState(false);
    const [isPlayerWon, setIsPlayerWon] = useState(false);
    const [isDraw, setIsDraw] = useState(false);
    const refresh = () => window.location.reload(true);
    
    function goBack() {
        window.location.replace("/welcome");
    }

	return (
		<>
            <div className="game-parent-c4">
                {/* // Each time every row of the gameBoard will be will be displayed
                        //	with the three being on one div. */}
                {gameBoard.map((row, i) => (
                    <div key={i} className="game-child-c4">
                        {row.map((box, j) => (
                        <button
                            key={`${i}_${j}`}
                            onClick={() => handleIcon(j)}
                            className="game-btn-c4"
                            style={{
                            backgroundColor:
                                box === "🟡" ? "yellow" : box === "🔴" ? "red" : "",
                            }}
                        >
                            {/* // On updating each box in the board
                                            // 	will automatically updates in the button
                                            //	and updates in the client side. */}{" "}
                        </button>
                        ))}
                    </div>
                ))}
            </div>

            <Popup
                open={isAiWon} closeOnEscape={false}
                closeOnDocumentClick={false} 
            >
                <div className="modal-parent">
                    <div className="modal-child1"> Final Result </div>
                    <div className="modal-child1"> AI won 🤖! </div>
                    <div className="modal-child2">
                        <button className="modal-button" onClick={refresh}>Refresh</button>
                        <button className="modal-button" onClick={goBack}> Back </button>
                    </div>
                </div>
            </Popup>

            <Popup
                open={isPlayerWon} closeOnEscape={false}
                closeOnDocumentClick={false} 
            >
                <div className="modal-parent">
                    <div className="modal-child1"> Final Result </div>
                    <div className="modal-child1"> You Won the game 🥳 </div>
                    <div className="modal-child2">
                        <button className="modal-button" onClick={refresh}>Refresh</button>
                        <button className="modal-button" onClick={goBack}> Back </button>
                    </div>
                </div>
            </Popup>

            <Popup
                open={isDraw} closeOnEscape={false}
                closeOnDocumentClick={false} 
            >
                <div className="modal-parent">
                    <div className="modal-child1"> Final Result </div>
                    <div className="modal-child1"> Its a Draw match 🤖 </div>
                    <div className="modal-child2">
                        <button className="modal-button" onClick={refresh}>Refresh</button>
                        <button className="modal-button" onClick={goBack}> Back </button>
                    </div>
                </div>
            </Popup>

		</>
	);
}

export default Connect4;
