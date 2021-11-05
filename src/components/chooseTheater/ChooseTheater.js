import React from 'react'
import Header from '../header/Header'
import { useParams } from 'react-router-dom';
export default function Book() {
    const { id } = useParams();
    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className=" alert alert-success row m-4">
                    <div class="col-2">
                       <b> Theatre Name</b>
                    </div>
                    <div class="col-8">
                    <center><b>Show Timing</b></center>
                    </div>
                </div>
                <div className="m-2"style={{padding:'4rem' ,paddingTop:'0rem'}}>
                <div className="row m-2">
                    <div class="col-3">
                        PVR
                    </div>
                    
                    <div class="col-2">
                        <a href={`/book/PVR/${id}/10:00AM`} className="btn btn-outline-success">10:00 AM</a>
                    </div>
                    <div class="col-2">
                        <a href={`/book/PVR/${id}/1:30PM`} className="btn btn-outline-warning">1:30 PM</a>
                    </div>
                    <div class="col-2">
                        <a href={`/book/PVR/${id}/3:30PM`} className="btn btn-outline-danger">3:30 PM</a>
                    </div>
                    <div class="col-2">
                        <a href={`/book/PVR/${id}/7:00PM`} className="btn btn-outline-success">7:00 PM</a>
                    </div>
                </div>
                <hr />
                <div className="row m-2">
                    <div class="col-3">
                        Carnivals
                    </div>
                    
                    <div class="col-2">

                    </div>
                    <div class="col-2">
                        <a href={`/book/Carnivals/${id}/12:00PM`} className="btn btn-outline-success">12:00 PM</a>
                    </div>
                    <div class="col-2">
                        <a href={`/book/Carnivals/${id}/5:00PM`} className="btn btn-outline-warning">5:00 PM</a>
                    </div>
                    <div class="col-2">
                        <a href={`/book/Carnivals/${id}/9:00PM`} className="btn btn-outline-success">9:00 PM</a>
                    </div>
                </div>
                <hr />
                <div className="row m-2">
                    <div class="col-3">
                        INOX
                    </div>
                    
                    <div class="col-2">

                    </div>
                    <div class="col-2">
                        <a href={`/book/Inox/${id}/2:30PM`} className="btn btn-outline-danger">2:30 PM</a>
                    </div>
                    <div class="col-2">
                        <a href={`/book/Inox/${id}/6:00PM`} className="btn btn-outline-success">6:00 PM</a>
                    </div>
                </div>
                <hr />
                <div className="row m-2">
                    <div class="col-3">
                        Cinemax
                    </div>
                    
                    <div class="col-2">
                        <a href={`/book/Cinemax/${id}/9:30AM`} className="btn btn-outline-success">9:30 AM</a>
                    </div>
                    <div class="col-2">

                    </div>
                    <div class="col-2">

                    </div>
                    <div class="col-2">
                        <a href={`/book/Cinemax/${id}/8:30PM`} className="btn btn-outline-success">8:30 PM</a>
                    </div>
                </div>
                <hr />
                <div className="row m-2">
                    <div class="col-3">
                        Cineplex
                    </div>
                    
                    <div class="col-2">

                    </div>
                    <div class="col-2">
                        <a href={`/book/Cineplex/${id}/1:00PM`} className="btn btn-outline-warning">1:00 PM</a>
                    </div>
                    <div class="col-2">

                    </div>
                    <div class="col-2">
                        <a href={`/book/Cineplex/${id}/6:00PM`} className="btn btn-outline-success">6:00 PM</a>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}