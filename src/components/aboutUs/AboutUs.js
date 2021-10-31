import React from 'react';
import Header from '../header/Header';
import './AboutUs.css'


export default function AboutUs() {
    return (
        <>
            <Header />
            <div className="aboutUs" style={{ paddingBottom: '4em' }}>
                <div className="container-fluid">
                    <h1 className="mb-4">About Us</h1>
                    <div className="card bg-dark text-white">
                        <img src="https://www.teahub.io/photos/full/41-416478_classNameic-horror-movies-wallpapers-hd-horror-movie-collage.jpg" className="card-img" alt="..." />
                        <div className="decor">
                        <div className="card-img-overlay">
                            <h2 className="card-title">Film & Chill</h2>
                            <b className="card-text">WE ARE</b>
                            <h2 className="card-text">MOVIE BUFFS</h2>
                            <b className="card-text">We specialize in Providing Best user Experience</b>
                        </div>
                        </div>
                    </div>
                    <div className="jumbotron text-center">
                        <h2>Connect with us</h2>
                        <section>
                            <a href="https://www.facebook.com/BookMyShowIN/" target="_blank">
                                <span className="fab fa-facebook-f fa-4x m-4" style={{ color: 'blue' }}></span>
                            </a>
                            <a href="https://gitlab-gl.stackroute.in/capstone-project/filmandchill.git" target="_blank">
                                <span className="fab fa-gitlab fa-4x m-4" style={{ color: 'gold' }}></span>
                            </a>
                            <a href="https://www.youtube.com/watch?v=qX_Jw9lYMbw" target="_blank">
                            <span className="fab fa-youtube fa-4x m-4" style={{ color: 'red' }}></span>
                            </a>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

