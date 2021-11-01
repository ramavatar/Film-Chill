import React from 'react'
import Header from '../header/Header'
import { useParams } from 'react-router-dom';
export default function Book() {
    const { id } = useParams();
    return (
            <>
            <Header />
            <div className="row m-4">
                <div className="col-6" style={{ flexDirection: 'row' }}>
                    <div class="card">
                        <img src="https://i1.wp.com/zeevector.com/wp-content/uploads/LOGO/PVR-Cinemas-Logo-PNG-HD.jpg?fit=1024%2C1024&ssl=1" class="card-img-top" style={{ height: '18rem'}} alt="..." />
                        <div class="card-body">
                            <div className="col-4">
                                <h5 class="card-title">Theatre: PVR</h5>
                                <a href="/bookPVR" class="btn btn-primary m-2">Book</a>
                                {/* <a href="/bookPVR" class="btn btn-primary m-2">1:00</a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-6">
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
