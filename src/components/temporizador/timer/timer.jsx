import { useEffect, useState } from 'react'
import './timer.scss'
import { ViewPomodoro } from '../viewPomodoro/viewPomodoro'

export const Timer = () => {
    const [viewTimer, setViewTimer] = useState("pomodoro")
    const bgColor = document.getElementsByTagName('body')[0]
    useEffect(() => {
        if (viewTimer === "pomodoro") {
            bgColor.style.backgroundColor = 'rgb(57, 112, 151)'
        } else if (viewTimer === "short") {
            bgColor.style.backgroundColor = '#7D53A2'
        } else {
            bgColor.style.backgroundColor = '#BA4949'
        }
    }, [viewTimer])

    return (
        <div className="timer-container">
            <div className="timer-nav">
                <button active={viewTimer == "pomodoro" ? "true" : "false"} onClick={() => {
                    setViewTimer('pomodoro')
                }}>Pomodoro</button>
                <button active={viewTimer == "short" ? "true" : "false"} onClick={() => {
                    setViewTimer('short')
                }}>Short Break</button>
                <button active={viewTimer == "long" ? "true" : "false"} onClick={() => {
                    setViewTimer('long')
                }}>Long Break</button>
            </div>
            <ViewPomodoro type={viewTimer} />
        </div>
    )
}