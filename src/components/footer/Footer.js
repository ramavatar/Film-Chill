import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <div className="footer">
            <b data-testid="copyright" className="copyrights-name m-2">Film & Chill &copy; 2021</b>
            <div>
                
                <span data-testid="location" className="fa fa-map-marker ms-3 me-3 my-2"> Noida , Uttar Pradesh </span >
                <span data-testid="mail" className="fa fa-envelope ms-3 me-3 my-2"> info@filmchill.com</span >
                <span data-testid="mobile" className="fa fa-phone ms-3 me-3 my-2"> +91 9876543210</span >
            </div>
        </div>
    )
}
