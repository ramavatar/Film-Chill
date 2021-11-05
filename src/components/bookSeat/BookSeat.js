import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../header/Header';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './BookSeat.css';
export default function BookSeat() {
    const history = useHistory();
    const [seat, setSeat] = useState([])
    const { id } = useParams();
    const { theater } = useParams();
    const { showtiming } = useParams();
    let index = 0;
    const totalSeat = 100;
    let seatDetails = []
    for (var i = 0; i < totalSeat; i++) {
        seatDetails.push(false)
    }
    useEffect(() => {
        fetch(`http://localhost:3001/BookedMovies`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                data.map(item => {
                    if (item.Key == id && item.timing == showtiming && item.theaterName==theater) {
                        seatDetails[item.SeatNo - 1] = true;
                    }
                })
                setSeat(seatDetails);
            })
    }, [])
    
    const Book = (seat) => {
        let isBooked = true;
        let Key = id;
        let  theaterName = theater;
        let timing = showtiming;
        let SeatNo = seat
        let email = localStorage.getItem("token")
        fetch(`http://localhost:3001/BookedMovies`,
            {
                "method": "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ email, theaterName, timing , SeatNo, Key, isBooked })
            })
        history.push(`/bill/${id}/${seat}`);
    }
    return (
        <>
            <Header />
            <div id="seat">
                <ul className="showcase">
                    <li>
                        <div className="seat"></div>
                        <small>Available</small>
                    </li>
                    <li>
                        <div className="seat selected"></div>
                        <small>Selected</small>
                    </li>
                    <li>
                        <div className="seat occupied"></div>
                        <small>Occupied</small>
                    </li>
                </ul>
                <div className="container">
                    <div className="screen">
                    </div>
                    <div className="row">
                        {
                            seat.map(item => (
                                item === true ?
                                    <b className="seat occupied">{index = index + 1}</b>
                                    :
                                    <b className="seat" onClick={Book.bind(this, index + 1)}>{index = index + 1}</b>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}