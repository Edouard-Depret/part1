const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const Header = (course) => {
    return (
      <h1>
        {course.title}
      </h1>
    )
  }

  const Part = (part) => {
    return (
      <div>
        <p>{part.name} {part.number}</p>
      </div>
    )
  }

  const Content = () => {
    return (
      <div>
        <Part name={part1} number={exercises1}/>
        <Part name={part2} number={exercises2}/>
        <Part name={part3} number={exercises3}/>
      </div>
    )
  }

  const Total =() => {
    return (
      <div>
        <p> Number of exercices: {exercises1 + exercises2 + exercises3}</p>
      </div>
    )
  }


  return (
    <div>
      <Header title={course}/>
      <Content />
      <Total />
    </div>
  )
}

export default App