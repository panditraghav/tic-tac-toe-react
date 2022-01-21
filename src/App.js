import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import { useState } from 'react';

const players = ["X", "O"];
const gameStatus = {
  playing: 1,
  win: 2,
  draw: 3
}


function App() {

  const [gameState, setGameState] = useState({
    board: [["", "", ""],
    ["", "", ""],
    ["", "", ""]],
    gameStatus: gameStatus.playing,
    level: 1,
    playerTurn: players[Math.floor(Math.random() * 2)],// Selecting a random player at begining
    playerWon: null
  });

  function boxOnClick(e) {
    var newGameState = gameState;

    var board = gameState.board;
    var playerTurn = gameState.playerTurn;
    var row = JSON.parse(e.target.id).r;
    var col = JSON.parse(e.target.id).c;

    if (board[row][col] === "") {
      board[row][col] = playerTurn;
      playerTurn = playerTurn === "X" ? "O" : "X";
    }

    newGameState.board = board;
    newGameState.playerTurn = playerTurn;

    setGameState({
      ...newGameState
    });
  }


  return (
    <div className="App">
      <Header level={gameState.level} />
      <Board gameState={gameState} boxOnClick={boxOnClick} />
    </div>
  );
}

export default App;
