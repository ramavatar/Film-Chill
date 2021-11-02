import React from 'react';
import Header from '../header/Header';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
export default function BillPVR() {
    const { id } = useParams();
    const { seat } = useParams();
    const [title, setTitle] = useState("")
    const key = "04c35731a5ee918f014970082a0088b1";
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&api_key=${key}&page=1`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                data.results.map(item=>{
                    if(item.id == id){
                        setTitle(item.original_title)
                    }
                })
            })
    }, [])

    return (
        <div>
            <Header />
            <div class="container d-flex justify-content-center mt-2">
                <div class="card border-success">
                    <div class="card-header bg-success border-success">
                        <center><b style={{color:'white'}}>PVR Booking</b></center>
                    </div>
                    <div class="card-body text-primary">
                        <h5 class="card-title">Movie Title : {title}</h5>
                        <div class="card-text">Movie Id : {id}</div>
                        <div class="card-text">Seat No : {seat}</div>
                        <div class="card-text">Timing :  10:00 AM</div>
                        <div class="card-text">Amount : Rs 150</div>
                        
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
                                        <h4>PVR theatre</h4>
                                    </div>
                                    <div class="date d-flex flex-row align-items-center">
                                        <div class="valid mr-2"> <span class="d-block">VALID</span> <span class="pull-right">TO</span> </div> <span>Today</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-success border-success mb-2">
                    <span class="fa fa-heart m-2" style={{ color: 'red', float: 'left' }} ></span>
                        <b style={{paddingLeft:'8%' , color:'white'}}>Thank You for Visiting</b>
                    <span class="fa fa-heart m-2" style={{ color: 'red', float: 'right' }} ></span>
                    </div>
                </div>
            </div>
        </div>
    )
}