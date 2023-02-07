import React from 'react'
import "./aboutus.css";
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { NavLink } from 'react-router-dom';
import Navbar from './navbar';
import daud from "../assets/daud.jpg";
import haider from "../assets/haider.jpg";
import zuhad from "../assets/zuhad.jpg";
import Footer from '../components/Footer';



const About = () => {
  return (
    <><Navbar/>
    <div className="about-section" style={{backgroundImage: `url("https://img.freepik.com/free-photo/stethoscope-frame-with-copy-space_23-2148506682.jpg?w=2000")`}}>
  <h1 >About Us</h1>
  <p>We Won’t Stop Until Patients Have The Healthcare Experience <br/>They Expect And Deserve.<br/>
And That’s What We’re Working On, Every Day.</p>
</div>

<h2 style={{textAlign:"center"}}>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
    <img src={haider} alt="Mike" style={{width:"100%", height:"50vh"}}/>
      <div className="container">
        <h3 style={{textAlign:"center", fontSize:"25px", fontWeight:"bold"}}>Haider Ali</h3>
        {/* <p className="title" style={{fontSize:"px",textAlign:"center"}}>CEO & Founder</p>
        <p style={{fontSize:"16px", textAlign:"center"}}>WeCare was the unique idea which lit his mind and after this he started to code the website.</p> */}
        {/* <p style={{fontSize:"12px"}}>bsef19m015@pucit.edu.pk</p> */}
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src={zuhad} alt="Mike" style={{width:"100%", height:"50vh"}}/>
      <div className="container">
      <h3 style={{textAlign:"center", fontSize:"25px", fontWeight:"bold"}}>Zuhad ul Haider</h3>
      {/* <p className="title" style={{fontSize:"20px",textAlign:"center"}}>CFO</p>
        <p style={{fontSize:"16px", textAlign:"center"}}>Zuhad helped Haider in developing the website by contributing his skills</p>
        <p style={{fontSize:"12px"}}>bsef19m016@pucit.edu.pk</p> */}
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
    <img src={daud} alt="Mike" style={{width:"100%", height:"50vh"}}/>
      <div className="container">
      <h3 style={{textAlign:"center", fontSize:"25px", fontWeight:"bold"}}>Daud Haider</h3>
      {/* <p className="title" style={{fontSize:"20px",textAlign:"center"}}>Finance Partner</p>
        <p style={{fontSize:"16px", textAlign:"center"}}>Daud has contribution in weCare in Financial Areas.</p>
        <p style={{fontSize:"12px"}}>bsef19m017@pucit.edu.pk</p> */}
      </div>
    </div>
  </div>
</div>

<Footer/>


    </>)
}

export default About