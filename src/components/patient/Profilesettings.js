import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { updatedata } from '../context/ContextProvider'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'; import Footer from '../Footer';
import Navbar2 from '../Navbar2';
import jwtDecode from 'jwt-decode';
import "./profilesetting.css";

const Profilesettings = () => {




    const { updata, setUPdata } = useContext(updatedata)
    const token = localStorage.getItem('userToken');

    const [showchangepassfield, setshowchangepassfield] = useState(false);

    const handleshowpass = () => {
        setshowchangepassfield(true);
    }

    const decodedToken = jwtDecode(token);
    const PatientID = decodedToken.userId;


    const navigate = useNavigate();

    const [inpval, setINP] = useState({
        name: "",
        cnic: "",
        phonenumber: "",
        password: "",
    });

    



// ______________________________________

const [inpvall, setINPP] = useState({
    password: "",
   })

const setdataa = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINPP((preval) => {
        return {
            ...preval,
            [name]: value
        }
    })
}


const addinpdata = async (e) => {
    e.preventDefault();

    const { password} = inpvall;
    // console.log("update password is "+ password)



    if (password === "") {
        alert("New Password is required")
    } 
    else {
        const res = await fetch("/changepassword", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                password
            })
        });


        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
            alert("error");

        } else {
            alert("Password successfully Updated")
            console.log("password updated");

        }
    }

}


//________________________________________











    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const { id } = useParams("");
    console.log("patient id is " + PatientID);



    const getdata = async () => {

        const res = await fetch(`/indusers/${PatientID}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setINP(data[0])
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, []);


    const updatepatient = async (e) => {
        e.preventDefault();

        const { name, cnic, phonenumber, password, type } = inpval;

        const res2 = await fetch(`/updatepatient/${1}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, cnic, phonenumber, password, type
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if (res2.status === 422 || !data2) {
            alert("fill the data");
        } else {
            alert("Data Saved Successfully");
            //  navigate('/patienthomepage')
            // setUPdata(data2);
        }

    }
    return (
        <>
            <div class="container rounded bg-white mt-5 mb-5">
                <div class="row">

                    <div class="col-md-5 border-right">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h4 class="text-right">Profile Settings</h4>
                            </div>
                            <div class="row mt-2" >
                                <div class="col-md-12" style={{ width: "1000px" }}><label class="labels">Name</label><input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name' /></div>
                                <div class="col-md-12"><label class="labels">CNIC</label><input type="text" class="form-control" value={inpval.cnic} onChange={setdata} name="cnic" placeholder="CNIC" /></div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12"><label class="labels">phoneNumber</label><input type="text" class="form-control" placeholder="Phone number" value={inpval.phonenumber} onChange={setdata} name="phonenumber" /></div>




                                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="submit" onClick={handleshowpass}>Change Password</button></div>


                                {showchangepassfield && (
                                    <div class="col-md-12"><label class="labels">Enter new Password</label>
                                    <TextField
                                        hiddenLabel
                                        value={inpvall.password} onChange={setdataa} name="password"
                                        id="filled-hidden-label-normal"
                                        placeholder='Password'
                                        variant="filled"
                                        style={{ width: 350, marginTop: "5px" }}
                                    />
                                    <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="submit" onClick={addinpdata}>Update Password</button></div>

                                    </div>)}
                            </div>


                            <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="submit" onClick={updatepatient}>Save Profile</button></div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="p-3 py-5">
                            {/* <div class="d-flex justify-content-between align-items-center experience"><span>Edit Experience</span><span class="border px-3 p-1 add-experience"><i class="fa fa-plus"></i>&nbsp;Experience</span></div><br/>
                <div class="col-md-12"><label class="labels">Experience in Designing</label><input type="text" class="form-control" placeholder="experience" value=""/></div> <br/>
                <div class="col-md-12"><label class="labels">Additional Details</label><input type="text" class="form-control" placeholder="additional details" value=""/></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profilesettings