import React,{useState} from 'react'
import Navbar2 from './Navbar2';

import Profile from './Profile';
import "./PatientHome.css";


function Main() {
    // const[select,setSelect]=useState()
  return (
    <>
    <Navbar2/>
    <div className='main'>
       
    
    <div className='container'>
   
    
    
        <div className='right'>
        <h4>All Filters</h4><br></br>
        <div className='drop'>
        
        <div className='booking'>
        <h4>Type of Booking</h4>
        
        <input type="checkbox" />
            Call For Booking<br></br>
            <input type="checkbox" />
            Online Booking
        
        </div>
        <div className='availabl'>
        <h4>Availability</h4>
        
        <input type="checkbox" />
            Today<br></br>
            <input type="checkbox" />
            Tomorro
        
        </div>
        <div className='gender'>
        <h4>Gender</h4>
        
        <input type="checkbox" />
            male
        
        </div>
        <div className='fee'>
            <h4>fee range</h4>
            <select>
                <option>0-500</option>
                <option>1000-2500</option>
                <option>1500-2000</option>
                <option>2500-3000</option>
            </select>
        </div>
        </div>

        </div>
      
    </div>
    <div className='container'>
    <h2> 146
    Best Heart Specialists in Lahore</h2>
    <p>Also known as Cardiologists, Heart Doctors, Doctors of Cardiology, Mahir-e-Amraz-e- Qalb,</p>
  
        <div className='left'>
        <img src='https://cdn3d.iconscout.com/3d/premium/thumb/profile-6073860-4996977.png'></img>
        <div className='detail'>
        <h3>Dr. Muhammad Kashif Zafar</h3>
        <p>Cardiologist</p>
        <p>30 Years Experience</p>
        <h5>MBBS, FCPS, FCPS</h5></div>
        <div className='button'> 
        <button className='btn'>Appointment</button><br></br>
        <button className='btn1'> profile</button>
        </div>
       
        </div>
        
       
       
    </div>
    </div>
    </>
  )
}

export default Main