import React from 'react'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import Header from '../header/Header';
export default function Filter() {
    const history = useHistory();
    const [show, setShow] = useState(false);    

    const handleModal = () => {
        setShow(!show);
        history.push("/");
    }

    // to display popular filtered movie
    const displayPopular = () => {
        history.push('filter/popular')
    }

    // display highest rated filtered movie
    const displayHighestRated = () => {
        history.push('filter/highRated')
    }
    
    // display kids filtered movie
    const displaykidsMovies = () => {
        history.push('filter/bestDrama')
    }

    useEffect(() => {
        setShow(!show);
    }, [])

    return (
        <div id="filter">
            <Header />
            {/* modal for user to choose an then passing it to card component */}
            <Modal show={show} onHide={handleModal}>
                <Modal.Header closeButton>Filter movie </Modal.Header>
                <Modal.Body>
                    <Menu menuButton={<MenuButton className="btn btn-success">Choose Filter...</MenuButton>}>
                        <MenuItem onClick={() => displayPopular('')}>Popular Movies</MenuItem>
                        <MenuItem onClick={() => displayHighestRated('')}>highestRated movies </MenuItem>
                        <MenuItem onClick={() => displaykidsMovies('')}>bestDrama movies</MenuItem>
                    </Menu>
                </Modal.Body>
            </Modal>
        </div>
    );
}