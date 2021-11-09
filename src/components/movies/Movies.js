import React from 'react'
import Card from '../card/Card'
import { useState, useEffect } from 'react'
import Header from '../header/Header'
import './Movies.css'
import CustomPagination from '../pagination/Pagination';

export default function Dashboard() {
    const key = "04c35731a5ee918f014970082a0088b1";
    const IMG_URL = 'https://image.tmdb.org/t/p/w500';
    const [page, setPage] = useState(1);
    const [totalpage, setTotalPage] = useState("");
    const [movieApi, setmovieApi] = useState([])

    // fetching details from the api
    const fetchMovies= async () => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&page=${page}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.results);
                setmovieApi(data.results);
                setTotalPage(data.total_pages)
            })
            .catch(err => console.error(err))
      };

    useEffect(() => {
        window.scroll(0, 0);
        fetchMovies();
      }, [page]);

    return (
        <>
            <Header />
            {/* card to display the details of the movie with other functions */}
            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img src="https://in.bmscdn.com/promotions/cms/creatives/1635590244547_diwalibanner_1240x300.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item active">
                            <img src="https://in.bmscdn.com/promotions/cms/creatives/1635748808813_dhillondesktopnov.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://in.bmscdn.com/promotions/cms/creatives/1635706219525_movieseternals_incinemasthisfridaybooknow_webshowcase_1240x300.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="container-fluild" style={{ padding:'2rem' ,paddingTop:'0rem' , paddingBottom:'6rem'}}>
                    <div className="row">
                        {
                            movieApi.map(item => <Card id={item.id} title={item.original_title} image={IMG_URL + item.poster_path} release_date={item.release_date} overview={item.overview} rating={item.vote_average} voting={item.vote_count} />)
                        }
                    </div>
                    <CustomPagination setPage={setPage} totalpage={totalpage}/>
                </div>
            </div>
        </>
    )
}
