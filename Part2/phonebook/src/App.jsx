import { useState } from 'react'

import Search from './components/search'
import AddPerson from './components/AddPerson'
import DisplayPersons from './components/DisplayPersons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', num: "9786015243",id:1}
  ]) 
  const [newName, setNewName] = useState('')
  
  const [newNumber,setNewNumber]=useState('')
   const [searchTerm, setSearchTerm] = useState([])
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
   const handleSearch = (event) => {
        const searchQuery = event.target.value;
        const filteredPersonsArray = persons.filter((person) => person.name.toLowerCase().includes(searchQuery.toLowerCase()))
        setSearchTerm(filteredPersonsArray)
    }

  return (
    <div>
      <h2>Phonebook</h2>
      
       <div>
      <Search handleSearch={handleSearch} searchResults={searchTerm} />
      </div>
      <h3>Add a new</h3>
     <AddPerson addName={addName} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} />
      <h2>Numbers</h2>
     <div>
       <DisplayPersons persons={persons} />
      </div>
    </div>
  )
}

export default App