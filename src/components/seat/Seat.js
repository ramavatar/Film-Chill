import React, { useEffect, useState } from 'react'

export default function Seat(props) {
    const [heart , setHeart] = useState(false);

    const addFavorites = () => {
        alert("Hello")
    }

    return (
        <div className="conainer col-xs-12 col-sm-6 col-md-4 col-lg-4">
            <div className="card mt-3">
                <div className="card-body">
                    Hello
                    <p className="card-text">
                    {
                        heart ?
                            <a If href="#">
                                <span class="fas fa-heart m-2" style={{ color: 'red', float: 'left' }} >Ram</span>
                            </a>
                            :
                            <a If href="#">
                                <span class="fas fa-heart m-2" style={{ color:'black' ,float: 'left' }} onClick={addFavorites}>Kirti</span>
                            </a>
                    }
                    </p>
                </div>
            </div>
        </div>
    )
}
