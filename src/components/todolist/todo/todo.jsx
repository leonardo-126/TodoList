import './todo.scss'

export const Todo = ({todo, removeTodo, completTodo}) => {
    return (
        <div className="todo-list-todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
            <div className="todo-list-todo-content">
                <div>
                    <h2>{todo.text}</h2>
                    <p className="todo-list-todo-content-category">
                    ({todo.category})
                    </p>
                    <span>Horario de Finalizacao da Tarefa: {todo.time}</span>
                </div>
                <div>
                    <button className="complet" onClick={() => completTodo(todo.id)}>Completar</button>
                    <button className="remove" onClick={() => removeTodo(todo.id)}>x</button>
                </div>
            </div>
        </div>
    )
}