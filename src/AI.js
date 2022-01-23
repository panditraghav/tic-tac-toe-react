const players = { human: "X", AI: "O" };

class Move {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
}

export function isMovesLeft(board) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === "")
                return true;
        }
    }
    return false;
}

export function evaluatePosition(board) {

    //Checking for all rows if marks of any row match
    for (let row = 0; row < 3; row++) {
        if (board[row][0] === board[row][1] &&
            board[row][1] === board[row][2]) {
            if (board[row][0] === players.human) {
                return 10;
            } else if (board[row][0] === players.AI) {
                return -10;
            }
        }
    }
    //Checking for columns
    for (let col = 0; col < 3; col++) {
        if (board[0][col] === board[1][col] &&
            board[1][col] === board[2][col]) {
            if (board[0][col] === players.human) {
                return 10;
            } else if (board[0][col] === players.AI) {
                return -10;
            }
        }
    }

    //Checking for first diagonal
    if (board[0][0] === board[1][1] &&
        board[1][1] === board[2][2]) {
        if (board[0][0] === players.human) {
            return 10;
        } else if (board[0][0] === players.AI) {
            return -10;
        }
    }
    //Checking for second diagonal
    if (board[0][2] === board[1][1] &&
        board[1][1] === board[2][0]) {
        if (board[0][2] === players.human) {
            return 10;
        } else if (board[0][2] === players.AI) {
            return -10;
        }
    }
    //If none of above returns conditions states true then game will be a draw (0 for draw)
    return 0;
}

function minimax(board, depth, isMax) {
    let score = evaluatePosition(board);

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

                    best = Math.max(best, minimax(board, depth + 1, !isMax));

                    board[i][j] = "";
                }
            }
        }

        return best;
    }
    //If it is minimizer's turn
    else {
        let best = 1000;

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {

                if (board[i][j] === "") {

                    board[i][j] = players.AI;

                    best = Math.min(best, minimax(board, depth + 1, !isMax, players));

                    board[i][j] = "";
                }
            }
        }
        return best;
    }
}

function findRandomMove(board) {
    let randomMove = new Move(Math.floor(Math.random() * 3), Math.floor(Math.random() * 3));
    if(board[randomMove.row][randomMove.col] === ""){
        return randomMove;
    }else{
        return findRandomMove(board);
    }
}

export function findMove(board, level) {

    switch (level) {
        case 1:
            let randomMove =  findRandomMove(board);
            console.log(randomMove);
            return randomMove;

        case 2:

    }
    let bestMove = new Move(0, 0);
    let bestVal = 1000;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {

            if (board[i][j] === "") {

                board[i][j] = players.AI;

                let moveVal = minimax(board, 0, true);

                board[i][j] = "";

                if (moveVal < bestVal) {
                    bestMove.row = i;
                    bestMove.col = j;
                    bestVal = moveVal;
                }
            }
        }
    }
    return bestMove;

}




