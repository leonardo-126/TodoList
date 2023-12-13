import { Timer } from "../temporizador/timer/timer"
import { Body } from "../todolist/body/body"
import "./header.scss"
import { useEffect, useState } from "react"

export const Header = () => {
    const [view, setView] = useState("Timer")
    const [component, setComponent] = useState(null)
    useEffect(() => {
        if(view === "Todolist"){
            setComponent(<Body/>)
        }
        if(view === "Timer"){
            setComponent(<Timer/>)
        }
    }, [view])

    return (
        <div className="header">
            <div className="navBar">
                <button 
                active={view == "Timer" ? "true" : "false" }
                onClick={() => {
                    setView("Timer")
                }}><span>Timer</span></button>
                <button 
                active={view == "Todolist" ? "true" : "false" } 
                onClick={() => {
                  setView("Todolist")
                }}><span>TodoList</span></button>
                
            </div>
            {component}
            
        </div>
    )
}