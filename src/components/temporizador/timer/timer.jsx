import { useEffect, useState } from 'react'
import './timer.scss'
import { ViewPomodoro } from '../viewPomodoro/viewPomodoro'
import { useSelector } from 'react-redux'


export const Timer = () => {
    const colorPomodoro = useSelector((state) => state.Color.pomodoroColor)
    const colorShort = useSelector((state) => state.Color.shortColor)
    const colorLong = useSelector((state) => state.Color.longColor)
    const bgColor = document.getElementsByTagName('body')[0]
    const [viewTimer, setViewTimer] = useState("pomodoro")

    useEffect(() => {
        if (viewTimer === "pomodoro") {
            bgColor.style.backgroundColor = colorPomodoro
        } else if (viewTimer === "short") {
            bgColor.style.backgroundColor = colorShort
        } else {
            bgColor.style.backgroundColor = colorLong
        }
    }, [colorPomodoro, colorShort, colorLong, viewTimer])

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