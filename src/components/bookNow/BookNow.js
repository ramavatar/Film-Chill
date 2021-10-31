import React from 'react'
import Header from '../header/Header';
import './BookNow.css'
import { useHistory } from 'react-router-dom';
import Movies from '../movies/Movies';

export default function BookNow() {
    return (
        <>
            <Header />
            <div className="bg">
                <div className="bookNow">
                    <div>
                        <span>JITNA BHI TRY KARO, KUCH NA KUCH TO CHOOTEGA HI.</span>
                    </div>
                    <div>
                        <span>ISLIYE YAHI, ISSI PAL KA MAZA LETE HAI.</span>
                    </div>
                    <h1>Grap your Popcorn and let's be a little FILMY</h1>
                    <h5>So, BOOK your tickets now</h5>
                    <a href="/movies" class="btn btn-danger">BOOK NOW</a>
                </div>
            </div>
        </>
    )
}
