import React from 'react'
import ChallengeSection from '../ChallengeSection/ChallengeSection'
import Footer from '../Footer/Footer'
import Landing from '../Landing/Landing'
import Nav from '../Nav/Nav'

import { SAMPLE_PARAGRAPHS } from "../../data/sampleParagraph";

import './App.css'

const TotalTime=60;
const URL='http://metaphorpsum.com/paragraphs/1/9'
const defaultState ={
  SelectedParagraph:"hello world",
  TimeStarted:false,
  TimeRemain:TotalTime,
  words:0,
  character:0,
  wpm:0,
  testInfo:[]
}
class App extends React.Component{
  state=defaultState;

  fetchNewParagraphFallback = () => {
    const data =
    SAMPLE_PARAGRAPHS[
        Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)
    ];
    const SelectedParagraphArray = data.split("")
  
    const testInfo= SelectedParagraphArray.map((selectedLetter)=>{
      return {
        testLetter:selectedLetter,
        status:"not attempted"
      }
    })
    this.setState({...defaultState, testInfo,SelectedParagraph:data})
};


  fetchNewPara = ()=>{
    fetch(URL).then((response)=>response.text()).then((data)=>{
    
      const SelectedParagraphArray = data.split("")
  
  const testInfo= SelectedParagraphArray.map((selectedLetter)=>{
    return {
      testLetter:selectedLetter,
      status:"not attempted"
    }
  })
  this.setState({...defaultState, testInfo,SelectedParagraph:data})
    })
  
  

  }

componentDidMount(){
  this.fetchNewParagraphFallback()
  

}
startTimer = () =>{
  this.setState({
    TimeStarted:true
  })
const timer = setInterval(()=>{
  if (this.state.TimeRemain >0){
    //change In WPM
    const timeSpent = TotalTime - this.state.TimeRemain
    const wpm = timeSpent > 0 ? (this.state.words/timeSpent)* TotalTime : 0
    this.setState({
      TimeRemain:this.state.TimeRemain - 1,
      wpm:parseInt(wpm)
    })

  }else{
    clearInterval(timer)
  }
 

}, 1000)

};
startAgain = () =>this.fetchNewParagraphFallback()
userHandleInput =(inputvalue)=>{
 if(!this.state.TimeStarted) this.startTimer();

 const  character=inputvalue.length;
 const words=inputvalue.split(" ").length;
 const index =character - 1;
 if(index < 0){
   this.setState({
     testInfo:[
       {
         testLetter:this.state.testInfo[0].testLetter,
         status:"not attempted"
       },
       ...this.state.testInfo.slice(1),
     ],
     character,
     words
   });
   return;
 }
 if (index >= this.state.SelectedParagraph.length){
   this.setState({character,words});
   return;

 }
 //make the copy of test info
 const testInfo = this.state.testInfo;
 if(!(index===this.state.SelectedParagraph.length - 1)){
   testInfo[index+1].status="not attempted";

   //check for correct typed letter
   const isCorrect = inputvalue[index]===testInfo[index].testLetter;
   //update the testInfo
   testInfo[index].status=isCorrect ? "correct" :"incorrect";
   //update state
   this.setState({
     testInfo,
     words,
     character
   })

 }
}

  render(){
 
  
    return (
      <div className="App">
         <Nav />
        {  /* <Landing page/>  */}
        <Landing />

        {  /* <Challenge Section/>  */}
        <ChallengeSection 
        SelectedParagraph={this.state.SelectedParagraph}
        words={this.state.words}
        character={this.state.character}
        speed={this.state.wpm}
        TimeRemain={this.state.TimeRemain}
        TimeStarted={this.state.TimeStarted}
        testInfo={this.state.testInfo}
        onInputChange={this.userHandleInput}
        startAgain={this.startAgain}
        />

        {  /* <Footer Section  /> */}
        <Footer />
      </div>
  )
    
  }
}


export default App
