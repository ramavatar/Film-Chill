import React from 'react';
import Header from '../header/Header';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function Bill() {
    // will store the users ticket details
    let arr = [];
    // save the users time for booking the tickets
    let timing = "";
    // for storing the movie name
    let name = "";
    // set the seats, theatre name, show timings, name of the movie and theatre name
    const [seat, setSeat] = useState("")
    const [theaterName, setTheater] = useState("")
    const [Length, setLength] = useState("")
    const [showTiming, setShowTiming] = useState("")
    const { movieName } = useParams();
    const { theater } = useParams();

    // fetching details from the json server according to the user's email that the user have loged in and other info
    useEffect(() => {
        fetch(`http://localhost:3001/BookedMovies`)
            .then(response => response.json())
            .then(data => {
                let l=0;
                data.map(item=>{
                    if(item.email === localStorage.getItem("token") && item.movie === movieName && item.theaterName === theater){
                        name = item.theaterName;
                        timing = item.timing;
                        if (!arr.includes(item.SeatNo)) {
                            arr.push(item.SeatNo);
                            l=l+1;
                        }
                    }
                })
                setSeat(arr.sort().join(", "));
                setShowTiming(timing)
                setTheater(name)
                setLength(l);
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <Header />
            {/* printing the ticket */}
            
            <div class="container d-flex justify-content-center mt-2">
                <div class="card border-success">
                    <div class="card-header bg-success border-success">
                        <center><b style={{color:'white'}}>Film&Chill Booking</b></center>
                    </div>
                    <div class="card-body text-primary">
                        <h4 class="card-title d-flex justify-content-center">𝕽𝖘 150 𝖕𝖊𝖗 𝕿𝖎𝖈𝖐𝖊𝖙</h4>
                        <div class="card-text">Movie Title : {movieName}</div>
                        <div class="card-text">Seat Number: {seat} </div>
                        <div class="card-text">Time :  {showTiming}</div>
                        <div class="card-text">Total Amount : Rs {150*Length}</div>
                        
                        <div class="card bg-info mt-2">
                            <div class="first p-3 px-4">
                                <div class="d-flex align-items-center"> <img src="https://www.apkmonk.com/share/qr/com.net.pvr/" width="50" class="mr-3" /> 
                                    <img src="https://i.imgur.com/lhlX7sC.gif" width="180" class="mt-2" /> 
                                </div>
                                <div class=" d-flex flex-row justify-content-between text-dark mt-3">
                                    <div class="star"> <span>*</span> <span>*</span> <span>*</span> <span>*</span> </div>
                                    <div class="star"> <span>*</span> <span>*</span> <span>*</span> <span>*</span> </div>
                                    <div class="star"> <span>*</span> <span>*</span> <span>*</span> <span>*</span> </div>
                                    <div class="number"> <span>4</span> <span>4</span> <span>3</span> <span>2</span> </div>
                                </div>
                            </div>
                            
                            <div class="second px-4 text-dark">
                                <div class="d-flex flex-row justify-content-between align-items-center">
                                    <div class="name">
                                        <h4>{theaterName}</h4>
                                    </div>
                                    <div class="date d-flex flex-row align-items-center">
                                        <div class="valid mr-2"> <span class="d-block">VALID</span> <span class="pull-right">TO</span> </div> <span>Today</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-success border-success">
                    <span class="fa fa-heart m-2" style={{ color: 'red', float: 'left' }} ></span>
                        <b style={{paddingLeft:'10%' , color:'white'}}>Thank You for Visiting</b>
                    <span class="fa fa-heart m-2" style={{ color: 'red', float: 'right' }} ></span>
                    </div>
                </div>
            </div>
        </div>
    )
}