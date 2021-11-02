import React from 'react'
import Header from '../header/Header';
import './BookNow.css'
import { useHistory } from 'react-router-dom';
export default function BookNow() {
    const history = useHistory()
    const back = () => {
        history.push("/movies")
    }
    return (
        <>
            <Header />
            <div className="bookNow">
                <div className="card bg-dark text-white">
                    <img src="https://st4.depositphotos.com/1008011/i/600/depositphotos_253586922-stock-photo-blur-background-of-people-at.jpg" className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <div>
                            <b className="Jitna">JITNA BHI TRY KARO, KUCH NA KUCH TO CHHOOTEGA HI.</b>
                        </div>
                        <div>
                            <b className="Jitna">ISLIYE YAHIN, ISS PAL KA MAZA LETE HAI.</b>
                        </div>
                        <div className="pop">
                            <h1 className="card-text">Grab your Popcorn and let's be a little FILMY</h1>
                            <div>
                            <span className="card-text">So , BOOK your Tickets now</span>
                            </div>
                            <button type="button" className="btn btn-danger mt-4" onClick={back}>BOOK NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}