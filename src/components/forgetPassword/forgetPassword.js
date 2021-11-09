import React from 'react';
import Header from '../header/Header';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
export default function Register() {
   // use history and use state for redirecting and setting data
   const history = useHistory()
   const [username, setUserName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [confirmPassword, setConfirmPassword] = useState('')

   // vallidation used
   const PasswordHandeller = () => {
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
      else if (password.length <= 6) {
         document.getElementById("msg").innerHTML = "Password is too Small";
      }
      else {
         // password entered should be same as confirmed password and fetching from json server
         if (password == confirmPassword) {
            fetch("http://localhost:3001/register")
               .then(res => res.json())
               .then(data => {
                  data.map(item => {
                     if (item.email === email) {
                        cout = cout + 1;
                        fetch(`http://localhost:3001/Register/${item.id}`, {
                            method: "PUT",
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
                            })
                            .catch(err => console.error(err))
                     }
                  })
                  
                  // if user is registered then password will be updated otherwise not
                  if (cout == 0) {
                    document.getElementById("msg").innerHTML = "Not a Registered User !";
                  }
                  else {
                    document.getElementById("msg").innerHTML = "Password Updated Successfully !";
                  }
               })
            .catch(err => console.error(err)) 
         }
         else {
            document.getElementById("msg").innerHTML = "password and Confirm Password not Matched";
         }
      }
   }
   return (
      <>
         <Header />
         {/* ui part of the forget password */}
         <div className="container-fluid">
            <div className="row">
               <div className="col-sm-12 md-6 col-lg-6 mt-4">
                  <img src="https://www.ouinolanguages.com/new/wp-content/uploads/2017/09/ques15.jpg" style={{width:'100%'}}/>
               </div>
               <div className="col-sm-12 md-6 col-lg-5">
                  <h1 className="mb-2 mt-4">Reset Password</h1>
                  <hr />
                  <div className="mb-2" id="msg" style={{ color: 'red' }}>

                  </div>
                  <div className="mb-2">
                     <label>UserName</label>
                     <input type="text" id="user" className="form-control" onChange={(e) => setUserName(e.target.value)} placeholder="UserName" />
                  </div>
                  <div className="mb-2">
                     <label>e-mail</label>
                     <input type="email" id="email" className="form-control" onChange={(e) => setEmail(e.target.value)} placeholder="email" />
                  </div>
                  <div className="mb-2">
                     <label>Password</label>
                     <input type="password" id="pass" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                  </div>
                  <div className="mb-4">
                     <label>Re-Enter Password</label>
                     <input type="password" id="confirm" className="form-control" onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
                  </div>
                  <div className="mb-2">
                      <button id="forgetPass" className="btn btn-info col-12" onClick={PasswordHandeller}>Reset Password</button>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}
