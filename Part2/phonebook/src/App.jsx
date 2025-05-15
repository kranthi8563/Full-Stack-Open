import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', num: "9786015243"}
  ]) 
  const [newName, setNewName] = useState('')
  
  const [newNumber,setNewNumber]=useState('')
const addName=(event)=>{
  event.preventDefault()
  if (persons.some(person => person.name === newName) || persons.some(person=>person.num===newNumber)) {
  alert(`${newName} or ${newNumber} is already added to phonebook`);
  return;
}
  setPersons(persons.concat({name : newName,num: newNumber}))
  setNewName("")
  setNewNumber("")
}



  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName} >
        <div>
          name: <input value={newName} onChange={(event)=>setNewName(event.target.value)}/>
        </div>
        <div>number: <input value={newNumber} onChange={(event)=>setNewNumber(event.target.value)}/></div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
   
        {persons.map((person) => <div key={person.name}>{person.name} {person.num}</div>)}
     </div>
    </div>
  )
}

export default App