import React from 'react'
import "./HomePage.css";
import {Link} from 'react-router-dom';

const navbar = () => {
    return (
        <div className='mainpage'>
            <header id="header" className="d-flex align-items-center ">
                <div className="container-fluid container-xxl d-flex align-items-center">
                    <div id="logo" class="me-auto">
                        <h1><a href="index.html" style={{ fontFamily: "Lucida Handwriting", textDecoration: "none" }}>We<span>Care</span></a></h1>
                        <a href="index.html" class="scrollto"><img src="assets/img/logo.png" alt="" title="" /></a>
                    </div>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><Link to="/"><a className="nav-link scrollto active" href="/home">Home</a></Link></li>
                            <li><Link to="/about"><a className="nav-link scrollto" href="#about">About Us</a></Link></li>
                            <li><a className="nav-link scrollto" href="#speakers">Our Plans</a></li>
                            <li><a className="nav-link scrollto" href="#schedule">Contact Us</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    <a class="signin" href="#signin">Sign In</a>
                </div>
            </header>
        </div>
    )
}

export default navbar