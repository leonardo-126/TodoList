import { useDispatch, useSelector } from 'react-redux';
import { ButtonSettings } from '../buttonSettings/buttonSettings';
import './SettingsTimer.scss';
import { BiAlarm } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { setLongTimer, setPomodoroTimer, setShortTimer } from '../../../redux/timerSlice';
import { secondToTime } from '../../temporizador/viewPomodoro/secondToTime/secondToTime';

export const SettingsTimer = (props) => {
    const times = useSelector((state) => state.Timer)
    const dispatch = useDispatch()

    const [value, setValue] = useState({
        pomodoro: times.pomodoroTimer,
        short: times.shortTimer,
        long: times.longTimer,
    })

    const [viewTimer, setViewTimer] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e, inputName) => {
        setValue((prevValue) => ({
            ...prevValue,
            [inputName]: Number(e.target.value)
        }))
        switch (inputName) {
            case 'pomodoro':
              setViewTimer('pomodoro');
              break;
            case 'short':
              setViewTimer('short');
              break;
            case 'long':
              setViewTimer('long');
              break;
            default:
              break;
        }
    }
    useEffect(() => {
        // Atualizar apenas o timer selecionado
        if (viewTimer === 'pomodoro') {
          dispatch(setPomodoroTimer(value.pomodoro * 60));
        } else if (viewTimer === 'short') {
          dispatch(setShortTimer(value.short * 60));
        } else if (viewTimer === 'long') {
          dispatch(setLongTimer(value.long * 60));
        }
    }, [value, viewTimer]);


    return (
        <div className='container-st-child-content-timer'>
            <div className="container-st-child-content-timer-title">
                <BiAlarm/><span>TIMER</span>
            </div>
            <form className="container-st-child-content-timer-stminutes" onSubmit={handleSubmit}>
                <h1>Time (minutes)</h1>
                <div className="container-st-child-content-timer-stminutes-setar">
                    <div className="container-st-child-content-timer-stminutes-setar-pomo">
                        <label>
                            Pomodoro
                            <input type="number" 
                            placeholder={secondToTime(value.pomodoro)}
                            onChange={(e) => handleChange(e, 'pomodoro')}
                            
                            />
                        </label>
                    </div>
                    <div className="container-st-child-content-timer-stminutes-setar-pomo">
                        <label>
                            Short Break
                            <input type="number"
                            placeholder={secondToTime(value.short)}
                            onChange={(e) => handleChange(e, 'short')}
                            />
                        </label>
                    </div>
                    <div className="container-st-child-content-timer-stminutes-setar-pomo">
                        <label>
                            Long Break
                            <input type="number"
                            placeholder={secondToTime(value.long)}
                            onChange={(e) => handleChange(e, 'long')}
                            />
                        </label>
                    </div>
                </div>
                <button type='submit'></button>
            </form>
            <div className="container-st-child-content-timer-breaks">
                <h1>Auto Start Breaks</h1>
                <ButtonSettings/>
            </div>
            <div className="container-st-child-content-timer-breaks">
                <h1>Auto Start Pomodoros</h1>
                <ButtonSettings/>
            </div>
        </div>
    )
}