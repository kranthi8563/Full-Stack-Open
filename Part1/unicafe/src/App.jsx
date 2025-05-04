import { useState } from 'react'
const Statistics=({good,neutral,bad})=> {
  const total = good+neutral+bad
  let average = (good-bad)/total
  let positive = good*100/total
  if(total===0){
    return(
      <>
      
      <p>FeedBack Not given</p>
      </>
    )
  }
  return(
    <>
    <p>Good {good}</p>
    <p>Neutral {neutral}</p>
    <p>Bad {bad}</p>
    <p>All {total}</p>
    <p>Average {average}</p>
    <p>Positive {positive}</p>
    </>
  )
  
}


const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  

  const clickGood = () => {
    const newGood = good+1
    setGood(newGood)
   
  }
  const clickNeutral = () => {
    const newNeutral = neutral+1
    setNeutral(newNeutral)
  }
   
  const clickBad = () => {
    const newBad = bad+1
    setBad(newBad)
    
  }
  const total = good+bad+neutral
 

  return (
    
    <div>
      <h1>Give Feedback</h1>
      <button onClick={clickGood}>good</button>
      <button onClick={clickNeutral}>Neutral</button>
      <button onClick={clickBad}>Bad</button>
      
      <h1>Statistics</h1>
      <Statistics good = {good} neutral={neutral} bad = {bad}/>
     

    </div>
  )
}

export default App