import React from 'react'
import Header from '../header/Header';
import './BookNow.css'
import { useHistory } from 'react-router-dom';
import Movies from '../movies/Movies';

export default function BookNow() {
    const history = useHistory()
    const back = () => {
        // fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1")
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data.results);
        //         setmovieApi(data.results)
        //     })
        history.push("/movies")
    }
    return (
        <>
        <Header />
        <div className="bg">
        <div className="bookNow">
            <p>JITNA BHI TRY KARO, KUCH NA KUCH TO CHOOTEGA HI.</p>
            <p>ISLIYE YAHI, ISSI PAL KA MAZA LETE HAI.</p>
            <h1>Grap your Popcorn and let's be a little FILMY</h1>
            <h5>So, BOOK your tickets now</h5>
            <button type="button" class="btn btn-danger" onClick={back}>BOOK NOW</button>
        </div>
        </div>
        </>
    )
}
