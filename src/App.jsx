import React, { useEffect, useState } from 'react'
import './App.css'
import { Route, BrowserRouter, Routes, Navigate, Outlet } from 'react-router-dom'
import DriverProfile from './pages/DriverProfile'
import { message } from 'antd'
import { onAuthStateChanged } from 'firebase/auth'
import { authentication, db } from './Firebase/firebase-config'
import { doc, getDoc } from 'firebase/firestore/lite'
// import PrivateRoute from './pages/ProtectedRoutes'
const Home = React.lazy(()=>import ("./pages/Home"))
const SignIn = React.lazy(()=>import("./pages/SignIn"))
const CreateUser = React.lazy(()=>import("./pages/SignUp"))

function App() {
  const [authenticated, setAuthenticated] = useState();
  const [checkedAuth, setCheckedAuth] = useState(false);
  const [userRole, setUserRole] = useState(null)
  useEffect(() => {


    async function checkUserRole(uid){
      const docRef = doc(db, "users", uid);
      const data = await getDoc(docRef);
      if (data) {
        const userInfo = data.data();
        setAuthenticated(userInfo);
    }
  }

    // Create an authentication observer
      onAuthStateChanged(authentication, (user) => {
      if (user) {
        // User is signed in.
        
        // setAuthenticated(user);
        checkUserRole(user.uid);
        // You can perform actions for authenticated users here.
      } else {
        // User is signed out.
        // setAuthenticated(null);
          setAuthenticated("unauthorized");
        
        // You can handle the case of a signed-out user here.
      }

      // setCheckedAuth(true);
    });
  }, []);


  return (
    <div className='p-0 m-0'>

    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={< Home />}/>
    <Route exact path='/sign-in' element={< SignIn />}/>
    {authenticated && <Route
        path="/profile"
        element={
          // Is the user a driver?
          (authenticated.role === "driver") ? <DriverProfile auth={authenticated}/> : 
          // Is the user an admin?
          (authenticated.role === "admin") ? <Navigate to="/create-user" state={authenticated}/> :
        //  The user cannot be neither, sign them out.
         <Navigate to="/sign-in" state={{
          message: "You are not signed in",
          route: '/profile'
        }}/>}
      />}

      {authenticated && <Route
        path="/create-user"
        element={authenticated.role === "admin" ? <CreateUser auth={authenticated}/> : 
        (authenticated.role === "driver") ? <Navigate to="/profile" state={authenticated}/> :
        //  The user cannot be neither, sign them out.
         <Navigate to="/sign-in" state={{
          message: "You are not signed in as Admin",
          route: '/create-user'
        }}/>
        }
      />}
    </Routes>
    </BrowserRouter>
    </div>


  )
}

export default App
