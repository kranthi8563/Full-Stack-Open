import { useState } from 'react'

const Button=(props)=> <button onClick={props.onClick}>{props.text}</button>

const Statistical=(props)=>{
  return(
  <tr>
  <td>{props.text}</td> 
  <td>{props.value}</td>
  </tr>
  )
}
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
    <table>
      <tbody>
   <Statistical text = "Good" value={good} />
   <Statistical text = "Neutral" value={neutral} />
   <Statistical text = "Bad" value={bad} />
   <Statistical text = "All" value={total} />
   <Statistical text = "Average" value={average} />
   <Statistical text = "Positive" value={positive+"%"} />
   </tbody>
    </table>
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
      <Button onClick={clickGood} text="Good"/>
      <Button onClick={clickNeutral} text="Neutral"/>
      <Button onClick={clickBad} text="Bad"/>
      
      <h1>Statistics</h1>
      <Statistics good = {good} neutral={neutral} bad = {bad}/>
     

    </div>
  )
}

export default App