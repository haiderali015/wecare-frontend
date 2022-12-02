import React, { useState } from 'react'
import "./HomePage.css";

import { Link } from 'react-router-dom';
const Patientregister = () => {
    const types = ["patient", "pharmacist", "doctor"];
    const [usernow, setUsernow] = useState(types[0]);
    const el = () => {
        return types.map((user) => {
            return usernow == user ?
                <button type="button" className=" btn btn-primary btn-lg" >{user.toUpperCase()}</button> :
                <button type="button" onClick={() => setUsernow(user)} className=" btn btn-dark btn-lg" >{user}</button>
        })
    }
    return (
        <>
            <div className='signupimage'>
            <div className='signupcontents'>
                <div class="card-body p-md-5">
                    <div class="row justify-content-center text-white">
                        <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                            <p class="text-center h1  text-white mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                            <div class="d-flex justify-content-between m-5">
                                {el()}
                            </div>
                            <form class="mx-1 mx-md-4">


                                {usernow == "doctor" ? <>  <div class="d-flex flex-row align-items-center mb-4">
                                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-0">
                                        <input type="text" id="form3Example1c" class="form-control" />
                                        <label class="form-label" for="form3Example1c">Your Degree:</label>
                                    </div>
                                </div>
                                    <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="text" id="form3Example1c" class="form-control" />
                                            <label class="form-label" for="form3Example1c">Your Designation:</label>
                                        </div>
                                    </div></> : usernow == "pharmacist" ? <> <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="text" id="form3Example1c" class="form-control" />
                                            <label class="form-label" for="form3Example1c">Your District:</label>
                                        </div></div> 
                                        <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="number" id="form3Example1c" class="form-control" />
                                            <label class="form-label" for="form3Example1c">Your CNIC:</label>
                                        </div></div>
                                        <div class="d-flex flex-row align-items-center mb-4">
                                        <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                        <div class="form-outline flex-fill mb-0">
                                            <input type="text" id="form3Example1c" class="form-control" />
                                            <label class="form-label" for="form3Example1c">Your Phone no.:</label>
                                        </div></div></> : <></>}
                                <div class="d-flex flex-row align-items-center mb-4">
                                    <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-0">
                                        <input type="text" id="form3Example1c" class="form-control" />
                                        <label class="form-label" for="form3Example1c">Your Name</label>
                                    </div>
                                </div>
                                <div class="d-flex flex-row align-items-center mb-4">
                                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-0">
                                        <input type="email" id="form3Example3c" class="form-control" />
                                        <label class="form-label" for="form3Example3c">Your Email</label>
                                    </div>
                                </div>
                                <div class="d-flex flex-row align-items-center mb-4">
                                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-0">
                                        <input type="password" id="form3Example4c" class="form-control" />
                                        <label class="form-label" for="form3Example4c">Password</label>
                                    </div>
                                </div>

                                <div class="d-flex flex-row align-items-center mb-4">
                                    <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                                    <div class="form-outline flex-fill mb-0">
                                        <input type="password" id="form3Example4cd" class="form-control" />
                                        <label class="form-label" for="form3Example4cd">Repeat your password</label>
                                    </div>
                                </div>
                                {/* <div class="form-check d-flex justify-content-center mb-5"> */}
                                {/* <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" /> */}
                                {/* <label class="form-check-label" for="form2Example3"> */}
                                {/* I agree all statements in <a href="#!"><b className='text-warning text-decoration-none'>Terms of service</b></a> */}
                                {/* </label> */}
                                {/* </div> */}
                                <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                    <button type="button" class="btn btn-primary btn-lg">Register</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </div>


        </>
    )
}

export default Patientregister;