import React from 'react'
import TryAgain from '../TryAgain/TryAgain'
import TypingChallengeContainer from '../TypingChallengeContainer/TypingChallengeContainer'
import './TestContainer.css'

const TestContainer = ({SelectedParagraph,words,character,wpm,TimeRemain,TimeStarted}) => {
  
    return (
        <div className="test-container"> 
        {  TimeRemain > 0 ?(
            <div data-aos="fade-up" className="typing-challenge-container">
            <TypingChallengeContainer 
            word={words} character={character} wpm={wpm}
            SelectedParagraph={SelectedParagraph}
            TimeRemain={TimeRemain} TimeStarted={TimeStarted}
            
            />
 
         </div>

        ) :(
            <div data-aos="fade-left" className="try-again-container">
            <TryAgain word={words} character={character} wpm={wpm}/>
        </div>

        )}
          
        
        
        
            
        </div>
    )
}

export default TestContainer
