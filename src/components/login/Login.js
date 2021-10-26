import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Login() {
   const history = useHistory()
    const [UserName, setUserName] = useState('')
    const [Password, setPassword] = useState('')
    var cout = 0;
    const LoginHandeller=()=>{
      fetch("http://localhost:3001/register")
      .then(res=>res.json())
      .then(data=>{
         console.log(data) 
         data.map(item=>{
            if(item.username == UserName && item.password == Password){
               cout = cout + 1 ;
               history.push('/movies')
            }
         })
         if(cout==0){
            alert("Invalid userName or Password !")
         }
      }
      )
   }
    return (
        <div className="container mt-4">
             <div className="row">
             <div className="col-md-4 offset-md-4">
             <h1 className="mb-4 mt-4">Login</h1>
            <div className="mb-4">
               <input type="text" id="username" onChange={(e)=>setUserName(e.target.value)} className="form-control" placeholder="UserName"/>
            </div>
            <div className="mb-4">
               <input type="password" id="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="Password"/>
            </div>
            <div className="mb-4">
              <button id="buttonLogin" onClick={LoginHandeller} className="btn btn-info col-12" >Click for Login</button>
            </div>
            <div className="mb-4">
               <label className="ml-4">if not a Registered User</label><a className="ml-4" href="/register">Register</a>
            </div>
            </div>
            </div>
        </div>
    )
}