import React from 'react'
import { useState, useEffect } from 'react';
import Header from '../header/Header';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './BookSeat.css';
import Modal from '@mui/material/Modal';
export default function BookSeat() {
    // seat booked by the user details and setting
    const history = useHistory();
    const [numbSeat, setNumbSeat] = useState(null);
    const [noSeat, setNoSeat] = useState(0);
    const [seat, setSeat] = useState([])
    const [selected, setSelected] = useState(0);
    const { movieName } = useParams();
    const { theater } = useParams();
    const { showtiming } = useParams();
    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    let index = 0;
    let arr = [];
    const totalSeat = 100;
    let seatDetails = []
    // displaying the seats layout
    for (var i = 0; i < totalSeat; i++) {
        seatDetails.push(false)
    }
    // redirecting to the bill component by passing other info
    if (selected === numbSeat) {
        history.push(`/bill/${movieName}/${theater}`);
    }
    // selection of seats
    const getSelected = () => {
        fetch(`http://localhost:3001/BookedMovies`)
            .then(res => res.json())
            .then(data => {
                let cout = 0;
                data.map(item => {
                    if (item.movie == movieName && item.timing == showtiming && item.theaterName == theater && item.email == localStorage.getItem("token")) {
                        cout = cout + 1;
                    }
                })
                setNoSeat(cout);
            })
            .catch(err => console.error(err))
    }
    // getting the data from json server
    const getData = () => {
        fetch(`http://localhost:3001/BookedMovies`)
            .then(res => res.json())
            .then(data => {
                data.map(item => {
                    if (item.movie == movieName && item.timing == showtiming && item.theaterName == theater) {
                        seatDetails[item.SeatNo - 1] = true;
                        arr.push(item)
                    }
                })
                setSeat(seatDetails);
            })
            .catch(err => console.error(err))
    }
    const totalSelectSeat = (x) => {
        setNumbSeat(noSeat + x)
    }
    
    useEffect(() => {
        getData()
        getSelected()
        setSelected(noSeat);
    }, [seat]);

    // for selecting number of seats- and saving the details to json server
    const Book = (seatSelected) => {
        if (selected < numbSeat) {
            let isBooked = true;
            let movie = movieName;
            let theaterName = theater;
            let timing = showtiming;
            let SeatNo = seatSelected;
            let email = localStorage.getItem("token")
            fetch(`http://localhost:3001/BookedMovies`,
                {
                    "method": "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify({ email, theaterName, timing, SeatNo, movie, isBooked })
                })
            getData()
        }
    }
    return (
        <>
            <Header />
            {/* modal for asking the number of seats a user wants to book */}
            <Modal
                disableEscapeKeyDown
                onBackdropClick={() => window.location.reload()}
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                {/* calling the function for the number clicked by the user to select the number of seats */}
                <div style={{ background: "#333", padding: "30px" , textAlign: "center" , color:'#fff'}}>
                    <div className="mb-4">How Many Seats ?</div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span className="btn3" id="seat1" onClick={() => { totalSelectSeat(1); handleClose() }}>1</span>
                        <span className="btn3" onClick={() => { totalSelectSeat(2); handleClose() }}>2</span>
                        <span className="btn3" onClick={() => { totalSelectSeat(3); handleClose() }}>3</span>
                        <span className="btn3" onClick={() => { totalSelectSeat(4); handleClose() }}>4</span>
                        <span className="btn3" onClick={() => { totalSelectSeat(5); handleClose() }}>5</span>
                        <span className="btn3" onClick={() => { totalSelectSeat(6); handleClose() }}>6</span>
                    </div>
                    <div>
                        _____________________________
                    </div>
                    <div className="price">
                        Price: Rs. 150
                    </div>
                </div>
            </Modal>
            <div id="seat">
                {/* showing if seats are available or unavailable */}
                <ul className="showcase">
                    <li>
                        <div className="vacant"></div>
                        <small>Available</small>
                    </li>
                    <li>
                        <div className="seat selected"></div>
                        <small>Selected</small>
                    </li>
                </ul>
                <ul>
                </ul>
                <div className="container m-2" style={{ paddingBottom: "3rem"}}>
                <div className="screen">
                    </div>
                    {/* checking if seats are unbooked then are clickable other than the booked seats are unclickable */}
                    <div className="row" style={{paddingTop:'3rem'}}>
                        {
                            seat.map(item => (
                                item === true ?
                                    <b className="selected">{index = index + 1}</b>
                                    :
                                    <b className="vacant" onClick={Book.bind(this, index + 1)} >{index = index + 1} </b>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}