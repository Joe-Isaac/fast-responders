import React from 'react'
import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
const Home = React.lazy(()=>import ("./pages/Home"))
const AboutUs = React.lazy(()=>import("./pages/AboutUs"))

function App() {

  return (
    <div className='p-0 m-0'>

    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={< Home />}/>
    <Route exact path='/about-us' element={< AboutUs />}/>
    </Routes>
    </BrowserRouter>
    </div>


  )
}

export default App
