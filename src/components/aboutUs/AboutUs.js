import React from 'react';
import Header from '../header/Header';
import './AboutUs.css';
import kirti from '../assets/bg.jpeg';
export default function AboutUs() {
    return (
        <>
            <Header />
            <div class="about-section">
                <h1>About Us Page</h1>
                <p>We Specialize in Providing Best User Experience</p>
            </div>

            <h2>Our Team</h2>

            <div className="container" style={{paddingBottom:'4rem'}}>
                <div className="row">
                    <div class="card col-xs-12 col-sm-6 col-md-4 col-lg-4" >
                        <img src={kirti} class="card-img-top" alt="..."  style={{height:'10rem'}}/>
                        <div class="card-body">
                            <h5 class="card-title">Kirti Yadav</h5>
                            <p class="card-text">React JS Developer</p>
                            <a href = "mailto: kirti.yadav2@globallogic.com" class="btn btn-primary">Connect</a>
                        </div>
                    </div>
                    <div class="card col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <img src={kirti} class="card-img-top" alt="..." style={{height:'10rem'}}/>
                        <div class="card-body">
                            <h5 class="card-title">Ram Upadhyay</h5>
                            <p class="card-text">React JS Developer</p>
                            <a href = "mailto: ram.upadhyay@globallogic.com" class="btn btn-primary">Connect</a>
                        </div>
                    </div>
                    <div class="card col-xs-12 col-sm-6 col-md-4 col-lg-4">
                        <img src={kirti} class="card-img-top" alt="..." style={{height:'10rem'}}/>
                        <div class="card-body">
                            <h5 class="card-title">Global Logic</h5>
                            <p class="card-text">A Hitachi Group Company</p>
                            <a href = "mailto: info@globallogic.com" class="btn btn-primary">Connect</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}