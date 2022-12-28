import React from 'react'
import {Link} from "react-router-dom";
import "./HomePage.css";

const navbar = () => {
    return (
        <div className='mainpage'>
            <header id="header" className="d-flex align-items-center ">
                <div className="container-fluid container-xxl d-flex align-items-center">
                    <div id="logo" class="me-auto">
                        <h1><Link to="/" style={{ fontFamily: "Lucida Handwriting", textDecoration: "none" }}>We<span>Care</span></Link></h1>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li ><Link to="/" style={{textDecoration:"none"}}>Home</Link></li>
                            <li><Link to="/about" style={{textDecoration:"none"}}>About Us</Link></li>
                            <li><a className="nav-link scrollto" href="#speakers">Our Plans</a></li>
                            <li><Link to="/contactus" style={{textDecoration:"none"}}>Contact Us</Link></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    <button class="signin" href="#signin"><Link to="/signin" style={{textDecoration:"none",color:"white"}}>Sign In</Link></button>
                </div>
            </header>
        </div>
    )
}

export default navbar