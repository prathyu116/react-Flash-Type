import React from 'react'
import './TryAgain.css'

const TryAgain = ({word,character,wpm,startAgain}) => {
    return (
        <div className="try-again-container">
            <h1>Test Result</h1>
            <div className="result-container">
                
                    <h2>Characters:{character} </h2>
                
                
                    <h2>Words:{word}</h2>
                
                
                    <h2>Your Speed:{wpm}</h2>
                


            </div>
            <div>
                <button onClick={()=>startAgain()} className="start-again-button">Re-try</button>
            </div>
        </div>
    )
}

export default TryAgain
