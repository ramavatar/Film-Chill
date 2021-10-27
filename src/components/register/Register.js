import React from 'react';
import Header from '../header/Header';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
export default function Register() {
   const history = useHistory()
   const [username, setUserName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')

   const RegisterHandeller = () => {
      var cout = 0;
      if (username == "") {
         document.getElementById("msg").innerHTML = "UserName Can't be Empty";
      }
      else if (email == "") {
         document.getElementById("msg").innerHTML = "Email Can't be Empty";
      }
      else if (password == "") {
         document.getElementById("msg").innerHTML = "Password Can't be Empty";
      }
      else if (confirmPassword == "") {
         document.getElementById("msg").innerHTML = "Confirm Password Can't be Empty";
      }
      else if(password.length<=6){
         document.getElementById("msg").innerHTML = "Password is too Small";
      }
      else {
            if (password == confirmPassword) {
               fetch("http://localhost:3001/register")
                  .then(res => res.json())
                  .then(data => {
                     data.map(item => {
                        if (item.email === email) {
                           cout = cout + 1;
                        }
                     })
                     if (cout == 0) {
                        fetch("http://localhost:3001/Register", {
                           method: "POST",
                           headers: {
                              "Content-Type": "application/json",
                           },
                           body: JSON.stringify({ username, email, password }),
                        })
                           .then((res) => {
                              return res.json();
                           })
                           .then((data) => {
                              console.log(data);
                           });
                        history.push("/login")
                     }
                     else {
                        document.getElementById("msg").innerHTML = "Already Registered !";
                     }
                  })
            }
         else {
            document.getElementById("msg").innerHTML = "password and Confirm Password not Matched";
         }
      }
   }
   return (
      <>
         <Header />
         <div className="container">
            <div className="row">
               <div className="col-md-4 offset-md-4">
                  <h1 className="mb-2 mt-4">Register</h1>
                  <hr />
                  <div className="mb-2" id="msg" style={{ color: 'red' }}>

                  </div>
                  <div className="mb-2">
                     <label>UserName</label>
                     <input type="text" className="form-control" onChange={(e) => setUserName(e.target.value)} placeholder="UserName" />
                  </div>
                  <div className="mb-2">
                     <label>e-mail</label>
                     <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                  </div>
                  <div className="mb-2">
                     <label>Password</label>
                     <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                  </div>
                  <div className="mb-2">
                     <label>Re-Enter Password</label>
                     <input type="password" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                  </div>
                  <div className="mb-2">
                     <button className="btn btn-warning col-12" onClick={RegisterHandeller}>Click for Register</button>
                  </div>
                  <div className="mb-4">
                     <label className="m-2">if Already Registered User</label><a className="m-2" style={{ textDecoration: 'none' }} href="/login">Login</a>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
