import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../header/Header';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
export default function Details() {
    const history = useHistory();
    const [details, setdetails] = useState([])
    const {id} = useParams();

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
        let isBooked=true ;
        let Key = id;
        let email = localStorage.getItem("token")
        fetch(`http://localhost:3001/${id}/${seat}`,
            {
                "method": "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({  email , Key , isBooked})
            })
            alert(`Your Seat is Booked & Seat Number is ${seat}`);
            history.push(`/billPVR/${id}/${seat}`);
    }

    return (
        <>
            <Header />
            <div className="container" style={{ paddingBottom: "4em" }}>
                {
                    details.map(item => (
                        item.isBooked ?
                            <i class="fas fa-couch fa-10x" style={{ color: "red" }}></i>
                            :
                            <a href=""><i class="fas fa-couch fa-10x" style={{ color: 'green' }} onClick={Book.bind(this, item.seat)}></i></a>
                    ))}
            </div>
        </>
    )
}