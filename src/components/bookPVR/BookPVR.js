import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../header/Header';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import bg from '../assets/bg.jpeg';
export default function Details() {
    const history = useHistory();
    const [details, setdetails] = useState([])
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/${id}`)
            .then(res => res.json())
            .then(data => {
                setdetails(data)
            })
            .catch(err => {
                console.error(err);
            });
    }, [])


    const Book = (seat) => {
        let isBooked = true;
        let Key = id;
        let email = localStorage.getItem("token")
        fetch(`http://localhost:3001/${id}/${seat}`,
            {
                "method": "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ email, Key, isBooked })
            })
        history.push(`/billPVR/${id}/${seat}`);
    }

    return (
        <>
            <Header />
            <div className="container-fluid" style={{ padding: "2em" , backgroundImage:`url(${bg})` , position:'relative' ,backgroundSize:'cover'}}>
                <div class="row" >
                    {
                        details.map(item => (
                            item.isBooked ?
                                <div class="card col-2 m-3" style={{ backgroundColor: 'red', height: '6rem' , color:'white' , textAlign: 'center' , padding:'2rem 0rem'}}>
                                    {item.id}
                                </div>
                                :
                                <a href="" class="card col-2 m-3" onClick={Book.bind(this, item.seat)} style={{ backgroundColor: 'green', color:'white', height: '6rem', padding:'2rem 0rem', textAlign: 'center' ,textDecoration:'none' }}><b>{item.id}</b></a>  
                        ))}
                </div>
            </div>
        </>
    )
}