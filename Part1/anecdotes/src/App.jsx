import { useState } from 'react'

const randomNumber = () => {
  return Math.floor(Math.random() * 8)
}

const mostVotes = (votes)=>{
  let max = 0
    let maxIndex = 0
    for (let i = 0; i < votes.length; i++) {
        if (votes[i] >= max) {
            max = votes[i]
            maxIndex = i
        }
    }
    return maxIndex

}




const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(randomNumber(anecdotes.length))
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [mostVoted, setMostVoted] = useState(0)
  const voteHere = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
    setMostVoted(mostVotes(newVotes))
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
     <div> {anecdotes[selected]} </div>
    <div> <p>has {votes[selected]} votes</p></div>
     <button onClick={voteHere}>Vote</button>

      <button onClick={() => setSelected(randomNumber())}>Next Anecdote</button>
      <h2>Anecdote with most votes</h2>
      <div>{anecdotes[mostVoted]}</div>
      <div>has {votes[mostVoted]} votes</div>
     
    </div>
  )
}

export default App