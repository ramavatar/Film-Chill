import React, { Component } from 'react'
import { NavDropdown } from 'react-bootstrap';
import logo from '../assets/logo.jpg';
import Search from '../search/Search';
import './Header.css';

export default class NavbarComp extends Component {

    render() {
        return (
            <>
                <div data-bs-spy="scroll" data-bs-target=".navbar">
                    <section className="header">
                        <nav class="navbar navbar-expand-sm fixed-top" style={{ backgroundColor: 'rgb(51,53,70)' }}>
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#">
                                🅵🅸🅻🅼&🅲🅷🅸🅻🅻
                                </a>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav m-auto">
                                        <li class="nav-item">
                                            <form class="d-flex">
                                                <input class="px-2 search col-12" type="search" placeholder="Search for Movies" aria-label="Search" />
                                                <button class="btn0" type="submit">Search</button>
                                            </form>
                                        </li>
                                    </ul>
                                    <ul className="navbar-nav ml-auto mr-4">
                                        {
                                            localStorage.getItem("token") ?
                                                <nav>
                                                    <NavDropdown title={localStorage.getItem("token")} >
                                                        <li className="nav-item" style={{ width: '120%' }}>
                                                            <a href="/logout" style={{ textDecoration: 'none', paddingLeft: '10%', color: 'black' }}>Logout<i class='fa fa-sign-in' style={{ paddingLeft: '10%' }}></i></a>
                                                        </li>
                                                        <hr />
                                                        <li className="nav-item" style={{ width: '120%' }}>
                                                            <a href="/remove" style={{ textDecoration: 'none', paddingLeft: '10%', color: 'black' }}>Remove<i class='fa fa-trash-o' style={{ paddingLeft: '10%' }}></i></a>
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
                    <nav id="nav1" className="navbar navbar-expand-sm" style={{ paddingTop: '70px', paddingBottom: '0%' }}>
                        <div className="container-fluid">
                            {/* <img src={logo} width="20" height="20" class="d-inline-block align-top" alt="logo" /> */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto">
                                    <li className="nav-item">
                                        <a href="/movies" className="nav-link" aria-current="page">Movies</a>
                                    </li>
                                    {
                                        localStorage.getItem("token") ?
                                            <li className="nav-item">
                                                <a href="/favorites" className="nav-link" aria-current="page">Favorites</a>
                                            </li>
                                            : null
                                    }
                                    <li className="nav-item">
                                        <a href="/filter" className="nav-link" aria-current="page">Filter</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="/" className="nav-link" aria-current="page">AboutUs</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        )
    }
}