import DisplayPerson from "./DisplayPerson"

const Search = ({ searchResults, handleSearch ,onDelete}) => {
    return (
        <div>
            <div>Filter shown with <input onChange={handleSearch} /></div>
            <div>{searchResults.map(person => <DisplayPerson key={person.id} person={person} onDelete={onDelete}/>)}</div>
        </div>
    )
}

export default Search