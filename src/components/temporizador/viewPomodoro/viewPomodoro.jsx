import { useEffect, useState } from 'react'
import './viewPomodoro.scss'
import { secondToTime } from './secondToTime/secondToTime'
import {  useSelector } from 'react-redux'

export const ViewPomodoro = (props) => {
    const times = useSelector((state) => state.Timer)
    
    
    const colors = useSelector((state) => state.Color)

    const  [start, setStart] = useState(false)
    const [btnColor, setBtnColor] = useState('#fff')
    const [timer, setTimer] = useState(times.pomodoroTimer)
    
    // navegacao
    useEffect(() => {
        if (props.type == "pomodoro") {
            setStart(false)
            setBtnColor(colors.pomodoroColor)
        }else if (props.type == "short") {
            setStart(false)
            setBtnColor(colors.shortColor)
        }else {
            setStart(false)
            setBtnColor(colors.longColor)
        }
    }, [props.type, colors])


    useEffect(() => {
        if (props.type == "pomodoro") {
            setTimer(times.pomodoroTimer)
            setStart(false)
        }else if (props.type == "short") {
            setTimer(times.shortTimer)
            setStart(false)
        }else {
            setTimer(times.longTimer)
            setStart(false)
        }
    }, [props.type, times])

    const btn = {
        color: btnColor,
    }

    //timer
    useEffect(() => {
        let startTimer
        if (start && timer > 0) {
            startTimer = setInterval(() => {
                setTimer(prevValor => prevValor - 1) // prevValor pega um valor antigo armazenado no useState
            }, 1000)
        } else if (timer === 0) {
            setStart(false)
            window.alert("Finish your time")
        }
        return () => {
            clearInterval(startTimer)
        }
    }, [start, timer])


    //pausar e iniciar
    const handleStart = () => {
        setStart(true)
    }
    const handlePause = () => {
        setStart(false)
    }


    return (
        <>
            <div className="container-timer">
                <div className="container-timer-timer">
                    <h1>{secondToTime(timer)}</h1>
                </div>
                <div className="container-timer-start">
                    <button onClick={start ? handlePause : handleStart}>
                        <h1 style={btn}>{start ? 'Pause' : 'Start'}</h1>
                    </button>
                </div>
            </div>
        </>
    )
}