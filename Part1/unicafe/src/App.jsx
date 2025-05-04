import { useState } from 'react'
const Statistics=(props)=> {
  return(
    <>
    <p>Good {props.good}</p>
    <p>Neutral {props.neutral}</p>
    <p>Bad {props.bad}</p>
    <p>All {props.all}</p>
    <p>Average {props.average}</p>
    <p>Positive {props.positive}</p>
    </>
  )
  
}


const App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all,setAll] = useState(0)
  

  const clickGood = () => {
    const newGood = good+1
    setGood(newGood)
    setAll(newGood+neutral+bad)
  }
  const clickNeutral = () => {
    const newNeutral = neutral+1
    setNeutral(newNeutral)
    setAll(good+newNeutral+bad)
  }
  const clickBad = () => {
    const newBad = bad+1
    setBad(newBad)
    setAll(good+neutral+newBad)
  }
  const total = good+bad+neutral
  let average = (good - bad)/total
  let positive = good*100/total
  if(total===0){
    average = 0
    positive = 0
  }

  return (
    
    <div>
      <h1>Give Feedback</h1>
      <button onClick={clickGood}>good</button>
      <button onClick={clickNeutral}>Neutral</button>
      <button onClick={clickBad}>Bad</button>
      
      <h1>Statistics</h1>
      <Statistics good = {good} neutral={neutral} bad = {bad} all = {all} average = {average} positive = {positive}/>
     

    </div>
  )
}

export default App