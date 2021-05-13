import React from 'react'
import TryAgain from '../TryAgain/TryAgain'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer'
import './TestContainer.css'

const TestContainer = ({SelectedParagraph,words,character,wpm,TimeRemain,TimeStarted,testInfo,onInputChange,startAgain}) => {
  
    return (
        <div className="test-container"> 
        {  TimeRemain > 0 ?(
            <div data-aos="fade-up" className="typing-challenge-container">
            <TypingChallengeContainer 
            word={words} character={character} wpm={wpm}
            SelectedParagraph={SelectedParagraph}
            TimeRemain={TimeRemain} TimeStarted={TimeStarted}
            testInfo={testInfo}
            onInputChange={onInputChange}
            
            />
 
         </div>

        ) :(
            <div className="try-again-container">
            <TryAgain startAgain={startAgain} word={words} character={character} wpm={wpm}/>
        </div>

        )}
          
        
        
        
            
        </div>
    )
}

export default TestContainer
