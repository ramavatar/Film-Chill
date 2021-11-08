import React from 'react'
import Header from '../header/Header'
import { useParams } from 'react-router-dom';
export default function Book() {
    const { movieName } = useParams();
    return (
        <>
            <Header />
            <div className="container">
                <table className="table" style={{marginTop:'4rem'}}>
                    <thead>
                        <tr class="table-primary">
                            <th scope="col">Theater Name</th>
                            <th scope="col"></th>
                            <th scope="col">Show Timing</th>
                            <th scope="col" colSpan="2" ></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='table-warning'>
                            <th scope="row">PVR</th>
                            <td><a href={`/book/PVR/${movieName}/10:00AM`} className="btn btn-outline-success">10:00 AM</a></td>
                            <td><a href={`/book/PVR/${movieName}/1:30PM`} className="btn btn-outline-success">1:30 PM</a></td>
                            <td><a href={`/book/PVR/${movieName}/3:30PM`} className="btn btn-outline-success">3:30 PM</a></td>
                            <td><a href={`/book/PVR/${movieName}/7:00PM`} className="btn btn-outline-success">7:00 PM</a></td>
                        </tr>
                        <tr className='table-info'>
                            <th scope="row">Carnivals</th>
                            <td></td>
                            <td><a href={`/book/Carnivals/${movieName}/12:00PM`} className="btn btn-outline-success">12:00 PM</a></td>
                            <td><a href={`/book/Carnivals/${movieName}/5:00PM`} className="btn btn-outline-success">5:00 PM</a></td>
                            <td><a href={`/book/Carnivals/${movieName}/9:00PM`} className="btn btn-outline-success">9:00 PM</a></td>
                        </tr>
                        <tr className='table-success'>
                            <th scope="row">Inox</th>
                            <td></td>
                            <td></td>
                            <td><a href={`/book/Inox/${movieName}/2:30PM`} className="btn btn-outline-success">2:30 PM</a></td>
                            <td><a href={`/book/Inox/${movieName}/6:30PM`} className="btn btn-outline-success">6:30 PM</a></td>
                        </tr>
                        <tr className='table-secondary'>
                            <th scope="row">Cinemax</th>
                            <td><a href={`/book/Cinemax/${movieName}/9:30AM`} className="btn btn-outline-success">9:30 AM</a></td>
                            <td></td>
                            <td></td>
                            <td><a href={`/book/Cinemax/${movieName}/8:30PM`} className="btn btn-outline-success">8:30 PM</a></td>
                        </tr>
                        <tr className='table-primary'>
                            <th scope="row">Cineplex</th>
                            <td></td>
                            <td><a href={`/book/Cineplex/${movieName}/1:00PM`} className="btn btn-outline-success">1:00 PM</a></td>
                            <td><a href={`/book/Cineplex/${movieName}/6:00PM`} className="btn btn-outline-success">6:00 PM</a></td>
                            <td></td>
                        </tr>
                        <tr className='table-light'>
                            <th scope="row">IP Cinemas</th>
                            <td><a href={`/book/IP Cinemas/${movieName}/10:00AM`} className="btn btn-outline-success">10:00 AM</a></td>
                            <td><a href={`/book/IP Cinemas/${movieName}/1:00PM`} className="btn btn-outline-success">1:00 PM</a></td>
                            <td><a href={`/book/IP Cinemas/${movieName}/4:00PM`} id="theatre" className="btn btn-outline-success">4:00 PM</a></td>
                            <td><a href={`/book/IP Cinemas/${movieName}/7:00PM`} className="btn btn-outline-success">7:00 PM</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}