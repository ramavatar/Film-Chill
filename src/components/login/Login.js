import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/Header';

export default function Login() {
   const history = useHistory()
   const [Email, setEmail] = useState('')
   const [Password, setPassword] = useState('')

   var cout = 0;
   const LoginHandeller = () => {
      if (Email == "") {
         document.getElementById("invalid").innerHTML = "Enter UserName";
      }
      else if (Password == "") {
         document.getElementById("invalid").innerHTML = "Enter Password";
      }
      else {
         fetch("http://localhost:3001/register")
            .then(res => res.json())
            .then(data => {
               console.log(data)
               data.map(item => {
                  if (item.email === Email && item.password === Password) {
                     cout = cout + 1;
                     localStorage.setItem('token', Email);
                     history.push('/movies');
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
               <div className="col-sm-12 md-6 col-lg-6 mt-4">
                  <img src="https://ck12live.s3.ap-south-1.amazonaws.com/user/5f688627ac992228651c21b1/classroom/original/1607234971537-login.png" alt="No image found" style={{width:'100%'}} />
               </div>
               <div className="col-sm-12 md-6 col-lg-5"> 
                  <h1 className="mb-4 mt-4">Login</h1>
                  <p id="invalid" style={{ color: 'red' }}></p>
                  <div className="mb-4">
                     <label>UserName</label>
                     <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="UserName" />
                  </div>
                  <div className="mb-4">
                  <label>Password</label>
                     <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                  </div>
                  <div className="mb-2">
                     <button id="buttonLogin" onClick={LoginHandeller} className="btn btn-info col-12" >SignIn</button>
                  </div>
                  <a  href="/register" className="mb-4">
                     <button id="buttonLogin" className="btn btn-primary col-12" >SignUp</button>
                  </a>
                  <div className="mt-4">
                     <a className="m-4" style={{ textDecoration: 'none' }} href="/password">Forget Password</a>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}