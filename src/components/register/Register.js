import React from 'react'
export default function Register() {
    return (
        <div className="container mt-4">
             <div className="row">
             <div className="col-md-4 offset-md-4">
             <h1 className="mb-4 mt-4">Register</h1>
            <div className="mb-4">
               <input type="text" className="form-control" placeholder="UserName"/>
            </div>
            <div className="mb-4">
               <input type="password" className="form-control" placeholder="Password"/>
            </div>
            <div className="mb-4">
               <input type="password" className="form-control" placeholder="Confirm Password"/>
            </div>
            <div className="mb-4">
              <button className="btn btn-warning col-12">Click for Register</button>
            </div>
            <div className="mb-4">
               <label className="ml-4">if Already Registered User</label><a className="ml-4" href="/login">Login</a>
            </div>
            </div>
            </div>
        </div>
    )
}
