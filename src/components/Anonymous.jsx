import React from 'react'
import {Outlet, Navigate} from 'react-router-dom'

const Anonymous = () => {
//   const user = JSON.parse(localStorage.getItem("persist:root"))?.auth;
//   const currentUser = user && JSON.parse(user).currentUser;
//   const TOKEN = currentUser?.acessToken;
//   const ADMIN = currentUser?.isAdmin;
    const ADMIN = false
  
  
    return (
      ADMIN ? <Navigate to="/" replace /> : <Outlet />
    )
}

export default Anonymous