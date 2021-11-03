import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
export default function Card(props) {
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [overview, setOverview] = useState("")
    const [image, setImage] = useState("")
    const [email, setEmail] = useState("")
    const [releaseDate, setReleaseDate] = useState("")
    const [rating, setRating] = useState("")
    const [voting, setVoting] = useState("")
    const [key, setId] = useState("")
    const [allFavorites, setFavorites] = useState([])
    const [heart , setHeart] = useState(false);

    useEffect(() => {
        setOverview(props.overview)
        setTitle(props.title)
        setImage(props.image)
        setReleaseDate(props.release_date)
        setRating(props.rating)
        setVoting(props.voting)
        setId(props.id)
        setEmail(localStorage.getItem("token"))

        var arr = [];
        fetch("http://localhost:3001/favorites")
            .then(res => res.json())
            .then(data => {
                data.map(item => {
                    if (item.email == localStorage.getItem("token")) {
                        arr.push(item)
                        if(item.title == props.title){
                            setHeart(true)
                            // alert("Already Added to Favourites")
                        }
                    }
                })
                setFavorites(arr);
            })
    }, [])

    const addFavorites = () => {
        if (localStorage.getItem("token")) {
                fetch("http://localhost:3001/favorites",
                    {
                        "method": "POST",
                        headers:
                            { "content-type": "application/json" },
                        body: JSON.stringify({ key ,email, overview, title, image, rating, voting })
                    },
                    history.push("/favorites")
                    // alert("Added to favourites")
                )
        }
        else {
            history.push("/login");
        }
    }

    const displayDetails = (id) => {
        if(id!=undefined){
            history.push(`/details/${id}`)
        }

    }

    return (
        <div className="conainer col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{marginTop:'2%'}}>
            <div className="card m-2">
                <img src={props.image} className="card-img-top" onClick={displayDetails.bind(this,props.id)} style={{ height: '13rem' }} alt="No Image Found" />
                <div className="card-body">
                    <h6 className="card-title">{props.title}</h6>
                    <p className="card-text">
                    {
                        heart ?
                            <a If href="#">
                                <span class="fa fa-heart m-2" style={{ color: 'red', float: 'left' }} ></span>
                            </a>
                            :
                            <a If href="#">
                                <span class="fa fa-heart-o m-2" style={{ color: 'red', float: 'left' }} onClick={addFavorites}></span>
                            </a>
                    }
                        <span class="fa fa-star checked m-2" style={{ color: 'orange' }}></span>{props.rating}
                        <span className="fa fa-thumbs-up m-2" style={{float: 'right'}}> {props.voting} Votes</span>
                    </p>
                </div>
            </div>
        </div>
    )
}