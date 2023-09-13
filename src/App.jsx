import React from 'react'
import './App.css'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import DriverProfile from './pages/DriverProfile'
const Home = React.lazy(()=>import ("./pages/Home"))
const AboutUs = React.lazy(()=>import("./pages/AboutUs"))
const SignIn = React.lazy(()=>import("./pages/SignIn"))
const CreateUser = React.lazy(()=>import("./pages/SignUp"))

function App() {

  return (
    <div className='p-0 m-0'>

    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={< Home />}/>
    <Route exact path='/sign-in' element={< SignIn />}/>
    <Route exact path='/create-user' element={< CreateUser />}/>
    <Route exact path='/profile' element={< DriverProfile />}/>
    </Routes>
    </BrowserRouter>
    </div>


  )
}

export default App
