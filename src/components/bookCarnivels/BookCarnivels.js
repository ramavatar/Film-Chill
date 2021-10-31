import React from 'react'
import Header from '../header/Header';

export default function BookCarnivels() {
    // 
    return (
        <div>
            <Header/>
            {
                true?<i class="fas fa-couch fa-4x m-2" style={{color:'green'}}></i>
                :<i class="fas fa-couch fa-4x m-2" style={{color:'red'}}></i>

            }
            <i class="fas fa-couch fa-4x m-2" style={{color:'green'}}></i>
            <i class="fas fa-couch fa-4x m-2" style={{color:'red'}}></i>
        </div>
    )
}

