import { useState } from 'react';
import './SettingsTheme.scss'
import { BiSolidMagicWand } from 'react-icons/bi';
import { ChangingColor } from '../changingColor/changingColor';
import { useSelector } from 'react-redux';

export const SettingsTheme = () => {
    const [modalSetting, setModalSetting] = useState("")
    const colorPomodoro = useSelector((state) => state.Color.pomodoroColor)
    const colorShort = useSelector((state) => state.Color.shortColor)
    const colorLong = useSelector((state) => state.Color.longColor)

    return (
        <>
        <div className="container-theme">
            <div className="container-theme-title">
                <BiSolidMagicWand/><span>THEME</span>
            </div>
            <div className="container-theme-content">
                <div className="container-theme-content-color">
                    <h1>Color Themes</h1>
                    <div className='container-theme-content-color-setar'>
                        <button onClick={() => modalSetting == 'pomodoro' ? setModalSetting("") : setModalSetting("pomodoro")} style={{backgroundColor: colorPomodoro}}></button>
                        <button onClick={() => modalSetting == 'short' ? setModalSetting("") : setModalSetting("short")} style={{backgroundColor: colorShort}}></button>
                        <button onClick={() => modalSetting == 'long' ? setModalSetting("") : setModalSetting("long")} style={{backgroundColor: colorLong}}></button>
                    </div>
                </div>
            </div>
        </div>
        {modalSetting ? <ChangingColor modalSetting={modalSetting}/> : <></>}
        </>
    )
}