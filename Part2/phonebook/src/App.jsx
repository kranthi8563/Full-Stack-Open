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
  const updatePerson = (personExists) => {
    const updatedPerson = { ...personExists, number: newNumber }
    personService.update(updatedPerson.id, updatedPerson).then(returnedPerson => {
      setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person))
    })
    setNewName("")
    setNewNumber("")
  }
  const createPerson = () => {
   const personObject = { name: newName, number: newNumber }
     personService.create(personObject).then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
      setNewName("")
      setNewNumber("")
    })
   
  }
  
const addName=(event)=>{
  event.preventDefault()
    if (newName.length === 0 || newNumber.length === 0) {
      alert("Empty name or number. Please fill all the details.")
      return;
    }
    const personExists = persons.find((person) => person.name.toLowerCase() == newName.toLowerCase())
    if (personExists) {
      if (!confirm(`${personExists.name} is already added to phonebook, replace the old number with a new one?`)) {
        setNewName("")
        setNewNumber("")
        return; 
      }
      updatePerson(personExists)
      return;
    }
    createPerson()
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
        setSearchTerm(searchTerm.filter(person => person.id !== id))
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
    
       <DisplayPersons persons={persons} onDelete={onDelete} />
      
    </div>
  )
}

export default App