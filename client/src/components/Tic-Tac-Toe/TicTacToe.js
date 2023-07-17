// Tic-Tac-Toe game component
//  user move and AI move will be displayed to the client side

import React, { useState } from "react";
import { isWinner, findBestMove, isBoxFull, isOneEmpty } from "./ticTacToeAlgorithm";
import 'reactjs-popup/dist/index.css';
import Popup from 'reactjs-popup';
import { useNavigate } from "react-router-dom";

function TicTacToe() {
    const navigate = useNavigate();

	// gameBoard which is taken as Tic-Tac-Toe board
	//  gameBoard will be updated on user's move and AI's move.
	const [gameBoard, setGameBoard] = useState([
	  [' ', ' ', ' '],
	  [' ', ' ', ' '],
	  [' ', ' ', ' ']
    ]);
  
	function handleIcon(i, j) {
		// Create a new copy of the game board
		const updatedGameBoard = [...gameBoard];

		if (updatedGameBoard[i][j] === ' ') {
			// Update the user's move
			updatedGameBoard[i][j] = '⭕️';
			setGameBoard(updatedGameBoard);
	
			// Call the AI algorithm to find the best move
			const bestMove = findBestMove(updatedGameBoard);
			if (bestMove.first !== -1 && bestMove.second !== -1) {
				// Update the AI's move
				updatedGameBoard[bestMove.first][bestMove.second] = '❌';
			}
			// Update the gameBoard state with the new game board
			setGameBoard(updatedGameBoard);

			if (isWinner(updatedGameBoard, "❌")) {
                setIsAiWon(true);
            }
            else if (isWinner(updatedGameBoard, "⭕️")) {
                setIsPlayerWon(true);
            }
            else if (!isWinner(updatedGameBoard, "❌") &&
                !isWinner(updatedGameBoard, "⭕️") &&
                (isBoxFull(updatedGameBoard) || isOneEmpty(updatedGameBoard))) {
                setIsDraw(true);
            }

		}
    }
    
    const [isAiWon, setIsAiWon] = useState(false);
    const [isPlayerWon, setIsPlayerWon] = useState(false);
    const [isDraw, setIsDraw] = useState(false);
    const refresh = () => navigate(0);

    function goBack() {
        navigate('/welcome', {replace: true});
    }
  
    return (

        <>
            <div className="game-parent">
                {/* // Each time every row of the gameBoard will be will be displayed
                //	with the three being on one div. */}
                {gameBoard.map((row, i) => (

                    <div key={i} className="game-child">
                        {row.map((box, j) => (
                            <button
                                key={`${i}_${j}`}
                                onClick={() => handleIcon(i, j)}
                                className="game-btn"
                            >
                                {/* // On updating each box in the board
                                // 	will automatically updates in the button
                                //	and updates in the client side. */}
                                {box}
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
  
  

export default TicTacToe;