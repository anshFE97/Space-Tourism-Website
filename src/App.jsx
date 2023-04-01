import './app.css'
import Destination from './pages/destination/Destination'
import Home from './pages/home/Home'
import Crew from './pages/crew/Crew'
import Technology from './pages/technology/Technology'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'


function App() {
  const [navBar, setNavBar] = useState(false)

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home navBar={navBar} setNavBar={setNavBar} />} />
        <Route path="/destination" element={<Destination navBar={navBar} setNavBar={setNavBar} />} />
        <Route path="/crew" element={<Crew navBar={navBar} setNavBar={setNavBar} />} />
        <Route path="/technology" element={<Technology navBar={navBar} setNavBar={setNavBar} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
