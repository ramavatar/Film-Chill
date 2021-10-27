import React from 'react'
import Login from '../login/Login'
import Header from '../header/Header'
export default function Logout() {
    return (
        <>
            <div>
                {localStorage.clear()}
                <Login />
            </div>
        </>
    )
}
