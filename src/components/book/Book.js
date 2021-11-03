import React from 'react'
import Header from '../header/Header'
import { useParams } from 'react-router-dom';
export default function Book() {
    const { id } = useParams();
    let theaterName = ["INOX","Carnivels","PVR"]
    return (
            <>
            <Header />
            <div className="row" style={{paddingBottom:'2rem'}}>
            <h1 className="container-fluid d-flex justify-content-center mt-4">Available Theater's</h1>
            <div className="col-4" >
                <div className="card m-2" style={{ flexDirection: 'row' }}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxHBu7zWo6r67YvvxIvNW8VKF9u2mwlbiuw&usqp=CAU" className="card-img-top" style={{ width: "50%", height: "47vh" }} alt="No Image Found" />
                        <div className="card-body">
                            <h4 className="card-title">INOX Theatre</h4>
                            <p className="card-text">Show Timings</p>
                            <a href={`/${theaterName[0]}/${id}/1`} class="btn btn-secondary m-2">10:00</a>
                            <a href={`/${theaterName[0]}/${id}/2`} class="btn btn-secondary m-2">13:00</a>
                            <a href={`/${theaterName[0]}/${id}/3`} class="btn btn-secondary m-2">16:00</a>
                        </div>
                    </div>
                </div>
                <div className="col-4" >
                <div className="card m-2" style={{ flexDirection: 'row' }}>
                        <img src="https://etimg.etb2bimg.com/photo/62679947.cms" className="card-img-top" style={{ width: "50%", height: "47vh" }} alt="No Image Found" />
                        <div className="card-body">
                            <h4 className="card-title">Carnivels Theatre</h4>
                            <p className="card-text">Show Timings</p>
                            <a href={`/${theaterName[1]}/${id}/1`} class="btn btn-secondary m-2">10:00 </a>
                            <a href={`/${theaterName[1]}/${id}/2`} class="btn btn-secondary m-2">13:00 </a>
                            <a href={`/${theaterName[1]}/${id}/3`} class="btn btn-secondary m-2">16:00 </a>
                        </div>
                    </div>
                </div>
                <div className="col-4" >
                <div className="card m-2" style={{ flexDirection: 'row' }}>
                        <img src="https://i1.wp.com/zeevector.com/wp-content/uploads/LOGO/PVR-Cinemas-Logo-PNG-HD.jpg?fit=1024%2C1024&ssl=1" className="card-img-top" style={{ width: "50%", height: "47vh" }} alt="No Image Found" />
                        <div className="card-body">
                            <h4 className="card-title">PVR Theatre</h4>
                            <p className="card-text">Show Timings</p>
                            <a href={`/${theaterName[2]}/${id}/1`} class="btn btn-secondary m-2">10:00</a>
                            <a href={`/${theaterName[2]}/${id}/2`} class="btn btn-secondary m-2">13:00</a>
                            <a href={`/${theaterName[2]}/${id}/3`} class="btn btn-secondary m-2">16:00</a>
                        </div>
                    </div>
                </div>
                </div>
            </>
    )
}