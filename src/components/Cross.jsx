import React from "react";


function Cross() {
    return (
        <div className="cross">

            <svg className="first" width="75" height="73" viewBox="0 0 75 73" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <line x1="5" y1="-5" x2="90.873" y2="-5"
                    transform="matrix(0.711815 -0.702367 0.711815 0.702367 5.38672 72.3381)" stroke="black"
                    strokeWidth="10" strokeLinecap="round" />
            </svg>

            <svg className="second" width="75" height="73" viewBox="0 0 75 73" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="5" y1="-5" x2="90.873" y2="-5" transform="matrix(0.711815 0.702367 -0.711815 0.702367 1 5)"
                    stroke="black" strokeWidth="10" strokeLinecap="round" />
            </svg>
        </div>
    )
}

export default Cross;