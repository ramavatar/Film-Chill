import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../header/Header';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './BookSeat.css';
export default function BookSeat() {
    const history = useHistory();
    const [booking, setBooking] = useState([])
    const [seat, setSeat] = useState([])
    const { movieName } = useParams();
    const { theater } = useParams();
    const { showtiming } = useParams();
    let index = 0;
    let arr = []
    const totalSeat = 100;
    let seatDetails = []
    for (var i = 0; i < totalSeat; i++) {
        seatDetails.push(false)
    }

    fetch(`http://localhost:3001/BookedMovies`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            data.map(item => {
                if (item.movie == movieName && item.timing == showtiming && item.theaterName == theater) {
                    seatDetails[item.SeatNo - 1] = true;
                    arr.push(item)
                }
            })
            setSeat(seatDetails);
            // setBooking(arr)
        })

    // const Bill = () => {
    //         booking.map(item => {
    //             if (item.email === localStorage.getItem("token")) {
    //                 history.push(`/bill/${movieName}`);
    //             }
    //         })
    //     // history.push(`/bill/${movieName}`);
    // }

    const Book = (seat) => {
        let isBooked = true;
        let movie = movieName;
        let theaterName = theater;
        let timing = showtiming;
        let SeatNo = seat
        let email = localStorage.getItem("token")

        fetch(`http://localhost:3001/BookedMovies`,
            {
                "method": "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ email, theaterName, timing, SeatNo, movie, isBooked })
            })
            history.push(`/bill/${movieName}`);
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
                </ul>
                <ul>

                </ul>
                <div className="container">
                    <div className="screen">
                    </div>
                    <div className="row">
                        {
                            seat.map(item => (
                                item === true ?
                                    <b className="selected">{index = index + 1}</b>
                                    :
                                    <b className="seat" onClick={Book.bind(this, index + 1)} >{index = index + 1} </b>
                            ))
                        }
                    </div>
                    {/* <div>
                    <button className="col-12 btn btn-success m-2" onClick={Bill}>Book Ticket</button>
                    </div> */}
                </div>
            </div>
        </>
    )
}