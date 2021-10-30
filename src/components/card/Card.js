// import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom';
// export default function Card(props) {
//     const history = useHistory()
//     const [title, setTitle] = useState("")
//     const [overview, setOverview] = useState("")
//     const [image, setImage] = useState("")
//     const [userName, setUserName] = useState("")
//     const [releaseDate, setReleaseDate] = useState("")
//     const [rating, setRating] = useState("")
//     const [voting, setVoting] = useState("")
//     const [allFavorites, setFavorites] = useState([])

//     useEffect(() => {
//         setOverview(props.overview)
//         setTitle(props.title)
//         setImage(props.image)
//         setReleaseDate(props.release_date)
//         setRating(props.rating)
//         setVoting(props.voting)
//         setUserName(localStorage.getItem("token"))
        
//         var arr = []
//         fetch("http://localhost:3001/favorites")
//                   .then(res => res.json())
//                   .then(data => {
//                       data.map(item=>{
//                           if(item.userName === localStorage.getItem("token")){
//                               arr.push(data)
//                           }
//                       })
//                     setFavorites(arr)  
//                   })
//     }, [])

//     const addFavorites = () => {
//         if (localStorage.getItem("token")) {
//             let cout = 0;
//             allFavorites.map(item => {
//                 if (item.title == title) {
//                     cout = cout + 1;
//                 }
//             })

//             if (cout == 0) {
//                 fetch("http://localhost:3001/favorites",{
//                         "method": "POST",
//                         headers:
//                             { "content-type": "application/json" },
//                         body: JSON.stringify({ userName, overview, title, image, rating, voting })
//                     },
//                     history.push("/favorites")
//                 )
//             }
//             else{
//                 alert("Already Added to your favourites")
//             }
//         }

//         else {
//             history.push("/login");
//         }

//     }

//     const displayDetails = () => {
//         fetch("http://localhost:3001/details/1",
//             {
//                 "method": "PUT",
//                 headers: { "content-type": "application/json" },
//                 body: JSON.stringify({ overview, title, image, releaseDate, rating, voting })
//             })
//         history.push("/details")
//     }

//     return (
//         <div className="conainer col-xs-12 col-sm-6 col-md-4 col-lg-4">
//             <div className="card mt-4">
//                 <img src={props.image} className="card-img-top" onClick={displayDetails} style={{ height: '20rem' }} alt="No Image Found" />
//                 <div className="card-body">
//                     <h5 className="card-title">{props.title}</h5>
//                     <p className="card-text">
//                         <a href="#">
//                             <span class="fa fa-heart-o m-2" style={{ color: 'red', float: 'left' }} onClick={addFavorites}></span>
//                         </a>
//                         <span class="fa fa-star checked m-2" style={{ color: 'orange', paddingLeft: '12%' }}></span>
//                         {props.rating}
//                         <span className="fa fa-thumbs-o-up m-2" style={{ float: 'right' }}> {props.voting} Votes</span>
//                     </p>
//                 </div>
//             </div>
//         </div>
//     )
// }

import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
export default function Card(props) {
    const history = useHistory()
    const [title, setTitle] = useState("")
    const [overview, setOverview] = useState("")
    const [image, setImage] = useState("")
    const [userName, setUserName] = useState("")
    const [releaseDate, setReleaseDate] = useState("")
    const [rating, setRating] = useState("")
    const [voting, setVoting] = useState("")
    const [allFavorites, setFavorites] = useState([])

    useEffect(() => {
        setOverview(props.overview)
        setTitle(props.title)
        setImage(props.image)
        setReleaseDate(props.release_date)
        setRating(props.rating)
        setVoting(props.voting)
        setUserName(localStorage.getItem("token"))
        var arr = [];
        fetch("http://localhost:3001/favorites")
            .then(res => res.json())
            .then(data => {
                data.map(item => {
                    if (item.userName == localStorage.getItem("token")) {
                        arr.push(item)
                    }
                })
                setFavorites(arr);
            })
    }, [])

    const addFavorites = () => {
        if (localStorage.getItem("token")) {
            let cout = 0;
            allFavorites.map(item => {
                if (item.title == title) {
                    cout = cout + 1;
                    alert("Already Added !")
                }
            })
            if (cout == 0) {
                fetch("http://localhost:3001/favorites",
                    {
                        "method": "POST",
                        headers:
                            { "content-type": "application/json" },
                        body: JSON.stringify({ userName, overview, title, image, rating, voting })
                    },
                    history.push("/favorites")
                )
            }
            else {
                history.push("/favorites")
            }
        }
        else {
            history.push("/login");
        }

    }

    const displayDetails = () => {
        fetch("http://localhost:3001/details/1",
            {
                "method": "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ overview, title, image, releaseDate, rating, voting })
            })
        history.push("/details")
    }

    return (      
                <div className="conainer col-xs-12 col-sm-6 col-md-4 col-lg-4">
                    <div className="card mt-3">
                        <img src={props.image} className="card-img-top" onClick={displayDetails} style={{ height: '12rem' }} alt="No Image Found" />
                        <div className="card-body">
                            <h5 className="card-title">{props.title}</h5>
                            <p className="card-text">
                                <a href="#">
                                    <span class="fa fa-heart-o m-2" style={{ color: 'red', float: 'left' }} onClick={addFavorites}></span>
                                </a>
                                <span class="fa fa-star checked m-2" style={{ color: 'orange', paddingLeft: '12%' }}></span>
                                {props.rating}
                                <span className="fa fa-thumbs-o-up m-2" style={{ float: 'right' }}> {props.voting} Votes</span>
                            </p>
                        </div>
                    </div>
                </div>
    )
}