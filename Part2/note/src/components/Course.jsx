const Header = (props)=>{
  return(
    <h2>{props.course}</h2>
  )
}
const Content = ({parts})=>(
  <>
  {parts.map((part)=>(
    <Part key = {part.id} part={part}/>
  ))}
  
  </>
)
const Part = (props)=>{
  return(
  <p>{props.part.name} {props.part.exercises}</p>
  )
}
const Total = (props) =>{
  return(
    <p><b>total of {props.parts} exercises</b></p>
  )
}

const Course = ({ courses }) => {
    return (
        <div>
            {courses.map((course) => {
                return (
                    <div key={course.id}>
                        <Header course={course.name} />
                        <Content parts={course.parts} />
                        <Total
                            total={course.parts.reduce((sum, part) => part.exercises + sum, 0)}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Course