import React from 'react'
import './RealTypingChallenge.css'

const RealTypingChallenge = ({selectedparagraph,TimeStarted,TimeRemain}) => {
    return (
        <div className="typing-challenge">
            <div className="timer-container">
                <p className="timer">00:{
                    TimeRemain >=10 ? TimeRemain : `0${TimeRemain}`
                }</p>
                <p className="timer-info">{!TimeStarted ? "start typing to start the test" :" started....."}</p>
            </div>
            <div className="text-area-container">
                <div className="left-text-area">
                    <div className="textarea test-paragraph">
                        {selectedparagraph}
                    </div>
                    
                </div>
                <div className="right-text-area">
                    <textarea className="textarea" placeholder="start typing here" >

                    </textarea>
                    
                </div>
            </div>
            
        </div>
    )
}

export default RealTypingChallenge
