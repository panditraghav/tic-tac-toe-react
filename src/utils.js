const gameStatus = {
    playing: 1,
    draw: 3,
    transition: 4
}

export const players = {
    human: "X",
    AI: "O"
}; // X is human and O is AI
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
    let returnVal = 0;
    WINNING_POSITIONS.forEach((value, index) => {
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

export function getWinningPositionIndex(board) {
    let winningIndex = -1;
    WINNING_POSITIONS.forEach((value, index) => {
        if (board[value[0].r][value[0].c] === board[value[1].r][value[1].c] &&
            board[value[2].r][value[2].c] === board[value[1].r][value[1].c] &&
            board[value[2].r][value[2].c] !== "" && board[value[1].r][value[1].c] !== "" &&
            board[value[0].r][value[0].c] !== "") {
            // console.log(value);
            winningIndex = index;
        }
    });

    return winningIndex;//-1 for draw
}


export function findRandomMove(board) {
    let randomMove = new Move(Math.floor(Math.random() * 3), Math.floor(Math.random() * 3));
    if (board[randomMove.row][randomMove.col] === "") {
        return randomMove;
    } else {
        return findRandomMove(board);
    }
}

export class Move {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
}
export function getGameStatus(gameState) {
    // If X has won
    if (evaluatePosition(gameState.board) === 10) {
        console.log("X Won!");
        gameState = levelUp(gameState);
    }
    //If O has won
    else if (evaluatePosition(gameState.board) === -10) {
        console.log("O won!");
        gameState = levelDown(gameState);
    }
    //If Game is drawn
    else if (evaluatePosition(gameState.board) === 0 && !isMovesLeft(gameState.board)) {
        console.log("It's a draw!");
        gameState = levelDraw(gameState);
    }
    return gameState;
}


function levelUp(gameState) {
    gameState.previousLevel = gameState.currentLevel;
    gameState.currentLevel++;
    gameState.gameStatus = gameStatus.transition;

    return gameState;
}
function levelDown(gameState) {
    gameState.previousLevel = gameState.currentLevel;
    gameState.currentLevel--;
    gameState.gameStatus = gameStatus.transition;

    return gameState;
}

function levelDraw(gameState){
    gameState.previousLevel = gameState.currentLevel;
    gameState.gameStatus = gameStatus.transition;

    return gameState;
}

export const WINNING_POSITIONS = [
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

export function getGameStateAfterTransition(gameState) {
    gameState.board = [["", "", ""],
    ["", "", ""],
    ["", "", ""]];

    gameState.gameStatus = gameStatus.playing;
    gameState.playerTurn = players.human;

    return gameState;
}