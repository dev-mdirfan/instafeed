import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'

function App() {

  return (
    <>
        <Navbar />
        <News key="general" />
    </>
  )
}

export default App
