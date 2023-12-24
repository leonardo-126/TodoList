import { useState } from 'react'
import './app.scss'
import { Header } from './components/header/header'
import { Navbar } from './components/navbar/navbar'
import MyContext from './MyContext'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  return (
    <>
      <div className="app">
        <Provider store={store}>
          <Navbar/>
          <Header/>
        </Provider>
      </div>
      
    </>
  )
}

export default App
