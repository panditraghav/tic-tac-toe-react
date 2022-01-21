import Box from './Box'

function Boxes(props) {
    return (
        <div className="boxes">
            {props.board.map((row,ir) => {
                return row.map((mark,ic)=>{
                    return <Box key={ir*3 + ic} id={`${JSON.stringify({r:ir,c:ic})}`} width={props.width} height={props.height} mark={mark} boxOnClick={props.boxOnClick}/>
                })
            })}
        </div>
    )
}

export default Boxes;