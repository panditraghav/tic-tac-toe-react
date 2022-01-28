function JoiningLine(props) {
    console.log(props.winningPositionIndex)
    switch(props.winningPositionIndex){
        case 0:
            return (
                <div style={{transform: "rotate(-90deg)",justifyContent:"right"}} className="line">
                    <svg  width="14" height="404" viewBox="0 0 14 404" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="7" y1="7" x2="6.99998" y2="397" stroke="#BC7874" strokeWidth="14" strokeLinecap="round" />
                    </svg>
                </div>
            )
        case 1:
            return (
                <div style={{transform: "rotate(-90deg)",justifyContent:"center"}} className="line">
                    <svg  width="14" height="404" viewBox="0 0 14 404" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="7" y1="7" x2="6.99998" y2="397" stroke="#BC7874" strokeWidth="14" strokeLinecap="round" />
                    </svg>
                </div>
            )
        case 2:
            return (
                <div style={{transform: "rotate(-90deg)",justifyContent:"left"}} className="line">
                    <svg  width="14" height="404" viewBox="0 0 14 404" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="7" y1="7" x2="6.99998" y2="397" stroke="#BC7874" strokeWidth="14" strokeLinecap="round" />
                    </svg>
                </div>
            )
        case 3:
            return (
                <div style={{transform: "rotate(0deg)",justifyContent:"left"}} className="line">
                    <svg  width="14" height="404" viewBox="0 0 14 404" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="7" y1="7" x2="6.99998" y2="397" stroke="#BC7874" strokeWidth="14" strokeLinecap="round" />
                    </svg>
                </div>
            )
        case 4:
            return (
                <div style={{transform: "rotate(0deg)",justifyContent:"center"}} className="line">
                    <svg  width="14" height="404" viewBox="0 0 14 404" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="7" y1="7" x2="6.99998" y2="397" stroke="#BC7874" strokeWidth="14" strokeLinecap="round" />
                    </svg>
                </div>
            )
        case 5:
            return (
                <div style={{transform: "rotate(0deg)",justifyContent:"right"}} className="line">
                    <svg  width="14" height="404" viewBox="0 0 14 404" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="7" y1="7" x2="6.99998" y2="397" stroke="#BC7874" strokeWidth="14" strokeLinecap="round" />
                    </svg>
                </div>
            )
        case 6:
            return (
                <div style={{transform: "rotate(-45deg)",justifyContent:"center"}} className="line">
                    <svg  width="14" height="404" viewBox="0 0 14 404" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="7" y1="7" x2="6.99998" y2="397" stroke="#BC7874" strokeWidth="14" strokeLinecap="round" />
                    </svg>
                </div>
            )
        case 7:
            return (
                <div style={{transform: "rotate(45deg)",justifyContent:"center"}} className="line">
                    <svg  width="14" height="404" viewBox="0 0 14 404" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="7" y1="7" x2="6.99998" y2="397" stroke="#BC7874" strokeWidth="14" strokeLinecap="round" />
                    </svg>
                </div>
            )
        default:
            return (
                <div style={{transform: "rotate(-45deg)",justifyContent:"center"}} className="line">
                    <svg  width="14" height="404" viewBox="0 0 14 404" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="7" y1="7" x2="6.99998" y2="397" stroke="#BC7874" strokeWidth="14" strokeLinecap="round" />
                    </svg>
                </div>
            )

    }
}

export default JoiningLine;