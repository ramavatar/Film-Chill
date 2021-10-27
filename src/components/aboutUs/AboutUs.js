import React from 'react';
import Header from '../header/Header';

export default function AboutUs() {
    return (
        <>
        <Header/>
        <div className="container">
            <h1 className="mb-4 mt-4">About Us</h1>
            <div class="jumbotron text-center">
                <h1>Film & Chill</h1>
                <p>We specialize in Providing Best user Experience</p>
            </div>
        </div>
        </>
    )
}
