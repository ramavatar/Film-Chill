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
                    <img src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/yeh-jawaani-hai-deewani-deepika-padukone-ranbir-kapoor_0.jpg" className="card-img" alt="..." />
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
                            <span className="card-text">So , BOOK your tickets now</span>
                            </div>
                            <button type="button" className="btn btn-danger mt-4" onClick={back}>BOOK NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}