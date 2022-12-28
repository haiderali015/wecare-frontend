import React from 'react'
import "./HomePage.css";
import {Link} from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className='image'>


        <div className='contents'>
          <h1>Your Premium <br />Health Care Companion</h1>
          <div class="dropdown">
            <Link to="/signup"><button>Sign Up</button></Link>
            {/* <div>
              <a href="#">Doctor</a>
              <a href="#">Patient</a>
              <a href="#">Medical Pharmacy</a>
            </div> */}
          </div>

        </div>
      </div>


    </>
  )
}

export default Homepage