const DisplayPerson=({person,onDelete})=>{
    return(
        <div>{person.name} {person.num}   <button onClick={() => onDelete(person.id)}>delete</button> </div>
    )

}
export default DisplayPerson
