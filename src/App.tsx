import React from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Poke from './components/Poke'

// export interface Student {
//   name: string
//   age: number
// }

// type Student1 = Student & {
//   address: string
// }

// export let student: Student1 = {
//   name: 'daniel',
//   age: 20,
//   address: "tokyo"
// }

// student.name = '30'

// console.log(student)

// const printSomething: () => string[] = () => {
//   let name: string[] = ['asd', 'xyz']
//   return name
// }

// console.log(printSomething())

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="pokemon-header">
          <h1>Pokemon App</h1>
          <Poke />
        </div>
      </div>
    </div>
  )
}

export default App
