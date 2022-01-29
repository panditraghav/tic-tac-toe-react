import Board from "./Board";
import JoiningLine from "./JoiningLine";
import { getWinningPositionIndex } from "../utils";

function Transition(props) {

    let result;
    let lineColor;
    console.log(props.gameState.previousLevel,props.gameState.currentLevel)
    if (props.gameState.previousLevel < props.gameState.currentLevel) {
        lineColor = props.playerColors.human;
        result = "You Won!";
    }
    else if (props.gameState.previousLevel > props.gameState.currentLevel) {
        lineColor = props.playerColors.AI;
        result = "You Lose!";
    } else {
        lineColor = props.playerColors.human;
        result = "Draw!";
    }

    

    console.log(getWinningPositionIndex(props.gameState.board))
    return (
        <div>
            <Board className="transition" gameState={props.gameState} level={props.gameState.previousLevel} boxOnClick={(e) => { }} />
            <JoiningLine lineColor={lineColor} winningPositionIndex={getWinningPositionIndex(props.gameState.board)} />
            <div className="result" style={{color: lineColor}}>
                {result}
            </div>

        </div>
    )
}


export default Transition;