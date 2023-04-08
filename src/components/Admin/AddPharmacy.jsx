import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import NavbarAdmin from './NavbarAdmin';




 const AddPharmacy = () => {
  const navigate = useNavigate();

  const [inpval, setINP] = useState({
        name: "",
        address:"",
        city: "",
        password: "",
        phonenumber: "",
        
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

    const { name, address, city, password, phonenumber} = inpval;


    if (name === "") {
        alert("Name is required")
    } else if (address === "") {
        alert("Address is required")
    } 
    else if (city === "") {
        alert("City of Doctor is required")
    }
    else if (password === "") {
        alert("Password is required")
    }else if (phonenumber === "") {
        alert("Phone Number is required")
    } 
    else {

        const res = await fetch("/addnewPharmacy", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, address, city, password, phonenumber
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
            console.log("Pharmacy Added");

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
                        <h3 style={{color:"black"}}>Add Pharmacy</h3>
                        <form class="requires-validation" novalidate>

                            <div class="col-md-12">
                            <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name' />
                            </div>

                            <div class="col-md-12">
                            <input type="text" value={inpval.address} onChange={setdata} name="address" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Address' />
                            </div>

                            <div class="col-md-12">
                            <input type="text" value={inpval.city} onChange={setdata}  name="city" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='City'/>
                            </div>

                            <div class="col-md-12">
                            <input type="text" value={inpval.password} onChange={setdata}  name="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Password'/>
                            </div>
                            
                            <div class="col-md-12">
                            <input type="text" value={inpval.phonenumber} onChange={setdata}  name="phonenumber" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Contact'/>
                            </div>

                            

                            <div class="form-button mt-3">
                                <button id="submit" type="submit" class="btn btn-primary" onClick={addinpdata}>Add Pharmacy +</button>
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
export default AddPharmacy