import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        // footer will be displayed
        <div className="footer">
            <b data-testid="copyright" className="copyrights-name m-2">Film & Chill &copy; 2021</b>
            <div>
                <i id="location" className="fa fa-map-marker ms-3 me-3 my-2"> Noida , Uttar Pradesh </i >
                <i id="mail" className="fa fa-envelope ms-3 me-3 my-2"> info@filmchill.com </i >
                <i id="mobile" className="fa fa-phone ms-3 me-3 my-2"> +91 9876543210 </i >
            </div>
        </div>
    )
}
