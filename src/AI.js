const players = { human: "X", AI: "O" };

const winningPositions = [
    //All rows
    [{ r: 0, c: 0 }, { r: 0, c: 1 }, { r: 0, c: 2 }],
    [{ r: 1, c: 0 }, { r: 1, c: 1 }, { r: 1, c: 2 }],
    [{ r: 2, c: 0 }, { r: 2, c: 1 }, { r: 2, c: 2 }],
    //All columns
    [{ r: 0, c: 0 }, { r: 1, c: 0 }, { r: 2, c: 0 }],
    [{ r: 0, c: 1 }, { r: 1, c: 1 }, { r: 2, c: 1 }],
    [{ r: 0, c: 2 }, { r: 1, c: 2 }, { r: 2, c: 2 }],
    //Diagonals
    [{ r: 0, c: 0 }, { r: 1, c: 1 }, { r: 2, c: 2 }],
    [{ r: 2, c: 0 }, { r: 1, c: 1 }, { r: 0, c: 2 }],
];

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

function getWinningPositionIndex(board){
    let winningPositionIndex = -1;
    winningPositions.forEach((value, index) => {
        if (board[value[0].r][value[0].c] === board[value[1].r][value[1].c] &&
            board[value[2].r][value[2].c] === board[value[1].r][value[1].c]) {
                
            winningPositionIndex = index;
        }
    });

    return winningPositionIndex;
}

export function evaluatePosition(board) {
    let returnVal = 0;
    winningPositions.forEach((value, index) => {
        if (board[value[0].r][value[0].c] === board[value[1].r][value[1].c] &&
            board[value[2].r][value[2].c] === board[value[1].r][value[1].c]) {
            // console.log(value);
            if (board[value[0].r][value[0].c] === players.human) {
                returnVal = 10;
            } else if (board[value[0].r][value[0].c] === players.AI) {
                returnVal = -10;
            }
        }
    });

    //If none of above returns conditions states true then game will be a draw (0 for draw)
    return returnVal;
}

function minimax(board, depth, isMax, height) {
    let score = evaluatePosition(board);

    // console.log(depth);
    if (height === depth) {
        return score;
    }
    //If maximizer wins
    if (score === 10) {
        console.log(score);
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

function findRandomMove(board) {
    let randomMove = new Move(Math.floor(Math.random() * 3), Math.floor(Math.random() * 3));
    if (board[randomMove.row][randomMove.col] === "") {
        return randomMove;
    } else {
        return findRandomMove(board);
    }
}


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




