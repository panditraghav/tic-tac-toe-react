import Box from './Box'

function Boxes(props) {
    return (
        <div className="boxes">
            {props.board.map((mark,index) => {
                return <Box key={index} id={index} width={props.width} height={props.height} mark={mark} boxOnClick={props.boxOnClick}/>
            })}
        </div>
    )
}

export default Boxes;