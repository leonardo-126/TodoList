export const Todo = ({todo}) => {
    return (
        <div className="todo-list-todo">
            <div className="todo-list-todo-content">
                <h2>{todo.text}</h2>
                <p className="todo-list-todo-content-category">
                  {todo.category}
                </p>
                <div>
                    <button className="complet">Completar</button>
                    <button className="remove">x</button>
                </div>
            </div>
        </div>
    )
}