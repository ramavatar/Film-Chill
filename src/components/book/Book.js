import React from 'react'
import Header from '../header/Header'
import { useParams } from 'react-router-dom';
export default function Book() {
    const { id } = useParams();
    return (
            <>
            <Header />
            <div className="row" style={{backgroundImage:`url("https://images.unsplash.com/photo-1432847712612-926caafaa802?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80")`, backgroundSize:"cover" , position:"relative"}}>
            <h1 className="container-fluid d-flex justify-content-center mt-3" style={{color:"white"}}>PVR Welcomes you!!!</h1>
            <div className="col-6" style={{ flexDirection: 'row' }}>
                    <div class="card">
                        <img src="https://scontent.fdel36-1.fna.fbcdn.net/v/t39.30808-6/194937354_4137469963039784_7041484455869800334_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_ohc=0V79TqI4_R4AX87_zX2&_nc_ht=scontent.fdel36-1.fna&oh=e3c6257b2d6b328903daa7fac63491a7&oe=6186D254" class="card-img-top" style={{ height: '22rem' }} alt="..." />
                    </div>
                </div>
                <div className="col-6" >
                <div className="card m-4" style={{ flexDirection: 'row' }}>
                        <img src="https://i1.wp.com/zeevector.com/wp-content/uploads/LOGO/PVR-Cinemas-Logo-PNG-HD.jpg?fit=1024%2C1024&ssl=1" className="card-img-top" style={{ width: "50%", height: "40vh" }} alt="No Image Found" />
                        <div className="card-body">
                            <h4 className="card-title">PVR Theatre</h4>
                            <p className="card-text">Show Timings</p>
                            <a href={`/bookPVR/${id}`} class="btn btn-secondary m-2">10:00 AM</a>
                        </div>
                    </div>
                </div>
            </div >
            </>
    )
}