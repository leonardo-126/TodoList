import { useEffect, useState } from 'react'
import './viewPomodoro.scss'
import { secondToTime } from './secondToTime/secondToTime'

export const ViewPomodoro = (props) => {

    const [time, setTime] = useState(1500) 
    const  [start, setStart] = useState(false)
    const [btnColor, setBtnColor] = useState('#fff')
    

    // navegacao
    useEffect(() => {
        if (props.type == "pomodoro") {
            setTime(1800)
            setStart(false)
            setBtnColor('rgb(57, 112, 151)')
        }else if (props.type == "short") {
            setTime(300)
            setStart(false)
            setBtnColor('#7D53A2')
        }else {
            setTime(3600)
            setStart(false)
            setBtnColor('#BA4949')
        }
    }, [props.type])

    const btn = {
        color: btnColor,
    }

    //timer
    useEffect(() => {
        let startTimer
        if (start && time > 0) {
            startTimer = setInterval(() => {
                setTime(prevValor => prevValor - 1) // prevValor pega um valor antigo armazenado no useState
            }, 1000)
        } else if (time === 0) {
            setStart(false)
            window.alert("Finish your time")
        }
        return () => {
            clearInterval(startTimer)
        }
    }, [start, time])


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
                    <h1>{secondToTime(time)}</h1>
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