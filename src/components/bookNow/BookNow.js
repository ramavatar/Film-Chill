import React from 'react'
import Header from '../header/Header';
import './BookNow.css'
import { useHistory } from 'react-router-dom';
export default function BookNow() {
    // redirecting the page to the home page i.e., movies
    const history = useHistory()
    const back = () => {
        history.push("/")
    }
    return (
        <>
            <Header />
            {/* card for printing purpose */}
            <div className="bookNow">
                <div className="card bg-dark text-white">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB3vavYUqKPFto_Ghqa322pmfPkOkfnXea_Q&usqp=CAU" className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        <div className="Jitna">JITNA BHI TRY KARO, KUCH NA KUCH TO CHHOOTEGA HI.</div>
                        <div className="Jitna">ISLIYE YAHIN, ISS PAL KA MAZA LETE HAI .</div>
                        <div className="pop">
                            <h1 className="card-text">Grab your Popcorn and let's be a little FILMY</h1>
                            <div>
                                <span className="card-text">So, BOOK your Tickets now</span>
                            </div>
                            <button type="button" className="btn btn-danger mt-4" onClick={back}>BOOK NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}