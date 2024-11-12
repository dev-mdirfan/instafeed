import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';

function App() {
  const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  return (
    <>
    <Router basename="/">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News key="null" apiKey={API_KEY} category="null" />}></Route>
          <Route exact path='/top' element={<News key="general" apiKey={API_KEY} category="general" />}></Route>
          <Route exact path='/sports' element={<News key="sports" apiKey={API_KEY} category="sports" />}></Route>
          <Route exact path='/entertainment' element={<News key="entertainment" apiKey={API_KEY} category="entertainment" />}></Route>
          <Route exact path='/technology' element={<News key="technology" apiKey={API_KEY} category="technology" />}></Route>
          <Route exact path='/politics' element={<News key="politics" apiKey={API_KEY} category="politics" />}></Route>
          <Route exact path='/health' element={<News key="health" apiKey={API_KEY} category="health" />}></Route>
          <Route exact path='/science' element={<News key="science" apiKey={API_KEY} category="science" />}></Route>
          <Route exact path='/business' element={<News key="business" apiKey={API_KEY} category="business" />}></Route>
          <Route exact path='/about' element={<About key="about" />}></Route>
        </Routes>
    </Router>
    </>
  )
}

export default App
