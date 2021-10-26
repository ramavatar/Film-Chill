import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from '../login/Login';
import Register from '../register/Register';
import Movies from '../movies/Movies'
import logo from '../assets/logo.jpg';
import './Header.css';
export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
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
                                <li className="nav-item">
                                    <a href="/fav" className="nav-link" aria-current="page">Favorites</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/" className="nav-link" aria-current="page">AboutUs</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto ">
                               
                                <li className="nav-item">
                                    <a  href="/login" data-testid="login" className="btn btn-success m-2">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a  href="/logout" data-testid="logout" className="btn btn-danger m-2">Logout</a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </nav>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/movies" component={Movies} />
                    <Route exact path="/movies" component={Movies} />
                </Switch>
            </Router>
        )
    }
}