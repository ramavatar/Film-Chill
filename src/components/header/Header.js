import React, { Component } from 'react'
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import './Header.css';

export default class NavbarComp extends Component {
    render() {
        return (
            <nav id="nav" className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img src={logo} width="70" height="60" class="d-inline-block align-top" alt="logo" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a href="/movies" className="nav-link" aria-current="page">Movies</a>
                            </li>
                            {/* <li className="nav-item">
                                <a href="/bookNow" className="nav-link" aria-current="page">BookNow</a>
                            </li> */}
                            {
                                localStorage.getItem("token") ?
                                    <li className="nav-item">
                                        <a href="/favorites" className="nav-link" aria-current="page">Favorites</a>
                                    </li>
                                    : null
                            }
                            <li className="nav-item">
                                <a href="/" className="nav-link" aria-current="page">AboutUs</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {
                                localStorage.getItem("token") ?
                                    <nav>
                                        <NavDropdown title={localStorage.getItem("token")}>
                                            <li className="nav-item">
                                                <a href="/logout" style={{ textDecoration: 'none', paddingLeft: '10%' }}>Logout<i class="fa fa-sign-out fa-1x" style={{ paddingLeft: '10%' }}></i></a>
                                            </li>
                                        </NavDropdown>
                                    </nav>
                                    :
                                    <li className="nav-item">
                                        <a href="/login" className="btn btn-success">Login</a>
                                    </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}