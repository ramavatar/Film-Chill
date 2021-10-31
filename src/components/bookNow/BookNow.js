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
            <div className="bookNow">
                <div className="card bg-dark text-white">
                    <img src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/yeh-jawaani-hai-deewani-deepika-padukone-ranbir-kapoor_0.jpg" className="card-img" alt="..." />
                    <div className="card-img-overlay">
                        {/* <h5 className="card-title">Card title</h5> */}
                        <div>
                            <b className="Jitna">JITNA BHI TRY KARO, KUCH NA KUCH TO CHHOOTEGA HI.</b>
                        </div>
                        <div>
                            <b className="Jitna">ISLIYE YAHIN, ISS PAL KA MAZA LETE HAI.</b>
                        </div>
                        <div className="pop">
                            <h1 className="card-text">Grab your Popcorn and let's be a little FILMY</h1>
                            <h5 className="card-text">So, BOOK your tickets now</h5>
                            <button type="button" className="btn btn-danger" onClick={back}>BOOK NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}