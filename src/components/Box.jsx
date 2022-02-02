import Cross from "./Cross";
import Circle from "./Circle";

function Box(props) {
    if (props.mark === "X") {
        return (

            <button className="box" id={props.id} style={{ width: props.width, height: props.height }} onClick={e => props.boxOnClick(e)}>
                <Cross/>
            </button>
        );
    }
    else if (props.mark === "O") {

        return (
            <button className="box" id={props.id} style={{ width: props.width, height: props.height }} onClick={e => props.boxOnClick(e)}>
                <Circle />
            </button>

        )
    } else {
        return (

            <button className="box" id={props.id} style={{ width: props.width, height: props.height }} onClick={e => props.boxOnClick(e)}>
                   
            </button>
        )
    }
}

export default Box;