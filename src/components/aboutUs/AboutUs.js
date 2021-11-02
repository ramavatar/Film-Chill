import React from 'react';
import Header from '../header/Header';
import './AboutUs.css';
import kirti from '../assets/kirti.jpg';
import ram from '../assets/Ram_image.png';
import gl from '../assets/GL.png';
export default function AboutUs() {
    return (
        <>
            <Header />
            <div class="about-section">
                <h1>About Us</h1>
                <p>We Specialize in Providing Best User Experience</p>
                <center>
                    THE WORLD IS EVOLVING AND SO ARE WE
                </center>
                <p>
                    Film&Chill is an app that provides you all the Filmy vibes.
                    An application which provides you all the comfort, you can book movie which is on the screen
                    with all the essential information about the movie so that you can find the movie accordingly,
                    and all that from your home itself.
                    You can also search the highest rated movie and can have the best Experience.
                    We care our users and also provide the with all the new essential features.
                </p>
                <center>
                    We are happy to have you! Thankyou for chosing us!
                </center>
            </div>

            <h2>Our Team</h2>

            <div className="container">
                <div className="row">
                    <div className="card col-xs-12 col-sm-6 col-md-4 col-lg-4" style={{ flexDirection: 'row' }}>
                        <img src={kirti} className="card-img-top" style={{ width: "40%", height: "30vh" }} alt="No Image Found" />
                        <div className="card-body">
                            <h4 className="card-title">Kirti Yadav</h4>
                            <p class="card-text">React JS Developer</p>
                            <p className="card-text">
                                <b className="fa fa-envelope"> kirti.yadav2@globallogic.com</b>
                            </p>
                        </div>
                    </div>
                    <div className="card col-xs-12 col-sm-6 col-md-4 col-lg-4" style={{ flexDirection: 'row' }}>
                        <img src={ram} className="card-img-top" style={{ width: "40%", height: "30vh" }} alt="No Image Found" />
                        <div className="card-body">
                            <h4 className="card-title">Ram Upadhyay</h4>
                            <p class="card-text">React JS Developer</p>
                            <p className="card-text">
                                <b className="fa fa-envelope"> ram.upadhyay@globallogic.com</b>
                            </p>
                        </div>
                    </div>
                    <div className="card col-xs-12 col-sm-6 col-md-4 col-lg-4" style={{ flexDirection: 'row' }}>
                        <img src={gl} className="card-img-top" style={{ width: "40%", height: "30vh" }} alt="No Image Found" />
                        <div className="card-body">
                            <h4 className="card-title">Global Logic</h4>
                            <p class="card-text">Hitachi Group Company</p>
                            <p className="card-text">
                                <b className="fa fa-envelope"><br /> info@globallogic.com</b>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}