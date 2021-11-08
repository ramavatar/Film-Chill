import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Badge } from "@material-ui/core";
import { getAccordionDetailsUtilityClass } from '@mui/material';
export default function Card(props) {
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [email, setEmail] = useState("")
    const [rating, setRating] = useState("")
    const [voting, setVoting] = useState("")
    const [key, setId] = useState("")
    const [allFavorites, setFavorites] = useState([])
    const [heart, setHeart] = useState(false);

    useEffect(() => {
        setTitle(props.title)
        setImage(props.image)
        setRating(props.rating)
        setVoting(props.voting)
        setId(props.id)
        setEmail(localStorage.getItem("token"))
        var arr = [];
        fetch("http://localhost:3001/favorites")
            .then(res => res.json())
            .then(data => {
                data.map(item => {
                    if (item.email === localStorage.getItem("token")) {
                        arr.push(item)
                        if (item.key === props.id) {
                            setHeart(true)
                        }
                    }
                })
                setFavorites(arr);
            })
            .catch(err => console.error(err))
    }, [])

    const addFavorites = () => {
        if (localStorage.getItem("token")) {
            fetch("http://localhost:3001/favorites",
                {
                    "method": "POST",
                    headers:
                        { "content-type": "application/json" },
                    body: JSON.stringify({ key, email, title, image, rating, voting })
                }
            )
        }
        else {
            history.push("/login");
        }
    }

    const RemoveFavorites = (id) => {
        allFavorites.map(item=>{
            if(item.key===id){
                fetch(`http://localhost:3001/favorites/${item.id}`, {
                    method: "DELETE"
                })
            }
        })
    }

    const displayDetails = (id) => {
        history.push(`/details/${id}`)
    }

    return (
        <div className="conainer col-xs-12 col-sm-6 col-md-4 col-lg-3" style={{ marginTop: '2%' }}>
            <div className="card m-2">
                <Badge
                    badgeContent={props.rating}
                    color={props.rating > 7 ? "primary" : "secondary"}
                />
                <img src={props.image} className="card-img-top" onClick={displayDetails.bind(this, props.id)} style={{ height: '13rem' }} alt="No Image Found" />
                <div className="card-body">
                    <h6 className="card-title">{props.title}</h6>
                    <p className="card-text">
                        {
                            heart ?
                                <a If href="/">
                                    <span class="fa fa-heart m-2" style={{ color: 'red', float: 'left' }} onClick={RemoveFavorites.bind(this, props.id)}></span>
                                </a>
                                :
                                <a If href="/">
                                    <span class="fa fa-heart-o m-2" style={{ color: 'red', float: 'left' }} onClick={addFavorites}></span>
                                </a>
                        }
                        <span className="fa fa-thumbs-up m-2" style={{ float: 'right' }}> {props.voting} Votes</span>
                    </p>
                </div>
            </div>
        </div>
    )
}