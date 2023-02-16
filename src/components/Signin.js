import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './navbar';
import Footer from './Footer';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate();

    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const login = async  (event) => {
            event.preventDefault(); // prevent default form submission behavior
            console.log(event);
          
        // console.log(username);
        // console.log(password);

        const userData=await Axios.post("http://localhost:8001/login", {
            
            username:username,
            password:password,
            
            
    })
    // console.log(userData.data[0].id)
    if(userData.data[0]){
    if(userData.data[0].name==username)
    {
        console.log("redirect")
        navigate('/Pharmacy');
    }
    else{
        console.log("wrong id ")
    }
}
else{

    console.log("error")
}
    
    
  }

  return (
        <><Navbar/>

        <div className="signupimage">
        <div className='signin_contents'>
            <div className="col-sm-6 col-md-4 col-md-offset-4">
                <h1 className="text-center login-title" style={{ fontFamily: "Lucida Handwriting", textDecoration: "none" }}>Sign in to continue to <span style={{ color:"white", fontWeight: 'bold' }}>We</span><span style={{ fontWeight: 'bold' }}>Care</span></h1>
                <div className="account-wall">
                    <img className="profile-img" src="https://www.citypng.com/public/uploads/preview/-115891627739whel2jtx7.png"
                        alt=""/>
                    <form className="form-signin" action='' method='POST'>

                    <input type="text" className="form-control" placeholder="name" style={{textTransform:"lowercase" }} onChange={(e)=>{setUsername(e.target.value)}} autoFocus required/>
                    <input type="password" className="form-control" placeholder="Password" style={{textTransform:"lowercase" }} onChange={(e)=>{setPassword(e.target.value)}} required/>
                    <button className="btn btn-lg btn-primary btn-block" value="LOGIN" onClick={login}>
                        Sign in</button>
                    <label className="checkbox pull-left">
                        <input type="checkbox" value="remember-me"/>
                        Remember me
                    </label>
                    <a href="#" className="pull-right need-help">Need help? </a><span className="clearfix"></span>
                    </form>
                </div>
                <a className="text-center new-account"><Link to="/signup" style={{textDecoration:"none"}}>Create an account</Link> </a>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Signin