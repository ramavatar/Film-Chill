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
            <div className="row m-4" style={{paddingBottom:'6rem'}}>
                <div className="col-lg-6 col-md-12 col-sm-12" style={{ flexDirection: 'row' }}>
                    <div class="card">
                        <img src="https://i1.wp.com/zeevector.com/wp-content/uploads/LOGO/PVR-Cinemas-Logo-PNG-HD.jpg?fit=1024%2C1024&ssl=1" class="card-img-top" style={{ height: '18rem'}} alt="..." />
                        <div class="card-body">
                            {/* <div className="col-4"> */}
                                <h5 class="card-title">Theatre: PVR</h5>
                                <a href="/bookPVR" class="btn btn-primary m-2">10:00</a>
                                <a href="/bookPVR" class="btn btn-primary m-2">1:00</a>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                    <div class="card">
                        <img src="https://contactworlds.com/wp-content/uploads/2021/06/Carnival-Cinemas.jpg" class="card-img-top" style={{ height: '18rem' }} alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Theatre: Carnivels</h5>
                            <a href="/bookCarnivels" class="btn btn-primary m-2">12:00</a>
                            <a href="/bookCarnivels" class="btn btn-primary m-2">5:00</a>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
