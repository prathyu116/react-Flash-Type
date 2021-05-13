import React from 'react'
import TestLetter from '../TestLetter/TestLetter';
import './RealTypingChallenge.css'

const RealTypingChallenge = ({selectedparagraph,TimeStarted,TimeRemain,testInfo,onInputChange}) => {
    // console.log('inside real typing challenge =>',testInfo);
    
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
                        {/* {selectedparagraph} */}
                        {
                            testInfo.map((individualLetter,index)=>{
                              return <TestLetter key={index} testinfoletter={individualLetter}/> 
                            })
                        }
                    </div>
                    
                </div>
                <div className="right-text-area">
                    <textarea className="textarea" placeholder="start typing here"  onChange ={(e)=>onInputChange(e.target.value)}>
                       

                    </textarea>
                    
                </div>
            </div>
            
        </div>
    )
}

export default RealTypingChallenge
