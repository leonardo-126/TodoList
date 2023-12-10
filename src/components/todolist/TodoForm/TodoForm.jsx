import { useState } from "react"
import './todoForm.scss'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")
    const [time, setTime] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!value || !category || !time) return;
        addTodo(value, category, time)
        setCategory("");
        setValue("");
        setTime("")
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
                <label>Horario para Finalização:</label>
                <input 
                type="time" 
                value={time}
                onChange={(e) => setTime(e.target.value)}
                min="00:00" 
                max="23:59"/>
                <button type="submit">Criar</button>
            </form>
        </div>
    )
}