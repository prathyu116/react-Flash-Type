import React from 'react'
import ChallengeSection from '../ChallengeSection/ChallengeSection'
import Footer from '../Footer/Footer'
import Landing from '../Landing/Landing'
import Nav from '../Nav/Nav'
import './App.css'

const TotalTime=60;

class App extends React.Component{
  state={
    SelectedParagraph:"hello world",
    TimeStarted:false,
    TimeRemain:TotalTime,
    words:4,
    character:4,
    wpm:23
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
        />

        {  /* <Footer Section  /> */}
        <Footer />
      </div>
  )
    
  }
}


export default App
