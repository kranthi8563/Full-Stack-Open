import { useEffect,useState } from 'react'

import Search from './components/search'
import AddPerson from './components/AddPerson'
import DisplayPersons from './components/DisplayPersons'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber]=useState('')
  const [searchTerm, setSearchTerm] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then(response => {
      setPersons(response.data)
    })
  }, [])
const addName=(event)=>{
  event.preventDefault()
  if (persons.some(person => person.name === newName) || persons.some(person=>person.num===newNumber)) {
  alert(`${newName} or ${newNumber} is already added to phonebook`);
  return;
}
    const personObject = { name: newName, number: newNumber }
    axios.post("http://localhost:3001/persons", personObject).then(response => {
      setPersons(persons.concat(response.data))
      setNewName("")
      setNewNumber("")
    })
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