// Connect4 AI Algorithm

function getAllPossible4(board) {
	// Returns all possible sections of 4 positions that could result in a win
	var possible4 = [];
	
	for (let j = 0; j < 4; j++)
		for (let i = 0; i < 6; i++)
			possible4.push([board[i][j], board[i][j + 1], board[i][j + 2], board[i][j + 3]]);
	
	for (let i = 0; i < 3; i++)
		for (let j = 0; j < 7; j++)
			possible4.push([board[i][j], board[i + 1][j], board[i + 2][j], board[i + 3][j]]);
	
	for (let i = 0; i < 3; i++)
		for (let j = 0; j < 4; j++)
			possible4.push([board[i][j], board[i + 1][j + 1], board[i + 2][j + 2], board[i + 3][j + 3]]);
	
	for (let i = 3; i < 6; i++)
		for (let j = 0; j < 4; j++)
			possible4.push([board[i][j], board[i - 1][j + 1], board[i - 2][j + 2], board[i - 3][j + 3]]);

	return possible4;
}

export function isWinner(board, player) {
	// Checks if player has won the game
	var sections4 = getAllPossible4(board);
	for (var i = 0; i < sections4.length; i++) {
		var possible = true;
		for (var j = 0; j < 4; j++) {
			if (sections4[i][j] !== player) possible = false;
		}
		if (possible) return true;
	}
	return false;
}

function evaluate(section, player) {
	// Assigns a score to a section based on how likely player is to win/lose
	var score = 0;
	var playerCount = 0,
		opponentCount = 0,
		empty = 0;

	for (var i = 0; i < 4; i++) {
		if (section[i] === player) playerCount++;
		else if (section[i] === '🔴' && player === '🟡') opponentCount++;
		else if (section[i] === '🟡' && player === '🔴') opponentCount++;
		else empty++;
	}

	// Winning positions
	if (playerCount === 4) {
		score += 1000;
	}
	// Blocking opponent's winning positions
	if (opponentCount === 3 && empty === 1) {
		score += 500;
	}
	// Favorable positions for winning
	if (playerCount === 3 && empty === 1) {
		score += 100;
	}
	if (playerCount === 2 && empty === 2) {
		score += 10;
	}
	// Defensive strategy - block opponent's progress
	if (opponentCount === 2 && empty === 2) {
		score += 50;
	}
	if (opponentCount === 1 && empty === 3) {
		score -= 5;
	}

	return score;
}

function getScore(board, player) {
	// Function to assign a score to a board
	var score = 0;
	var sections = getAllPossible4(board);

	for (var i = 0; i < sections.length; i++)
		score += evaluate(sections[i], player);

	for (i = 0; i < 6; i++)
		if (board[i][3] === player) score += 3;

	return score;
}

export function isBoardFull(board) {
	// Function to check if any more moves are possible on the board
	for (var j = 0; j < 7; j++)
		if (board[0][j] === ' ') return false;
	return true;
}

function minimax(board, depth, alpha, beta, player) {
	// Minimax Algorithm for AI to recursively find an optimal move
	if (isWinner(board, '🔴')) return [-1, 99999999];
	if (isWinner(board, '🟡')) return [-1, -99999999];
    if (isBoardFull(board)) return [-1, 0];
    
	if (depth === 0) return [-1, getScore(board, '🔴')];

	if (player === '🔴') {
		// Maximizing player
		let value = Number.NEGATIVE_INFINITY;
		let col = -1;

		for (let i = 0; i < 7; i++) {
			if (board[0][i] === ' ') {
				let boardCopy = new Array(6);

				for (let k = 0; k < board.length; k++)
					boardCopy[k] = board[k].slice();
				var j = 5;
				for (j; j >= 0; j--) {
					if (boardCopy[j][i] === ' ')
						break;
				}

				boardCopy[j][i] = player;
				let newScore = minimax(boardCopy, depth - 1, alpha, beta, '🟡')[1];
				if (newScore > value) {
					value = newScore;
					col = i;
				}

				alpha = Math.max(alpha, value);
				if (alpha >= beta) break;
			}
		}
		return [col, value];
	} else {
		// Minimizing player
		let value = Number.POSITIVE_INFINITY;
		let col = -1;
		
		for (let i = 0; i < 7; i++) {
			if (board[0][i] === ' ') {
				let boardCopy = new Array(6);

				for (let k = 0; k < board.length; k++)
					boardCopy[k] = board[k].slice();
				let j = 5;
				for (j; j >= 0; j--) {
					if (boardCopy[j][i] === ' ')
						break;
				}

				boardCopy[j][i] = player;
				let newScore = minimax(boardCopy, depth - 1, alpha, beta, '🔴')[1];
				if (newScore < value) {
					value = newScore;
					col = i;
				}
				
				beta = Math.min(beta, value);
				if (alpha >= beta) break;
			}
		}
		return [col, value];
	}
}

function getConnectedPieces(board, winner) {
	// Returns an array of the coordinates of connected pieces of the winner
	var arr = new Array(6);
	for (let i = 0; i < 6; i++) {
		arr[i] = new Array(7);
		for (var j = 0; j < 7; j++)
			arr[i][j] = i * 7 + j;
	}

	var sections = getAllPossible4(board);
	var arraySections = getAllPossible4(arr);
	var positions = [];

	for (let i = 0; i < sections.length; i++) {
		if (sections[i].toString() === [winner, winner, winner, winner].toString()) {
			for (let j = 0; j < 4; j++) {
				var pos = arraySections[i][j];
				positions.push([pos % 7, Math.floor(pos / 7)]);
			}
			break;
		}
	}
	return positions;
}

export function findBestMove(board) {
	var bestMove = minimax(board, 6, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, '🔴');
	return bestMove[0];
}