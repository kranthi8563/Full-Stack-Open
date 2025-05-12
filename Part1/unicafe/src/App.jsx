import { useState } from 'react'
<<<<<<< HEAD
=======

const Button=(props)=> <button onClick={props.onClick}>{props.text}</button>

const Statistical=(props)=>{
  return(
  <tr>
  <td>{props.text}</td> 
  <td>{props.value}</td>
  </tr>
  )
}
>>>>>>> 0b89732f0fb297c121711dff110f5f5e2daf5069
const Statistics=({good,neutral,bad})=> {
  const total = good+neutral+bad
  let average = (good-bad)/total
  let positive = good*100/total
  if(total===0){
    return(
      <>
<<<<<<< HEAD
      <h1>Statistics</h1>
=======
>>>>>>> 0b89732f0fb297c121711dff110f5f5e2daf5069
      <p>FeedBack Not given</p>
      </>
    )
  }
  return(
    <>
<<<<<<< HEAD
    <p>Good {good}</p>
    <p>Neutral {neutral}</p>
    <p>Bad {bad}</p>
    <p>All {total}</p>
    <p>Average {average}</p>
    <p>Positive {positive}</p>
=======
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
>>>>>>> 0b89732f0fb297c121711dff110f5f5e2daf5069
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