import React from 'react'
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard'
import RealTypingChallenge from '../RealTypingChallenge/RealTypingChallenge'
import './TypingChallengeContainer.css'

const TypingChallengeContainer = ({word ,character,wpm,SelectedParagraph,TimeRemain,TimeStarted}) => {
    return (
        <div className="typing-challenge-container">

            {/* Details Section */}
            <div className="detail-section-container">
                     {/* words */}
                     <ChallengeDetailsCard cardname="words" cardvalue={word}/>

                     {/*Character */}
                     <ChallengeDetailsCard cardname="characters" cardvalue={character}/>

                     {/* wpm */}
                     <ChallengeDetailsCard cardname="speed" cardvalue={wpm}/>

            </div>
            {/*REAL CHALLENGE */}
            <div className="real-challenge-section">
                <RealTypingChallenge TimeRemain={TimeRemain} TimeStarted={TimeStarted} selectedparagraph={SelectedParagraph} />
                

            </div>
            
        </div>
    )
}

export default TypingChallengeContainer
