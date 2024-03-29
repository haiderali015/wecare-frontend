import React from 'react'
import "./HomePage.css";
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { NavLink } from 'react-router-dom';
import Navbar from './navbar';

const About = () => {
  return (
    <><Navbar/>
    <div className='aboutimage'>
      <div className='contents'>
        <h1>About Us</h1>
        <div className='mui'>
        <p><HomeIcon/><span><Link to="/"><button className="to_home">Home</button></Link></span> <ArrowForwardIosIcon style={{fontSize:"large"}}/> <span><button style={{color:"#00BFFF"}}>About</button></span></p>
        </div>
      </div>
    </div>
    </>)
}

export default About