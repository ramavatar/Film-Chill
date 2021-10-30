import React from 'react'
import Header from '../header/Header'
// import { Button, Modal } from 'react-bootstrap';
// import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
// import '@szhsin/react-menu/dist/index.css';
// import '@szhsin/react-menu/dist/transitions/slide.css';

export default function Book() {

    return (
        <>
            <Header />
            <div className="row">
                <div className="col-6" style={{ flexDirection: 'row' }}>
                    <div class="card">
                        <div className="col-2">
                            <img src="https://i1.wp.com/zeevector.com/wp-content/uploads/LOGO/PVR-Cinemas-Logo-PNG-HD.jpg?fit=1024%2C1024&ssl=1" class="card-img-top" style={{ height: '12rem', width: '12rem' }} alt="..." />
                        </div>
                        <div class="card-body">
                            <div className="col-4">
                                <h5 class="card-title">Theatre: PVR</h5>
                                {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                <a href="/bookPVR" class="btn btn-primary">10:00</a>
                                <a href="/bookPVR" class="btn btn-primary">1:00</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <div class="card">
                        <img src="https://contactworlds.com/wp-content/uploads/2021/06/Carnival-Cinemas.jpg" class="card-img-top" style={{ height: '12rem', width: '12rem' }} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Theatre: Carnivels</h5>
                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                            <a href="/bookCarnivels" class="btn btn-primary">12:00</a>
                            <a href="/bookCarnivels" class="btn btn-primary">5:00</a>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
