import { useEffect,useState } from 'react'

import Search from './components/search'
import AddPerson from './components/AddPerson'
import DisplayPersons from './components/DisplayPersons'
import personService from "./services/person"


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber]=useState('')
  const [searchTerm, setSearchTerm] = useState([])
  useEffect(() => {
    personService.getAll().then(initialPersons => {
      setPersons(initialPersons)
    })
  }, [])
  
const addName=(event)=>{
  event.preventDefault()
  if (persons.some(person => person.name === newName) || persons.some(person=>person.num===newNumber)) {
  alert(`${newName} or ${newNumber} is already added to phonebook`);
  return;
}
    const personObject = { name: newName, number: newNumber }
     personService.create(personObject).then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName("")
      setNewNumber("")
    })
}
   const handleSearch = (event) => {
        const searchQuery = event.target.value;
        const filteredPersonsArray = persons.filter((person) => person.name.toLowerCase().includes(searchQuery.toLowerCase()))
        setSearchTerm(filteredPersonsArray)
    }
    const onDelete = (id) => {
 const deletePerson = persons.find(person => person.id === id)
    if (confirm(`Delete ${deletePerson.name} ?`)) {

      personService.remove(id).then(returnedPerson => {
        setPersons(persons.filter(person => person.id !== id))
        setSearchResults(searchResults.filter(person => person.id !== id))
      })
    }
}

  return (
    <div>
      <h2>Phonebook</h2>
      
       <div>
      <Search handleSearch={handleSearch} searchResults={searchTerm} onDelete={onDelete} />
      </div>
      <h3>Add a new</h3>
     <AddPerson addName={addName} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} />
      <h2>Numbers</h2>
     <div>
       <DisplayPersons persons={persons} onDelete={onDelete} />
      </div>
    </div>
  )
}

export default App