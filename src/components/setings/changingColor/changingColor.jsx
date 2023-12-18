import { useContext, useEffect } from 'react'
import './changingColor.scss'
import MyContext from '../../../MyContext'

export const ChangingColor = (props) => {
    const { colorbg, setColorbg, viewTimer, setViewTimer} = useContext(MyContext);
    const color1 = {
        backgroundColor: '#BA4949',
        opacity: '1',
    }
    const color2 = {
        backgroundColor: '#609DA1',
        opacity: '1',
    }
    const color3 = {
        backgroundColor: '#618DAC',
        opacity: '1',
    }
    const color4 = {
        backgroundColor: '#B6A163',
        opacity: '1',
    }
    const color5 = {
        backgroundColor: '#7D53A2',
        opacity: '1',
    }
    const color6 = {
        backgroundColor: '#BF71A7',
        opacity: '1',
    }
    const color7 = {
        backgroundColor: '#518A58',
        opacity: '1',
    }
    const color8 = {
        backgroundColor: '#545764',
        opacity: '1',
    }
    return (
        <div className="container">
            <button style={color1} onClick={setColorbg("#fff")}/>
            <button style={color2}/>
            <button style={color3}/>
            <button style={color4}/>
            <button style={color5}/>
            <button style={color6}/>
            <button style={color7}/>
            <button style={color8}/>
        </div>
    )
}