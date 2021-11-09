 import React from 'react'
 import { NavDropdown } from 'react-bootstrap';
 import './Header.css';
 import { useState} from 'react';
 import { useHistory } from 'react-router-dom';
export default function Header() {

    const [search, setsearch] = useState("");
    const history = useHistory();
    
    // search option so user can directly search the desired movie
    const searchMovies = () => {
        history.push(`/${search}`)
    }

    return (
        <div>
            {/* navbar to show the logo, search option and login logout function */}
                 <div data-bs-spy="scroll" data-bs-target=".navbar">
                     <section className="header">
                         <nav className="navbar navbar-expand-sm fixed-top" style={{ backgroundColor: 'rgb(51,53,70)' }}>
                             <div className="container-fluid">
                                 <a className="navbar-brand" id="brandName" href="#" >🅵🅸🅻🅼&🅲🅷🅸🅻🅻</a>
                                 <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{color:'brown'}}>
                                     <ul className="navbar-nav m-auto">
                                         <li className="nav-item">
                                             <form className="d-flex">
                                                 <input className="px-2 search col-12" type="search" onChange={(e) => { setsearch(e.target.value) }} placeholder="Search for Movies" aria-label="Search" />
                                                 <button className="btn0" type="submit" onClick={searchMovies}>Search</button>
                                             </form>
                                         </li>
                                     </ul>
                                     <ul className="navbar-nav ml-auto mr-4">
                                         {
                                             localStorage.getItem("token") ?
                                                 <nav id="logout">
                                                     <NavDropdown title={localStorage.getItem("token")} >
                                                         <li className="nav-item">
                                                             <a href="/logout" style={{ textDecoration: 'none', paddingLeft: '10%', color: 'black' }}>Logout<i className='fa fa-sign-in' style={{ paddingLeft: '10%' }}></i></a>
                                                         </li>
                                                         <hr />
                                                         <li className="nav-item">
                                                             <a href="/remove" style={{ textDecoration: 'none', paddingLeft: '10%', color: 'black' }}>Remove<i className='fa fa-trash-o' style={{ paddingLeft: '10%' }}></i></a>
                                                         </li>
                                                     </NavDropdown>
                                                 </nav>
                                                 :
                                                 <li className="nav-item">
                                                     <a href="/login" className="btn btn-outline-success">Login</a>
                                                 </li>
                                         }
                                     </ul>
                                 </div>
                             </div>
                         </nav>
                     </section>
                     {/* navbar to show the other functiolity, movie, filter, favourite and about us */}
                     <nav id="nav1" className="navbar navbar-expand-sm" style={{ paddingTop: '55px', paddingBottom: '0%' }}>
                         <div className="container-fluid">
                             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                 &#9776;
                             </button>
                             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                 <ul className="navbar-nav me-auto">
                                     <li className="nav-item">
                                         <a href="/" id="Movies" className="nav-link" aria-current="page">Movies</a>
                                     </li>
                                     {
                                         localStorage.getItem("token") ?
                                             <li className="nav-item">
                                                 <a href="/favorites" className="nav-link" aria-current="page">Favorites<sup style={{color:'red'}}>New</sup></a>
                                             </li>
                                             : null
                                     }
                                     <li className="nav-item">
                                         <a href="/filter" id="Filter" className="nav-link" aria-current="page">Filter</a>
                                     </li>
                                     <li className="nav-item">
                                         <a href="/about"  id="AboutUs" className="nav-link" aria-current="page">AboutUs</a>
                                     </li>
                                 </ul>
                             </div>
                         </div>
                     </nav>
                 </div>
        </div>
    )
}
