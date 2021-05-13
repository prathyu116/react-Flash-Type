import React from 'react'
import "./TestLetter.css"
const TestLetter = ({testinfoletter}) => {
    const {status} =testinfoletter
    let statusClass;
    // let statusClass={
    //     correct :"test-letter-correct",
    //     incorrect:"test-letter-incorrect",
    //     notattempt:"test-letter-notattempt",
    // }[status]
    //call that dictionary


    if(status==="correct"){
        statusClass="test-letter-correct"
    }else if(status==="incorrect"){
        statusClass="test-letter-incorrect"

    }else{
        statusClass="test-letter-notattempt"

    }

    return (
       <span className={`test-letter ${statusClass}`}>
           {testinfoletter.testLetter}
       </span>
    )
}

export default TestLetter
