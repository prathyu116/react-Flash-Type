import React from 'react'
import TestContainer from '../TestContainer/TestContainer'
import './ChallengeSection.css'

const ChallengeSection = ({SelectedParagraph,words,character,speed,TimeRemain,TimeStarted,testInfo,onInputChange,startAgain}) => {
    return (
        <div className="challenge-section-container">
            
                <h1 data-aos="fade-down" className="challenge-section-header" >Take a Speed test Now!!</h1>
                <TestContainer 

                words={words} 
                character={character} 
                wpm={speed}
                SelectedParagraph={SelectedParagraph}
                TimeRemain={TimeRemain}
                TimeStarted={TimeStarted}
                testInfo={testInfo}
                onInputChange={onInputChange}
                startAgain={startAgain}
                
                />

          
            
        </div>
    )
}

export default ChallengeSection
