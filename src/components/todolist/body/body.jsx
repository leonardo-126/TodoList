import { useState } from "react"
import "./body.scss"
import { Todo } from "../todo/todo"
import { TodoForm } from "../TodoForm/TodoForm"
import { Search } from "../Search/Search"
import { Filter } from "../filter/filter"

export const Body = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Crie suas tarefas aqui",
      category: "Pessoal",
      isCompleted: false,
      time: 12,
    },
  ])

  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("All")
  const [sort,setSort] = useState("Asc")

  const addTodo = (text, category, time) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
      time,
    }]
    setTodos(newTodos);
  }
  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => 
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  }
  const completTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted: todo)
    setTodos(newTodos)
    console.log({todos})
  }
    return (
        
        <div className="app">
          <div className="todo">
            <h1>Lista de Tarefas</h1>
            <Search search={search} setSearch={setSearch}/>
            <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
            <div className="todo-list">
              {todos
                .filter((todo) =>
                  filter === "All"
                    ? true 
                    : filter === "Completed"
                    ? todo.isCompleted
                    : !todo.isCompleted
                )
                .filter((todo) => 
                  todo.text.toLowerCase().includes(search.toLowerCase())
                )
                .sort((a, b) => 
                  sort == "Acs" 
                    ? a.text.localeCompare(b.text)
                    : b.text.localeCompare(a.text)
                )
                
                .map((todo) => (
                <Todo 
                  key={todo.id} 
                  todo={todo} 
                  completTodo={completTodo} 
                  removeTodo={removeTodo}
                />
              ))}
            </div>
            <TodoForm addTodo={addTodo}/>
          </div>
        </div>
    )
}