import './changingColor.scss'
import { useDispatch } from 'react-redux'
import { setLongColor, setPomodoroColor, setShortColor } from '../../../redux/colorSlice'

export const ChangingColor = ({modalSetting}) => {
    const dispach = useDispatch()
    
    const color = [{
        backgroundColor: '#BA4949',
        opacity: '1',
    },
    {
        backgroundColor: '#609DA1',
        opacity: '1',
    },
    {
        backgroundColor: '#618DAC',
        opacity: '1',
    },
    {
        backgroundColor: '#B6A163',
        opacity: '1',
    },
    {
        backgroundColor: '#7D53A2',
        opacity: '1',
    },
    {
        backgroundColor: '#BF71A7',
        opacity: '1',
    },
    {
        backgroundColor: '#518A58',
        opacity: '1',
    },
    {
        backgroundColor: '#545764',
        opacity: '1',
    },
    ]

    switch (modalSetting) {

        case "pomodoro":
            return (
                <div className="container">
                    {color.map((colorDate, key) => {
                        return <button style={colorDate} onClick={() => dispach(setPomodoroColor(colorDate.backgroundColor))} key={key}/>
                    })}
                    
                </div>
            )
        case "short":
            return (
                <div className="container">
                    {color.map((colorDate, key) => {
                        return <button style={colorDate} onClick={() => dispach(setShortColor(colorDate.backgroundColor))} key={key}/>
                    })}
                </div>
            )
        case "long":
            return (
                <div className="container">
                    {color.map((colorDate, key) => {
                        return <button style={colorDate} onClick={() => dispach(setLongColor(colorDate.backgroundColor))} key={key}/>
                    })}
                </div>
            )
            default:
                return <></>
    }
    
}