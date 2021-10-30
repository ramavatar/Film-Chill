import React from 'react';
import Header from '../header/Header';
import './AboutUs.css'


export default function AboutUs() {
    return (
        <>
            <Header />
            <div className="aboutUs" style={{paddingBottom:'4em'}}>
                <div className="container-fluid">
                    <h1 className="mb-4 mt-4">About Us</h1>
                    <div class="card bg-dark text-white">
                        <img src="https://www.teahub.io/photos/full/41-416478_classic-horror-movies-wallpapers-hd-horror-movie-collage.jpg" class="card-img" alt="..."/>
                        <div class ="card-img-overlay">
                            {/* <b className="decor"> */}
                        <h1 class ="card-title">Film&Chill</h1>
                        <h4 class ="card-text">WE ARE</h4>
                        <h1 class ="card-text">MOVIE BUFFS</h1>
                        <h4 class ="card-text">We specialize in Providing Best user Experience</h4>
                        {/* </b> */}
                        </div>
                    </div>
                    <div class="jumbotron text-center">
                        <h2>Connect with us</h2>
                        <section>
                            <span className="fa fa-facebook fa-5x m-5" style={{ color: 'blue' }}></span>
                            <span className="fa fa-gitlab fa-5x m-5" style={{ color: 'gold' }}></span>
                            <span className="fa fa-youtube fa-5x m-5" style={{ color: 'red' }}></span>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}
