import DisplayPerson from "./DisplayPerson";

const DisplayPersons=({persons,onDelete})=>{
    return(
        <div>
            <div>
                 {persons.map((person) => <DisplayPerson key={person.id} person={person} onDelete={onDelete}/>)}
            </div>
        </div>
    )

}
export default DisplayPersons;