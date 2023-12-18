import { useState } from 'react'
import './app.scss'
import { Header } from './components/header/header'
import { Navbar } from './components/navbar/navbar'
import MyContext from './MyContext'

function App() {
  const [colorbg, setColorbg] = useState('rgb(57, 112, 151)')
  const [viewTimer, setViewTimer] = useState("pomodoro")
  
  return (
    <>
      <div className="app">
        <MyContext.Provider value={{colorbg, setColorbg, viewTimer, setViewTimer}}>
          <Navbar/>
          <Header/>
        </MyContext.Provider>
      </div>
      
    </>
  )
}

export default App
