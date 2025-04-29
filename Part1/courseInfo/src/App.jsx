const Header = (props) => (
  <h1>{props.courseName}</h1>
)

const Part = (props) => (
  <>
  <p>{props.part.name} {props.part.exercises}</p>
  </>
)

const Content = (props) => (
  <>
  <Part part = {props.part[0]}  />
  <Part part = {props.part[1]}  />
  <Part part = {props.part[2]}  />
 
  </>
)

const Total = (props) => (
  <>
  <p>Total number of exercises are {props.part[0].exercises + props.part[1].exercises + props.part[2].exercises}</p>
  </>
)



  const App = () => {
    const course = 'Half Stack application development'
    const parts = [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]

  return (
    <div>
      <Header courseName={course}/>

      <Content part={parts}/>
      <Total part={parts}/>
    </div>
  )
}

export default App