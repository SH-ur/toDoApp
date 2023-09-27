import { Todos } from './Todos'
import { useState } from 'react'
const listOfTodos = [
  {
    id: 1,
    title: 'Caminar',
    completed: false
  },
  { id: 2, title: 'Programar una calculadora', completed: false },
  { id: 3, title: 'Make a cake', completed: true }
]

function App (): React.JSX.Element {
  const [todos] = useState(listOfTodos)
  return (
    <div>
      <p>Hola</p>
      <Todos todos={todos}/>
    </div>
  )
}

export default App
