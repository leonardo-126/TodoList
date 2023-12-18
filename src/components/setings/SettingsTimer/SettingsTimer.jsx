import { ButtonSettings } from '../buttonSettings/buttonSettings';
import './SettingsTimer.scss';
import { BiAlarm } from 'react-icons/bi';

export const SettingsTimer = (props) => {
    return (
        <div className='container-st-child-content-timer'>
            <div className="container-st-child-content-timer-title">
                <BiAlarm/><span>TIMER</span>
            </div>
            <div className="container-st-child-content-timer-stminutes">
                <h1>Time (minutes)</h1>
                <div className="container-st-child-content-timer-stminutes-setar">
                    <div className="container-st-child-content-timer-stminutes-setar-pomo">
                        <p>Pomodoro</p>
                        <input type="number"/>
                    </div>
                    <div className="container-st-child-content-timer-stminutes-setar-pomo">
                        <p>Short Break</p>
                        <input type="number"/>
                    </div>
                    <div className="container-st-child-content-timer-stminutes-setar-pomo">
                        <p>Long Break</p>
                        <input type="number"/>
                    </div>
                </div>
            </div>
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