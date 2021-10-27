import React , { useEffect, useState } from 'react'

export default function Card(props) {
    const [title, setTitle] = useState("")
    const [overview, setOverview] = useState("")
    const [image, setImage] = useState("")
    useEffect(() => {
      setOverview(props.overview)
      setTitle(props.title)
      setImage(props.image)
    }, [])
    const addFavorites = () => {
        fetch("http://localhost:3001/favorites",
        {"method":"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify({overview,title,image})
        })
    }
    return (
        <div className="col-12 col-md-4 col-lg-4">
        <div className="card mt-3 mr-3" style={{width: '18rem'}}>
        <img src={props.image} className="card-img-top" style={{height: '12rem'}} alt="No Image Found"/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-title">{props.rating}</p>
            <button className="btn btn-primary" onClick={addFavorites}>Favorites</button> 
            <button className="btn btn-dark">Book Movies</button>
        </div>
        </div>
        </div>
    )
}