import './settings.scss'
import { AiOutlineClose } from 'react-icons/ai';
import { SettingsTimer } from '../SettingsTimer/SettingsTimer';
import { SettingsTheme } from '../SettingsTheme/SettingsTheme';

export const Settings = (props) => {

    return (
        <>
        <div className="container-st" onClick={props.setModalProps}>
            
        </div>
        <div className="container-st-child">
            <div className="container-st-child-content">
                <div className="container-st-child-content-nav">
                    <h1>Setting</h1>
                    <i><AiOutlineClose onClick={props.setModalProps}/></i>
                </div>
                <SettingsTimer/>
                <SettingsTheme/>

                <div className="container-st-child-content-exit">
                    <button onClick={props.setModalProps}>OK</button>
                </div>
            </div>
        </div>
        </>
    )
}