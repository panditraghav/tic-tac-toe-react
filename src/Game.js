import './App.css';
import { findMoveForLevel, evaluatePosition, isMovesLeft } from './AI';
import { useState } from 'react';

import Board from './components/Board';
import Header from './components/Header';
import Transition from './components/Transition';

const players = {
  human: "X",
  AI: "O"
}; // X is human and O is AI
const gameStatus = {
  playing: 1,
  win: 2,
  draw: 3,
  transition: 4
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
    level: 3,
    playerTurn: players.human,// Selecting a random player at begining
    playerWon: null
  });

  function getGameStatus(newGameState) {
    // If X has won
    if (evaluatePosition(newGameState.board) === 10) {
      console.log("X Won!");
      newGameState.level++;
      newGameState.gameStatus = gameStatus.win;
    }
    //If O has won
    else if (evaluatePosition(newGameState.board) === -10) {
      console.log("O won!");
      newGameState.level--;
      newGameState.gameStatus = gameStatus.win;
    }
    //If Game is drawn
    else if (evaluatePosition(newGameState.board) === 0 && !isMovesLeft(newGameState.board)) {
      console.log("It's a draw!");
      newGameState.gameStatus = gameStatus.draw;
    }
    return newGameState;
  }

  function makeAIMove() {
    let newGameState = gameState;

    if (newGameState.playerTurn === players.AI &&
      newGameState.gameStatus === gameStatus.playing &&
      newGameState.playerWon === null) {

      let move = findMoveForLevel(newGameState.board, newGameState.level); //Find the move

      newGameState.board[move.row][move.col] = newGameState.playerTurn;
      newGameState.playerTurn = newGameState.playerTurn === players.human ? players.AI : players.human;

      newGameState = getGameStatus(newGameState); // Checks if any player won or draws

      setGameState({
        ...newGameState
      });
    }

  }

  function makeHumanMove(e) {
    let newGameState = gameState;
    console.log(evaluatePosition(newGameState.board))

    if (e.target.className === "box" &&
      newGameState.gameStatus === gameStatus.playing &&
      newGameState.playerWon === null &&
      newGameState.playerTurn === players.human) {

      let humanMove = new Move(JSON.parse(e.target.id).r, JSON.parse(e.target.id).c);
      //Making human's move
      if (newGameState.board[humanMove.row][humanMove.col] === "") {
        newGameState.board[humanMove.row][humanMove.col] = newGameState.playerTurn;
        newGameState.playerTurn = newGameState.playerTurn === players.human ? players.AI : players.human;
      }

      newGameState = getGameStatus(newGameState);

      setGameState({
        ...newGameState
      });

      setTimeout(() => {
        makeAIMove();
      }, 900)

    }

  }



  return (
    <div className="App">
      <Header />
      <Board gameState={gameState} boxOnClick={makeHumanMove} />

      {gameState.gameStatus === gameStatus.transition &&
        <Transition gameState={gameState}/>
      }
    </div>
  );
}



export default Game;
