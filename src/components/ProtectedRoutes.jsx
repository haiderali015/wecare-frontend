import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Signin from './Signin';


// const useAuth =()=>{
//     const user = {loggedIn: false}
//     return user && user.loggedIn;
// }

// const ProtectedRoutes = () => {
//     const isAuth =useAuth();
//   return isAuth ? <Outlet/> : <Signin/>
// }

// export default ProtectedRoutes




const useAuth =()=>{
    const user = {loggedIn: false}
    return user && user.loggedIn;
}

const ProtectedRoutes = (props) => {
    const {Component} =props;
    const navigate=useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem("login");
        if(!login)
        {
            navigate('/signin')
        }
    })



  return (
    <div><Component/></div>
  )
}

export default ProtectedRoutes