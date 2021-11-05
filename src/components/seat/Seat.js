import React from 'react'
import { Modal } from 'react-bootstrap';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import Header from '../header/Header';
import './Seat.css';
import { useParams } from 'react-router-dom';
export default function Seat() {
    const { id } = useParams();
    const { theater } = useParams();
    const { showtiming } = useParams();
    return (
        <>
            <Header />
            <Modal.Dialog >
                <Modal.Header>
                    <Modal.Title>Choose Number of Seat</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <center style={{ padding: '35px' }}>
                        How Many Seats?
                    </center>
                    <div className="seats">
                        <center>
                            <a href={`/book/${theater}/${id}/${showtiming}/1`} className="btn1 btn m-2">1</a>
                            <a href={`/book/${theater}/${id}/${showtiming}/2`} className="btn1 btn m-2">2</a>
                            <a href={`/book/${theater}/${id}/${showtiming}/3`} className="btn1 btn m-2">3</a>
                            <a href={`/book/${theater}/${id}/${showtiming}/4`} className="btn1 btn m-2">4</a>
                            <a href={`/book/${theater}/${id}/${showtiming}/5`} className="btn1 btn m-2">5</a>
                            <a href={`/book/${theater}/${id}/${showtiming}/6`} className="btn1 btn m-2">6</a>
                        </center>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <center>
                            Front Seats(seat 1-40): Rs 110
                        </center>
                        <center>
                            Middle Seats(seat 40-80): Rs 150
                        </center>
                        <center>
                            Balcony Seats(seat 80-100): Rs 200
                        </center>
                    </div>
                </Modal.Footer>
            </Modal.Dialog>
        </>
    )
}