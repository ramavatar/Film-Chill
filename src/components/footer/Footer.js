import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <div className="footer">
            <b data-testid="copyright" className="copyrights-name m-2">Film & Chill &copy; 2021</b>
            <section style={{ float: 'right' }}>
                <a href="https://www.facebook.com/BookMyShowIN/" target="_blank">
                <span className="fab fa-facebook-f fa-2x m-2" style={{ color: 'blue' }}></span>
                </a>
                <a href="https://gitlab-gl.stackroute.in/capstone-project/filmandchill.git" target="_blank">
                <span className="fab fa-gitlab fa-2x m-2" style={{ color: 'gold' }}></span>
                </a>
                <a href="https://www.youtube.com/watch?v=qX_Jw9lYMbw" target="_blank">
                <span className="fab fa-youtube fa-2x m-2" style={{ color: 'red' }}></span>
                </a>
            </section>
            {/* <div>
                <b data-testid="location" className="m-4">Film&Chill copy& 2021</b>
                <b data-testid="mail" className="m-4">gl@globallogic.com</b>
                <b data-testid="mobile" className="m-4">+91 9565365659</b>
            </div> */}
        </div>
    )
}
