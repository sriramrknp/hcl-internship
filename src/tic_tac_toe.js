// AI algorithm file
//  exporting the main function findBestMove to the Tic-Tac-Toe component

// to return the best move in the 3*3 board and
//  and find possible moves in each level of the game tree
class Pair {
	constructor(first, second) {
		this.first = first;
		this.second = second;
	}
}

// in each level availableMoves returns,
//  the all possible moves
function availableMoves(temp) {
	let possibleMoves = [];
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			if (temp[i][j] === ' ') {
				const pair = new Pair(i, j);
				possibleMoves.push(pair);
			}
		}
	}
	return possibleMoves;
}
  
// isBoxFull returns weather board is full or not.
function isBoxFull(board) {
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 3; j++) {
			if (board[i][j] === ' ') {
				return false;
			}
		}
	}
	return true;
  }


// returns if there is a win in the board, else false.
function win(board) {
	// rows and columns
	for (var i = 0; i < 3; i++) {
		if ((board[i][0] === board[i][1]) && (board[i][1] === board[i][2]) && (board[i][0] !== ' ')) {
			return true;
		}
		if ((board[0][i] === board[1][i]) && (board[1][i] === board[2][i]) && (board[1][i] !== ' ')) {
			return true;
		}
	}
	// diagonals
	if ((board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && (board[0][0] !== ' ')) {
		return true;
	}
	if ((board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) && (board[1][1] !== ' ')) {
		return true;
	}

	return false;
}

var one = false, two = false;

// if win, it evaluates and returns score based upon player.
export function evaluate(board) {
	for (var i = 0; i < 3; i++) {
		if ((board[i][0] === board[i][1]) && (board[i][1] === board[i][2]) && (board[i][0] !== ' ')) {
			if (board[i][0] === '❌') { one = true; }
			if (board[i][0] === '⭕️') { two = true; }
		}
		else if ((board[0][i] === board[1][i]) && (board[1][i] === board[2][i]) && (board[1][i] !== ' ')) {
			if (board[0][i] === '❌') { one = true; }
			if (board[0][i] === '⭕️') { two = true; }
		}
	}
	if ((board[0][0] === board[1][1]) && (board[1][1] === board[2][2]) && (board[0][0] !== ' ')) {
		if (board[0][0] === '❌') { one = true; }
			if (board[0][0] === '⭕️') { two = true; }
	}
	if ((board[0][2] === board[1][1]) && (board[1][1] === board[2][0]) && (board[1][1] !== ' ')) {
		if (board[2][0] === '❌') { one = true; }
			if (board[2][0] === '⭕️') { two = true; }
	}

	// if AI wins return positive.
	if (one === true && two === false) {
		return 10;
	}
	// if user wins returns negative.
	if (one === false && two === true) {
		return -10;
	}

	// if draw
	return 0;
}

// counts depth of win to return the move in less depth 
let depth = 0;

// Minimax algorithm with alpha beta pruning optimization.
function minimax(board, alpha, beta, maximizingPlayer) {
	
	// if isBoxFull or win - evaluate score and return.
	if (isBoxFull(board) || win(board)) {
		var score = evaluate(board);
		one = false; two = false;
		return score;
	}

	depth++;
  
	// MAX player
	if (maximizingPlayer) {
		let maxEval = Number.NEGATIVE_INFINITY;
		let possibleMoves = availableMoves(board);
	
		for (var i = 0; i < possibleMoves.length; i++) {
			let move = possibleMoves[i];
			board[move.first][move.second] = '❌';
			let eval_ = minimax(board, alpha, beta, false);
			board[move.first][move.second] = ' '; // Undo the move
	
			maxEval = Math.max(maxEval, eval_);
			alpha = Math.max(alpha, eval_);
			if (beta <= alpha) {
				break; // Beta cutoff
			}
		}

		return maxEval;
	} else {
		// MIN player
		let minEval = Number.POSITIVE_INFINITY;
		let possibleMoves = availableMoves(board);
	
		for (var i = 0; i < possibleMoves.length; i++) {
			let move = possibleMoves[i];
			board[move.first][move.second] = '⭕️';
			let eval_ = minimax(board, alpha, beta, true);
			depth--;
			board[move.first][move.second] = ' '; // Undo the move
	
			minEval = Math.min(minEval, eval_);
			beta = Math.min(beta, eval_);
			if (beta <= alpha) {
				break; // Alpha cutoff
			}
		}
	
		return minEval;
	}
}
  
// findBestMove returns the best move indices.
export function findBestMove(board) {

	if (isBoxFull(board)) {
		return new Pair(-1, -1);
	}
	let bestEval = Number.NEGATIVE_INFINITY;
	let bestMoveRow, bestMoveCol;
  
	let possibleMoves = availableMoves(board);
  
	for (var i = 0; i < possibleMoves.length; i++) {
		let move = possibleMoves[i];
		board[move.first][move.second] = '❌';
		depth = 0;
		one = false; two = false;

		let eval_ = minimax(board, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY, false);
		
		// takes move which is in less depth.
		if (eval_ > 0) {
			eval_ -= depth;
		} else {
			eval_ += depth;
		}
		depth = 0;
		one = false; two = false;
		board[move.first][move.second] = ' '; // Undo the move
	
		if (eval_ > bestEval) {
			bestEval = eval_;
			bestMoveRow = move.first;
			bestMoveCol = move.second;
		}
	}
	// returns the bestMove pair.
	return new Pair(bestMoveRow, bestMoveCol);
}