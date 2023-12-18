import { useState } from 'react'
import './buttonSettings.scss'

export const ButtonSettings = () => {
    const [button, setButton] = useState(false)

    const toggleButton = () => {
        setButton(!button)
    }

    //button 1
    const bgstyleBtn = {
        backgroundColor: button ? '#9DD25C' : '',
        justifyContent: button ? 'flex-end' : 'flex-start',
    }

    return (
        <div className="button-settings" style={bgstyleBtn} onClick={toggleButton}>
            <button/>
        </div>
    )
}