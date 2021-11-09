import React from 'react'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../header/Header'
export default function DeleteAccount() {
    // use state and use history for storing and setting data
    const history = useHistory();
    const [allUsers, setAllUsers] = useState([])
    const [id, setId] = useState([])
    var arr = [];
    let cout = 0;
    
    // fetching from the user if user is registered or not
    fetch("http://localhost:3001/register")
        .then(res => res.json())
        .then(data => {
            data.map(item => {
                if (localStorage.getItem("token") === item.email) {
                    arr.push(item)
                    setId(item.id)
                    cout = cout + 1
                }
            })
            if (cout == 0) {
                localStorage.clear()
                history.push("/login")
            }
            setAllUsers(arr)
            console.log(arr);
        })
        .catch(err => {
            console.error(err);
        });

        // remove account function
    const RemoveUser = () => {
        let filteredUser=allUsers.filter(x=>x.id !==id)
        fetch(`http://localhost:3001/register/${id}`, {
            method: "DELETE"
        })
        setAllUsers(filteredUser)
       
    }

    return (
        <>
        <Header/>
        {/* remove account display content */}
        <div className="row">
            <div className="col-6 mt-4">
            <img src="https://img4.wsimg.com/support/images/office365/32427/070720/O365-Delete-account-02.png" style={{width:"100%"}}/>
            </div>
            <div className="col-6 mt-4" >
                <h4>
                    Sorry to See You Go !
                </h4>
                <h5>
                    Delete this Account {localStorage.getItem("token")}
                </h5>
                <div>
                    <a href="/movies" className="btn btn-outline-success m-2">No</a>
                    <a className="btn btn-outline-danger m-2" onClick={RemoveUser}>Yes</a>
                </div>
            </div>
        </div>
        </>
    )
}
