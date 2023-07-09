// Tic-Tac-Toe game component
//  user move and AI move will be displayed to the client side

import React, { useState } from "react";
import {evaluate, findBestMove} from "./ticTacToeAlgorithm";

function TicTacToe() {

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

			const score = evaluate(updatedGameBoard);
			if (score === 10) {
				setTimeout(() => {
					alert("AI won the game");
				}, 500);
			} else if (score === -10) {
				setTimeout(() => {
					alert("You won!🥳");
				}, 500);
			}

		}
	}
  
	return (
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
	);
  }
  
  

export default TicTacToe;