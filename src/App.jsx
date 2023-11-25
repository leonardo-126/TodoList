import { useState } from "react"
import './app.scss'
import { Todo } from "./components/todo"
import { TodoForm } from "./components/TodoForm"


function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir pra academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudo",
      isCompleted: false,
    },
  ])
  return (
    <>
      <div className="todo">
        <h1>Lista de Tarefas</h1>
        <div className="todo-list">
          {todos.map((todo) => (
            <Todo todo={todo} />
          ))}
        </div>
        <TodoForm/>
      </div>
    </>
  )
}

export default App
