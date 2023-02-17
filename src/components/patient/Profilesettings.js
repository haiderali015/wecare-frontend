import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { updatedata } from '../context/ContextProvider'
import { useNavigate } from 'react-router-dom';import Footer from '../Footer';
import Navbar2 from '../Navbar2';
import "./profilesetting.css";

const Profilesettings = () => {


    const {updata, setUPdata} = useContext(updatedata)

   const navigate = useNavigate();

    const [inpval, setINP] = useState({
        name: "",
        phonenumber: "",
        password: "",
        })

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


    // const { id } = useParams("");
    // const { id } = 1;

    // console.log("id is ",id);



    const getdata = async () => {

        const res = await fetch(`/indusers/${1}`, {
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



    const updateMedicne = async(e)=>{
        e.preventDefault();

        const {name,phonenumber,password} = inpval;

        const res2 = await fetch(`/updatepatient/${1}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name,phonenumber,password
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            navigate('/about')
            // setUPdata(data2);
        }

    }

  return (
    <>
<Navbar2/>
    <div class="container rounded bg-white mt-5 mb-5">
    <div class="row">
        <div class="col-md-3 border-right">
            <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span class="font-weight-bold"></span><span class="text-black-50"></span><span> </span></div>
        </div>
        <div class="col-md-5 border-right">
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Profile Settings</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value={inpval.name} onChange={setdata} name="name"/></div>
                    <iv class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control"  placeholder="surname"/></iv>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">phoneNumber</label><input type="text" class="form-control" placeholder="Phone number" value={inpval.phonenumber} onChange={setdata} name="phonenumber"/></div>
                    <iv class="col-md-6"><label class="labels">Password</label><input type="text" class="form-control" value={inpval.password} onChange={setdata} name="password" placeholder="password"/></iv>
                </div>
                <div class="row mt-3">
                    <div class="col-md-6"><label class="labels">City</label><input type="text" class="form-control" placeholder="country" value=""/></div>
                    <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"/></div>
                </div>
                <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="submit" onClick={updateMedicne}>Save Profile</button></div>
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
<Footer/>
</>
  )
}

export default Profilesettings