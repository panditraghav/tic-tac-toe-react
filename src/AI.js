import { isMovesLeft , evaluatePosition ,findRandomMove , players, Move} from "./utils";

export function findMoveForLevel(board, level) {
    var height = level;


    if (level === 1) {
        let randomMove = findRandomMove(board);
        return randomMove;
    }
    else if (level === 3) {
        height = 4;
    } else if (level === 4) {
        height = 7;
    }


    let move = new Move(0, 0);
    let bestVal = 1000;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            if (board[i][j] === "") {

                board[i][j] = players.AI;

                let moveVal = minimax(board, 0, true, height);

                board[i][j] = "";

                if (moveVal < bestVal) {
                    move.row = i;
                    move.col = j;
                    bestVal = moveVal;
                }
            }
        }
    }
    return move;

}

function minimax(board, depth, isMax, height) {
    let score = evaluatePosition(board);

    // console.log(depth);
    if (height === depth) {
        return score;
    }
    //If maximizer wins
    if (score === 10) {
        return score;
    }
    //If minimizer wins
    if (score === -10) {
        return score;
    }

    // If no moves left hence draw
    if (!isMovesLeft(board)) {
        return 0;
    }
    //If it is maximizer's turn
    if (isMax) {
        let best = -1000;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === "") {

                    board[i][j] = players.human;

                    best = Math.max(best, minimax(board, depth + 1, !isMax, height));

                    board[i][j] = "";
                }
            }
        }
        // console.log(best-depth);
        return best - depth;
        // return best;
    }
    //If it is minimizer's turn
    else {
        let best = 1000;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {

                if (board[i][j] === "") {

                    board[i][j] = players.AI;

                    best = Math.min(best, minimax(board, depth + 1, !isMax, height));

                    board[i][j] = "";
                }
            }
        }
        return best + depth;
        // return best;
    }
}

