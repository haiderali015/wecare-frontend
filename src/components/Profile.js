import React from 'react'
import Navbar2 from './Navbar2'
import "./PatientHome.css";

function Profile() {
  return (
    <div>
      <Navbar2/>
    <div className='profile'>
    <div className='MAIN'> 
    <div className='pro'>
    <div className='pro-img'>
    <img style={{height:"200px",width:"200px"}}src={require("../assets/doctor3.jpg")}></img></div>

        <div className='detail-1'>
        <h3>Dr. Muhammad Kashif Zafar</h3>
        <p>Cardiologist</p>
        <p>30 Years Experience</p>
        <h5>MBBS, FCPS, FCPS</h5></div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className='artical'>
 
          <article> 
          <div className='experience'><p>30 Years Experience</p> </div> </article>
          <article> <div className='time'>  <p>0 minutes wait</p></div> </article>
          <article> <div className='emotation'><p>99% of happy patients</p> </div> </article>
          
        </div>
        <br/>
        <br/>

        <div className='practic'>
        <br/>

          <h5 style={{ textAlign: 'justify',marginLeft:'2rem'}}>Practice Locations</h5>
          <div className='institute'> 
          <article>Punjab Institute of Cardiology
          Jail Road, Shadman, Lahore, Punjab, Pakistan </article>
          <article> Monday, Tuesday, Wednesday, Thursday, Friday, Saturday : 02:00 PM to 03:00 PM
          </article>
          </div>
          <div className='hospital'> 
          <article> Omar Hospital and Cardiac Centre
          Plot 435  Phase 1, Johar Town, Lahore, Punjab, Pakistan</article>
          <article> Monday, Tuesday, Wednesday, Thursday, Friday, Saturday : 08:00 PM to 10:00 PM</article>
          </div>
        </div>
        <div className='links' style={{width:'auto',height:"30px" ,backgroundColor:'#f4f3f3', justifyContent:' space-around' ,display:'flex'}}>
       <div className='anchor' style={{ justifyContent:' space-between' ,textdecoration:'none'}}> 
       <a href='#'>Review</a>   </div>

       <div><a href='#'>About</a></div>
       
       <div><a href='#'>Services</a></div>
       
       <div>  <a href='#'>More-Info</a></div>
     
       <div>
       <a href='#'>FAQs</a></div>
       
     </div>
        
    </div>
    <div className='side-box'>
    <div className='sideHeader' style={{backgroundColor:'#0d95c9',fontSize: '22px', flexWrap: 'wrap',alignItems: 'center',borderRadius: '4px 4px 0 0',padding: '0 28px',  fontWeight: '600',height: '58px',marginTop:'0px'} }> 
    <h2 style={{color:'white', fontSize: '22px',  fontWeight: '600',} }> Book an appointment</h2>
    </div>
    <div className='bookin-detail'>
    <h4>Omar Hospital and Cardiac Centre</h4>
    <span>Plot 435 Block D Phase 1, Johar Town, Lahore, Punjab</span>
    <p>Fee: PKR 2000</p>
     </div>
     <div className='day'>
      <h4> Pick your booking slot</h4>
      <select style={{  cursor: 'pointer', borderRadious:'7px',backgroundColor:'',fontWeight: '40', width:'50%',height:'5vh'}}>
                <option>MONDAY</option>
                <option>TUESDAY</option>
                <option>WEDNESDAY</option>
                <option>Thursday</option>
                <option>FRIDAY</option>
                
            </select>
            <h4> TIMING</h4>
      <select style={{cursor: 'pointer', borderRadious:'7px',backgroundColor:'',fontWeight: '40', width:'50%',height:'5vh'}}>
                <option>8:00PM</option>
                <option>8:30PM</option>
                <option>9:00PM</option>
                <option>9:30PM</option>
               
                
            </select>
     </div>
   
      
   
     </div>
    </div>
    
    </div>
  )
}

export default Profile