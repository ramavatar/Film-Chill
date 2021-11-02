import React from 'react'
import Header from '../header/Header';
import { useState } from 'react';

function RenderComponent() {
    
    const [available, setAvailable] = useState(true)
    const bookTicket = () =>{
        setAvailable(false)
    }

    const seat = [] ;
    for (let i = 0; i < 25 ; i = i + 1) {
        if (available) {
            seat.push(true)
        }
        else {
            seat.push(false)
        }
    }
    return (
        <div style={{paddingBottom:'4rem'}}> 
            <Header/>
            <div className="container">
            {seat.map(item=>{
               <li>{item}</li>
            })}
                
            </div>
        </div>
    )
}

export default function BookCarnivels() {
    
    return RenderComponent();
}


