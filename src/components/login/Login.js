import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/Header';

export default function Login() {
   const history = useHistory()
   const [UserName, setUserName] = useState('')
   const [Password, setPassword] = useState('')
   var cout = 0;
   const LoginHandeller = () => {
      if(UserName==""){
         document.getElementById("invalid").innerHTML = "Enter UserName";
      }
      else if(Password==""){
         document.getElementById("invalid").innerHTML = "Enter Password";
      }
      else{
      fetch("http://localhost:3001/register")
         .then(res => res.json())
         .then(data => {
            console.log(data)
            data.map(item => {
               if (item.username === UserName && item.password === Password) {
                  cout = cout + 1;
                  localStorage.setItem('token', UserName);
                  history.push('/favorites');
               }
            })
            if (cout === 0) {
               document.getElementById("invalid").innerHTML = "Invalid UserName & Password !";
               localStorage.clear();
            }
         })
      }
   }
   return (
      <>
         <Header />
         <div className="container mt-4">
            <div className="row">
               <div className="col-md-4 offset-md-4">
                  <h1 className="mb-4 mt-4">Login</h1>
                  <p id="invalid" style={{ color: 'red' }}></p>
                  <div className="mb-4">
                     <label>UserName</label>
                     <input type="text" id="username" onChange={(e) => setUserName(e.target.value)} className="form-control" placeholder="UserName" />
                  </div>
                  <div className="mb-4">
                  <label>Password</label>
                     <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                  </div>
                  <div className="mb-4">
                     <button id="buttonLogin" onClick={LoginHandeller} className="btn btn-info col-12" >Click for Login</button>
                  </div>
                  <div className="mb-4">
                     <label className="m-2">if not a Registered User</label><a className="m-2" style={{ textDecoration: 'none' }} href="/register">Register</a>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}