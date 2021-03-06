import React from "react";
import Boxes from './Boxes';


function BoardSVG() {
    return <svg  width="300" height="300" viewBox="0 0 350 350" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g id="Board" clipPath="url(#clip0_116_45)">
            <line id="LineYLeft" x1="121.667" y1="5" x2="121.667" y2="345" stroke="black" strokeWidth="10"
                strokeLinecap="round" />
            <line id="LineYRight" x1="238.333" y1="5" x2="238.333" y2="345" stroke="black" strokeWidth="10"
                strokeLinecap="round" />
            <line id="LineXUpper" x1="5" y1="111.667" x2="345" y2="111.667" stroke="black" strokeWidth="10"
                strokeLinecap="round" />
            <line id="LineXLower" x1="5" y1="228.333" x2="345" y2="228.333" stroke="black" strokeWidth="10"
                strokeLinecap="round" />
        </g>
        <defs>
            <clipPath id="clip0_116_45">
                <rect width="350" height="350" fill="white" />
            </clipPath>
        </defs>
    </svg>;

}

function Board(props) {
    return (
        <div className={props.className}>
            <div className="level">Level {props.level}</div>
            <div className={`board`}>
                <BoardSVG />
                <Boxes board={props.gameState.board} mark={props.gameState.mark} width="100px" height="100px" boxOnClick={props.boxOnClick} />
            </div>
        </div>

    )
}


export default Board;