import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', num: "9786015243"}
  ]) 
  const [newName, setNewName] = useState('')
  
  const [newNumber,setNewNumber]=useState('')
   const [searchTerm, setSearchTerm] = useState('')
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
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    person.num.includes(searchTerm)
  )


  return (
    <div>
      <h2>Phonebook</h2>
       <div>
        <h3>Search</h3>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by name or number"
        />
      </div>
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
        {filteredPersons.map(person => (
          <div key={person.name}>{person.name} {person.num}</div>
        ))}
      </div>
    </div>
  )
}

export default App