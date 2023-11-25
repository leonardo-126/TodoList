import { useState } from "react"

export const TodoForm = () => {
    const [value, setValue] = useState("")
    const [category, setCategory] = useState("")

    return (
        <div className="todo-form">
            <h1>Criar tarefa:</h1>
            <form>
                <input type="text" placeholder="Digite o titulo" />
                <select name="" id="">
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