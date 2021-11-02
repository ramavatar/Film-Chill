import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <div className="footer">
            <b data-testid="copyright" className="copyrights-name m-2">Film & Chill &copy; 2021</b>
            <div>
                
                <span data-testid="location" className="fa fa-map-marker m-4"> Noida , Uttar Pradesh </span >
                <span data-testid="mail" className="fa fa-envelope m-4"> info@filmchill.com</span >
                <span data-testid="mobile" className="fa fa-phone m-4"> +91 9876543210</span >
            </div>
        </div>
    )
}
