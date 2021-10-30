import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <div className="footer">
            <b data-testid="copyright" className="copyrights-name m-2">Film & Chill &copy; 2021</b>
            <section style={{ float: 'right' }}>
                <span className="fa fa-facebook fa-2x m-2" style={{ color: 'blue' }}></span>
                <span className="fa fa-gitlab fa-2x m-2" style={{ color: 'gold' }}></span>
                <span className="fa fa-youtube fa-2x m-2" style={{ color: 'red' }}></span>
            </section>
            {/* <div>
                <b data-testid="location" className="m-4">Film&Chill copy& 2021</b>
                <b data-testid="mail" className="m-4">gl@globallogic.com</b>
                <b data-testid="mobile" className="m-4">+91 9565365659</b>
            </div> */}
        </div>
    )
}
