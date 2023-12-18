import { useState } from 'react';
import './SettingsTheme.scss'
import { BiSolidMagicWand } from 'react-icons/bi';
import { ChangingColor } from '../changingColor/changingColor';

export const SettingsTheme = () => {
    const [modalSetting, setModalSetting] = useState(false)

    const modalTongle = () => {
        setModalSetting(!modalSetting)
    }

    
    
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
                        <button onClick={modalTongle}></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
            </div>
        </div>
        {modalSetting ? <ChangingColor setModalSetting={setModalSetting}/> : <></>}
        </>
    )
}