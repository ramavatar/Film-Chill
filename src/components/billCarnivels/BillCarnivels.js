import React from 'react';
import Header from '../header/Header';
export default function BillCarnivels() {
    return (
        <div>
            <Header />
            <div class="container d-flex justify-content-center mt-5">
                <div class="card border-success">
                    <div class="card-header bg-transparent border-success">Carnivels Booking</div>
                    <div class="card-body text-success">
                        <h5 class="card-title">Movie Title</h5>
                        <p class="card-text">Seat No:</p>
                        <p class="card-text">Timing:</p>
                        <p class="card-text">Amount:</p>
                        {/* <p class="card-text">Seat No:</p> */}
                        <div class="card">
                            <div class="first p-3 px-4">
                                <div class="d-flex align-items-center"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFooGPEkY1LHJVzOky57L2Apr7SOwDGpTVFA&usqp=CAU" width="50" class="mr-3" /> <img src="https://i.imgur.com/lhlX7sC.gif" width="180" class="mt-2" /> </div>
                                <div class=" d-flex flex-row justify-content-between mt-3">
                                    <div class="star"> <span>*</span> <span>*</span> <span>*</span> <span>*</span> </div>
                                    <div class="star"> <span>*</span> <span>*</span> <span>*</span> <span>*</span> </div>
                                    <div class="star"> <span>*</span> <span>*</span> <span>*</span> <span>*</span> </div>
                                    <div class="number"> <span>4</span> <span>4</span> <span>3</span> <span>2</span> </div>
                                </div>
                            </div>
                            <div class="second px-4 text-dark">
                                <div class="d-flex flex-row justify-content-between align-items-center">
                                    <div class="name">
                                        <h4>Carnivels theatre</h4>
                                    </div>
                                    <div class="date d-flex flex-row align-items-center">
                                        <div class="valid mr-2"> <span class="d-block">VALID</span> <span class="pull-right">TO</span> </div> <span>Today</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-transparent border-success">Thankyou for Visiting</div>
                </div>
            </div>
        </div>
    )
}