import './App.css';
import { findMove, evaluatePosition, isMovesLeft } from './AI';
import { useState } from 'react';

import Board from './components/Board';
import Header from './components/Header';

const players = {
  human: "X",
  AI: "O"
}; // X is human and O is AI
const gameStatus = {
  playing: 1,
  win: 2,
  draw: 3
}

class Move {
  constructor(row, col) {
    this.row = row;
    this.col = col;
  }
}


function Game() {

  const [gameState, setGameState] = useState({
    board: [["", "", ""],
    ["", "", ""],
    ["", "", ""]],
    gameStatus: gameStatus.playing,
    level: 2,
    playerTurn: players.human,// Selecting a random player at begining
    playerWon: null
  });

  function makeAIMove() {
    let newGameState = gameState;

    if (newGameState.playerTurn === players.AI && newGameState.gameStatus === gameStatus.playing) {

      let move = findMove(newGameState.board,newGameState.level); //Find the move

      if (newGameState.board[move.row][move.col] === "") {
        newGameState.board[move.row][move.col] = newGameState.playerTurn;
        newGameState.playerTurn = newGameState.playerTurn === players.human ? players.AI : players.human;
      }
    }

    setGameState({
      ...newGameState
    });
  }

  function makeHumanMove(e) {
    let newGameState = gameState;

    //If the pressed object is box then make a move
    if (e.target.className === "box" && newGameState.gameStatus === gameStatus.playing) {
      let humanMove = new Move(JSON.parse(e.target.id).r, JSON.parse(e.target.id).c);
      //Making human's move
      if (newGameState.playerTurn === players.human) {

        if (newGameState.board[humanMove.row][humanMove.col] === "") {
          newGameState.board[humanMove.row][humanMove.col] = newGameState.playerTurn;
          newGameState.playerTurn = newGameState.playerTurn === players.human ? players.AI : players.human;
        }
      }
    }

    // If X has won
    if (evaluatePosition(newGameState.board) === 10) {
      console.log("X Won!");
      newGameState.gameStatus = gameStatus.win;
    }
    //If O has won
    else if (evaluatePosition(newGameState.board) === -10) {
      console.log("O won!");
      newGameState.gameStatus = gameStatus.win;
    }
    //If Game is drawn
    else if (evaluatePosition(newGameState.board) === 0 && !isMovesLeft(newGameState.board)) {
      console.log("It's a draw!");
      newGameState.gameStatus = gameStatus.draw;
    }

    setGameState({
      ...newGameState
    });

    setTimeout(() => {
      makeAIMove();
    }, 900)
  }



  return (
    <div className="App">
      <Header level={gameState.level} />

      <Board gameState={gameState} boxOnClick={makeHumanMove} />
    </div>
  );
}



export default Game;
