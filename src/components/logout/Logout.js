import React from 'react'
import Login from '../login/Login'
import Header from '../header/Header'
export default function Logout() {
    return (
        <>
            <div>
                {/* deleting the loged in details from local storage */}
                {localStorage.clear()}
                <Login />
            </div>
        </>
    )
}
