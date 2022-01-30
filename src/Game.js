import gsap from 'gsap';
import { findMoveForLevel } from './AI';
import {getGameStateAfterTransition , getGameStatus } from "./utils";
import { useState, useEffect, useRef } from 'react';
import { boardAnimatmion, circleAnimation, crossAnimation, transitionAnim } from './animations';

import Board from './components/Board';
import Header from './components/Header';
import Transition from './components/Transition';
import Footer from "./components/Footer";

const players = {
  human: "X",
  AI: "O"
}; // X is human and O is AI

const playerColors = {
  human: "#24A19C",
  AI: "#D96098"
}
const gameStatus = {
  playing: 1,
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
    previousLevel: 0,
    currentLevel: 1,
    playerTurn: players.human,// Selecting a random player at begining
    playerWon: null
  });

  const appRef = useRef();
  const appRefSelector = gsap.utils.selector(appRef);
  const crossCircleTl = useRef();
  const transitionAnimation = useRef();

  //Use effect for cross and circles and board animation
  useEffect(() => {

    crossCircleTl.current = gsap.timeline()
      .add(crossAnimation(appRefSelector))
      .add(circleAnimation(appRefSelector))
      .add(boardAnimatmion(appRefSelector))
    crossCircleTl.current.timeScale(1.5);//decrease the timeline scale 1.5 times (increase speed 1.5 times)

  });


  //For transition
  useEffect(() => {

    if (gameState.gameStatus === gameStatus.transition) {

      transitionAnimation.current = gsap.timeline()
        .add(transitionAnim(appRefSelector));
    }

  });

  function makeAIMove() {
    let newGameState = gameState;

    if (newGameState.playerTurn === players.AI &&
      newGameState.gameStatus === gameStatus.playing &&
      newGameState.playerWon === null) {

      let move = findMoveForLevel(newGameState.board, newGameState.currentLevel); //Find the move

      newGameState.board[move.row][move.col] = newGameState.playerTurn;
      newGameState.playerTurn = newGameState.playerTurn === players.human ? players.AI : players.human;

      setGameState({
        ...newGameState
      });

      newGameState = getGameStatus(newGameState);

      if (newGameState.gameStatus === gameStatus.transition) {
        //Change gameState to transition after player move animation is completed
        setTimeout(() => {
          setGameState({
            ...newGameState,
          });
        }, 400)
        console.log(newGameState);

        //Change gameState to playing and clear board
        setTimeout(() => {
          console.log("New g.s time");

          newGameState = getGameStateAfterTransition(newGameState);
          console.log(newGameState);

          setGameState({
            ...newGameState
          })
        }, 6500)
      }

    }

  }

  function makeHumanMove(e) {
    let newGameState = gameState;

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

      setGameState({
        ...newGameState
      });

      newGameState = getGameStatus(newGameState);

      if (newGameState.gameStatus === gameStatus.transition) {
        //Change gameState to transition after player move animation is completed
        setTimeout(() => {
          setGameState({
            ...newGameState
          });
        }, 400)

        //Change transition to playing and clear board
        setTimeout(() => {

          newGameState = getGameStateAfterTransition(newGameState);
          setGameState({
            ...newGameState
          })
        }, 6500)
      }

      setTimeout(() => {
        makeAIMove();
      }, 900)

    }

  }


  return (
    <div ref={appRef} className="App">
      <Header />
      {gameState.gameStatus === gameStatus.playing &&
        <Board className="playing" gameState={gameState} boxOnClick={makeHumanMove} level={gameState.currentLevel} />
      }

      {gameState.gameStatus === gameStatus.transition &&
        <Transition gameState={gameState} playerColors={playerColors}/>
      }
      <Footer />
    </div>
  );
}


export default Game;
