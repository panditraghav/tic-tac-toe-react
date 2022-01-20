import './App.css';
import Board from './components/Board';
import { useState } from 'react';

const players = ["X", "O"];
const gameStatus = {
  playing: 1,
  win: 2,
  draw: 3
}


function App() {
  const [gameState, setGameState] = useState({
    board: ["", "", "", "", "", "", "", "", ""],
    gameStatus: gameStatus.playing,
    level: 1,
    playerTurn: players[Math.floor(Math.random())],// Selecting a random player at begining
    playerWon: null
  });

  function boxOnClick(e) {
    var board = gameState.board;
    board[e.target.id] = gameState.playerTurn;

    var playerTurn = gameState.playerTurn;
    playerTurn = playerTurn === "X" ? "O" : "X";

    setGameState({
      board: board,
      playerTurn: playerTurn,
    });

  }


  return (
    <div className="App">
      <Board gameState={gameState} boxOnClick={boxOnClick} />
    </div>
  );
}

export default App;
