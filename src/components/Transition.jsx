import Board from "./Board";
import JoiningLine from "./JoiningLine";
import { getWinningPositionIndex } from "../utils";

function Transition(props) {

    let result;
    console.log(props.gameState.previousLevel,props.gameState.currentLevel)
    if (props.gameState.previousLevel < props.gameState.currentLevel) {
        result = "You won!";
        console.log("Won")
    }
    else if (props.gameState.previousLevel > props.gameState.currentLevel) {
        result = "You lose!";
        console.log("Lose")
    } else {
        console.log("Draw")
        result = "It's a Draw!";
    }

    console.log(getWinningPositionIndex(props.gameState.board))
    return (
        <div>
            <Board className="transition" gameState={props.gameState} level={props.gameState.previousLevel} boxOnClick={(e) => { }} />
            <JoiningLine winningPositionIndex={getWinningPositionIndex(props.gameState.board)} />
            <div className="result">
                {result}
            </div>

        </div>
    )
}


export default Transition;