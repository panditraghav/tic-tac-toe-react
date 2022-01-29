import Board from "./Board";
import JoiningLine from "./JoiningLine";
import Footer from "./Footer";
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

    if(props.gameState.previousLevel === 0){
        lineColor = props.playerColors.AI;
        result = "You Lose!";
    }
    

    console.log(getWinningPositionIndex(props.gameState.board))
    return (
        <div>
            <Board className="transition" gameState={props.gameState} level={props.gameState.previousLevel} boxOnClick={(e) => { }} />
            <JoiningLine lineColor={lineColor} winningPositionIndex={getWinningPositionIndex(props.gameState.board)} />
            <div className="result" style={{color: lineColor}}>
                {result}
            </div>
            <Footer />
        </div>
    )
}


export default Transition;