    const DisplayPerson=({person,onDelete})=>{
        return(
            <div>{person.name} {person.number}   <button onClick={() => onDelete(person.id)}>delete</button> </div>
        )

    }
    export default DisplayPerson
