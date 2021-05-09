import React from 'react'
import './TryAgain.css'

const TryAgain = ({word,character,wpm}) => {
    return (
        <div className="try-again-container">
            <h1>test result</h1>
            <div className="result-container">
                <p>
                    <b>Character=</b>{character}
                </p>
                <p>
                    <b>Word=</b>{word}
                </p>
                <p>
                    <b>wpm=</b>{wpm}
                </p>


            </div>
            <div>
                <button className="start-again-button">Re-try</button>
            </div>
        </div>
    )
}

export default TryAgain
