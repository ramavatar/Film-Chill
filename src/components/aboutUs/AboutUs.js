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
            {/* will be displayed on the screen */}
            <div className="about-section">
                <h1 id="about">About Us</h1>
                <p>We Specialize in Providing Best User Experience</p>
                <p>THE WORLD IS EVOLVING AND SO ARE WE</p>
                <p>
                    <b> Film & Chill</b> is an app that provides you all the Filmy vibes.
                    An application which provides you all the comfort, you can book movie which is on the screen
                    with all the essential information about the movie so that you can find the movie accordingly,
                    and all that from your home itself.
                    You can also search the highest rated movie and can have the best Experience.
                    We care our users and also provide the with all the new essential features.
                </p>
                <p>
                    We are happy to have you! Thank you for choosing us!
                </p>
            </div>
            {/* About our team with the contact details, image and designation */}
            <h2 id="team">Our Team</h2>

            <div className="container-fluid">
                <div className="row" style={{ padding: '2rem', paddingBottom: '6rem' }}>
                    <div className="card col-xs-12 col-sm-12 col-md-6 col-lg-4" style={{ flexDirection: 'row' }}>
                        <img src={kirti} className="card-img-top" style={{ width: "30%", height: "25vh" }} alt="No Image Found" />
                        <div className="card-body">
                            <h4 className="card-title">Kirti Yadav</h4>
                            <p className="card-text">React JS Developer</p>
                            <p className="card-text">
                                <b className="fa fa-envelope"> kirti.yadav2@globallogic.com</b>
                            </p>
                        </div>
                    </div>
                    <div className="card col-xs-12 col-sm-12 col-md-6 col-lg-4" style={{ flexDirection: 'row' }}>
                        <img src={ram} className="card-img-top" style={{ width: "30%", height: "25vh" }} alt="No Image Found" />
                        <div className="card-body">
                            <h4 className="card-title">Ram Upadhyay</h4>
                            <p className="card-text">React JS Developer</p>
                            <p className="card-text">
                                <b className="fa fa-envelope"> ram.upadhyay@globallogic.com</b>
                            </p>
                        </div>
                    </div>
                    <div className="card col-xs-12 col-sm-12 col-md-6 col-lg-4 " style={{ flexDirection: 'row' }}>
                        <img src={gl} className="card-img-top" style={{ width: "30%", height: "25vh" }} alt="No Image Found" />
                        <div className="card-body">
                            <h4 className="card-title">Global Logic</h4>
                            <p className="card-text">Hitachi Group Company</p>
                            <p className="card-text">
                                <b className="fa fa-envelope"> info@globallogic.com</b>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}