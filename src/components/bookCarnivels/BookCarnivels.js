import React from 'react'
import Header from '../header/Header';
import { useState } from 'react';

function RenderComponent() {
    
    const [available, setAvailable] = useState(true)
    const bookTicket = () =>{
        setAvailable(false)
    }

    const list = [] ;
    for (let i = 0; i < 25 ; i = i + 1) {
        if (available) {
            list.push(<i class="fas fa-couch fa-10x m-2" onclick={{bookTicket}} style={{ color: 'green' }}></i>)
            
        }
        else {
            list.push(<i class="fas fa-couch fa-10x m-2" style={{ color: 'red' }}></i>)
        }
    }
    return (
        <div style={{paddingBottom:'4rem'}}> 
            <Header/>
            <div className="container">
                {list}
            </div>
        </div>
    )
}

export default function BookCarnivels() {
    
    return RenderComponent();
}


