import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavbarAdmin from './NavbarAdmin';




 const AddDoctor = () => {
  const navigate = useNavigate();

  const [inpval, setINP] = useState({
        username: "",
        Experience:"",
        degree: "",
        Type: "",
        HospitalID: "",
        password:"",
        cnic: "",
        city: "",
        hospital:"",
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

  const addinpdata = async (e) => {
    e.preventDefault();

    const { username, Experience, degree, Type, HospitalID, password ,cnic,city,hospital} = inpval;


    if (username === "") {
        alert("name is required")
    } else if (degree === "") {
        alert("degree is required")
    } 
    else if (Type === "") {
        alert("Type of Doctor is required")
    }
    else if (HospitalID === "") {
        alert("HospitalID is required")
    }else if (password === "") {
        alert("password is required")
    }else if (cnic === "") {
        alert("cnic is required")
    }
    else if (city === "") {
        alert("city is required")
    }else if (hospital === "") {
        alert("Hospital name is required")
    } 
    else {

        const res = await fetch("/addnewDoctor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username, Experience, degree, Type, HospitalID, password ,cnic,city,hospital
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
            alert("error");

        } else {
            navigate('/Admin')
            // setUdata(data)
            console.log("Doctor Added");

        }
    }

   


}
  return (
    <>
    <NavbarAdmin/>
    <div className="container">

      <div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3 style={{color:"black"}}>Add Doctor</h3>
                        <form class="requires-validation" novalidate>

                            <div class="col-md-12">
                            <input type="text" value={inpval.username} onChange={setdata} name="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name' />
                            </div>

                            <div class="col-md-12">
                            <input type="text" value={inpval.Experience} onChange={setdata} name="Experience" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Experience' />
                            </div>

                            <div class="col-md-12">
                            <input type="text" value={inpval.degree} onChange={setdata}  name="degree" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Degree'/>
                            </div>

                            <div class="col-md-12">
                            <input type="text" value={inpval.Type} onChange={setdata}  name="Type" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Type'/>
                            </div>
                            
                            <div class="col-md-12">
                            <input type="text" value={inpval.HospitalID} onChange={setdata}  name="HospitalID" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='HospitalID'/>
                            </div>

                            <div class="col-md-12">
                            <input type="text" value={inpval.password} onChange={setdata}  name="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='password'/>
                            </div>
                            
                            <div class="col-md-12">
                            <input type="text" value={inpval.cnic} onChange={setdata}  name="cnic" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='cnic'/>
                            </div>
                            
                            <div class="col-md-12">
                            <input type="text" value={inpval.city} onChange={setdata}  name="city" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='city'/>
                            </div>

                            <div class="col-md-12">
                            <input type="text" value={inpval.hospital} onChange={setdata}  name="hospital" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Hospital name'/>
                            </div>
                          
                        

                            <div class="form-button mt-3">
                                <button id="submit" type="submit" class="btn btn-primary" onClick={addinpdata}>Add Doctor +</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </>

  )
}
export default AddDoctor