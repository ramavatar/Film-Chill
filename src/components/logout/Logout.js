import React from 'react'
import Login from '../login/Login'

export default function Logout() {
    return (
        <div>
            {localStorage.clear()}
           <Login/> 
           {window.location.reload}
        </div>
    )
}
