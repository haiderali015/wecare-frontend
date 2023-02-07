import React, { useState } from 'react'
import "./HomePage.css";
import Navbar from './navbar';

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
        <><Navbar/>

            <div className='signupimage'>
                <div className='signupcontents'>
                    <div class="card-body p-md-5">
                        <div class="row justify-content-center text-white">
                            <div class="col-md-10 col-lg-8 col-xl-7 order-2 order-lg-1 margins">
                                <p class="text-center h1  text-white mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                <div class="d-flex justify-content-between m-5">
                                    {el()}
                                </div>


                                {usernow == "doctor" ?
                                    <>
                                        <form>

                                            <div class="row">
                                                <div class="col-md-6 mb-5">

                                                    <div class="form-outline">
                                                        <input type="text" id="firstName" class="form-control form-control-lg" />
                                                        <label class="form-label" for="firstName">First Name</label>
                                                    </div>

                                                </div>
                                                <div class="col-md-6 mb-6">

                                                    <div class="form-outline">
                                                        <input type="text" id="lastName" class="form-control form-control-lg" />
                                                        <label class="form-label" for="lastName">Last Name</label>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6 mb-5 d-flex align-items-center">

                                                    <div class="form-outline datepicker w-100">
                                                        <input type="text" class="form-control form-control-lg" id="birthdayDate" />
                                                        <label for="birthdayDate" class="form-label">Birthday</label>
                                                    </div>

                                                </div>
                                                <div class="col-md-6 mb-5">

                                                    <h5 class="mb-2 pb-1">Gender: </h5>

                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                            value="option1" checked />
                                                        <label class="form-check-label" for="femaleGender">Female</label>
                                                    </div>

                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                            value="option2" />
                                                        <label class="form-check-label" for="maleGender">Male</label>
                                                    </div>

                                                    <div class="form-check form-check-inline">
                                                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                                            value="option3" />
                                                        <label class="form-check-label" for="otherGender">Other</label>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6 mb-4 pb-2">

                                                    <div class="form-outline">
                                                        <input type="email" id="emailAddress" class="form-control form-control-lg" />
                                                        <label class="form-label" for="emailAddress">Email</label>
                                                    </div>

                                                </div>
                                                <div class="col-md-6 mb-4 pb-2">

                                                    <div class="form-outline">
                                                        <input type="tel" id="phoneNumber" class="form-control form-control-lg" />
                                                        <label class="form-label" for="phoneNumber">Phone Number</label>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="row">
                                                <div class="col-12">

                                                    <select class="select form-control-lg">
                                                        <option value="1" disabled>Choose option</option>
                                                        <option value="2">Subject 1</option>
                                                        <option value="3">Subject 2</option>
                                                        <option value="4">Subject 3</option>
                                                    </select>
                                                    <label class="form-label select-label">Choose option</label>

                                                </div>
                                            </div>

                                            <div class="mt-4 pt-2">
                                                <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
                                            </div>

                                        </form>
                                    </>
                                    : usernow == "pharmacist" ?
                                        <>
                                            <form>

                                                <div class="row">
                                                    <div class="col-md-6 mb-4">

                                                        <div class="form-outline">
                                                            <input type="text" id="firstName" class="form-control form-control-lg" />
                                                            <label class="form-label" for="firstName">First Name</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-6 mb-4">

                                                        <div class="form-outline">
                                                            <input type="text" id="lastName" class="form-control form-control-lg" />
                                                            <label class="form-label" for="lastName">Last Name</label>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-6 mb-4 d-flex align-items-center">

                                                        <div class="form-outline datepicker w-100">
                                                            <input type="text" class="form-control form-control-lg" id="birthdayDate" />
                                                            <label for="birthdayDate" class="form-label">Birthday</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-6 mb-4">

                                                        <h6 class="mb-2 pb-1">Gender: </h6>

                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                                value="option1" checked />
                                                            <label class="form-check-label" for="femaleGender">Female</label>
                                                        </div>

                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                                value="option2" />
                                                            <label class="form-check-label" for="maleGender">Male</label>
                                                        </div>

                                                        <div class="form-check form-check-inline">
                                                            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                                                value="option3" />
                                                            <label class="form-check-label" for="otherGender">Other</label>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-md-6 mb-4 pb-2">

                                                        <div class="form-outline">
                                                            <input type="email" id="emailAddress" class="form-control form-control-lg" />
                                                            <label class="form-label" for="emailAddress">Email</label>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-6 mb-4 pb-2">

                                                        <div class="form-outline">
                                                            <input type="tel" id="phoneNumber" class="form-control form-control-lg" />
                                                            <label class="form-label" for="phoneNumber">Phone Number</label>
                                                        </div>

                                                    </div>
                                                </div>

                                                <div class="row">
                                                    <div class="col-12">

                                                        <select class="select form-control-lg">
                                                            <option value="1" disabled>Choose option</option>
                                                            <option value="2">Subject 1</option>
                                                            <option value="3">Subject 2</option>
                                                            <option value="4">Subject 3</option>
                                                        </select>
                                                        <label class="form-label select-label">Choose option</label>

                                                    </div>
                                                </div>

                                                <div class="mt-4 pt-2">
                                                    <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
                                                </div>

                                            </form></>
                                        : <></>}
                                {usernow == "patient" ? <><form>

                                    <div class="row">
                                        <div class="col-md-6 mb-4">

                                            <div class="form-outline">
                                                <input type="text" id="firstName" class="form-control form-control-lg" />
                                                <label class="form-label" for="firstName">First Name</label>
                                            </div>

                                        </div>
                                        <div class="col-md-6 mb-4">

                                            <div class="form-outline">
                                                <input type="text" id="lastName" class="form-control form-control-lg" />
                                                <label class="form-label" for="lastName">Last Name</label>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-md-6 mb-4 d-flex align-items-center">

                                            <div class="form-outline datepicker w-100">
                                                <input type="date" class="form-control form-control-lg" id="birthdayDate" />
                                                <label for="birthdayDate" class="form-label">Birthday</label>
                                            </div>

                                        </div>
                                        <div class="col-md-6 mb-4">

                                        <h5 class="mb-2 pb-1">Gender: </h5>

                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                                                    value="option1" checked />
                                                <label class="form-check-label" for="femaleGender">Female</label>
                                            </div>

                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                                                    value="option2" />
                                                <label class="form-check-label" for="maleGender">Male</label>
                                            </div>

                                            <div class="form-check form-check-inline">
                                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                                                    value="option3" />
                                                <label class="form-check-label" for="otherGender">Other</label>
                                            </div>

                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 mb-4 pb-2">

                                            <div class="form-outline">
                                                <input type="email" id="emailAddress" class="form-control form-control-lg" />
                                                <label class="form-label" for="emailAddress">Email</label>
                                            </div>

                                        </div>
                                        <div class="col-md-6 mb-4 pb-2">

                                            <div class="form-outline">
                                                <input type="tel" id="phoneNumber" class="form-control form-control-lg" />
                                                <label class="form-label" for="phoneNumber">Phone Number</label>
                                            </div>

                                        </div>
                                    </div>


                                    <div class="row">
                                        <div class="col-md-6 mb-4 pb-2">

                                            <div class="form-outline">
                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                <label class="form-label" for="phoneNumber">Address</label>
                                            </div>

                                        </div>
                                        <div class="col-md-6 mb-4 pb-2">

                                            <div class="form-outline">
                                                <input type="email" id="emailAddress" class="form-control form-control-lg" />
                                                <label class="form-label" for="emailAddress">CNIC</label>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="mt-4 pt-2">
                                        <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
                                    </div>

                                </form></> : <></>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Patientregister;