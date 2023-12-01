import { useState } from "react"
import './todoForm.scss'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value || !category) return;
        addTodo(value, category)
        setCategory("");
        setValue("");
    }

    return (
        <div className="todo-form">
            <h1>Criar tarefa:</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder="Digite o titulo" 
                value={value}
                onChange={(e) => setValue(e.target.value)}/>
                <select onChange={(e) => setCategory(e.target.value)} value={category}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Pessoal">Pessoal</option>
                    <option value="Estudo">Estudo</option>
                </select>
                <button type="submit">Criar</button>
            </form>
        </div>
    )
}