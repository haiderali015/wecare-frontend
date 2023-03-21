import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { updatedata } from '../context/ContextProvider'
import { useNavigate } from 'react-router-dom';


const Edit = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

   const {updata, setUPdata} = useContext(updatedata)

   const navigate = useNavigate();

    const [inpval, setINP] = useState({
        username: "",
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


    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`/indDoctor/${id}`, {
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


    const updateDoctors = async(e)=>{
        e.preventDefault();

        const {username,degree,Type,HospitalID,password,cnic,city,hospital} = inpval;

        const res2 = await fetch(`/updatedoctors/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                username,degree,Type,HospitalID,password,cnic,city,hospital
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 422 || !data2){
            alert("fill the data");
        }else{
            navigate('/Admin')
            // setUPdata(data2);
        }

    }

    return (
        <>
        {/* <Sidenav/> */}
        <div className="container">

            <div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3>Update Inventory</h3>
                        <form class="requires-validation" novalidate>

                            <div class="col-md-12">
                            <input type="text" value={inpval.username} onChange={setdata} name="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name'/>
                            </div>

                            <div class="col-md-12">
                            <input type="text" value={inpval.degree} onChange={setdata} name="degree" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Degree'/>
                            </div>
                            <div class="col-md-12">
                            <input type="text" value={inpval.Type} onChange={setdata} name="Type" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Type'/>
                            </div>

                            <div class="col-md-12">
                            <input type="text" value={inpval.HospitalID} onChange={setdata} name="HospitalID" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Hospital ID'/>
                            </div><div class="col-md-12">
                            <input type="text" value={inpval.password} onChange={setdata} name="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='password'/>
                            </div>

                            <div class="col-md-12">
                            <input type="text" value={inpval.cnic} onChange={setdata} name="cnic" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='CNIC'/>
                            </div>
                            <div class="col-md-12">
                            <input type="text" value={inpval.city} onChange={setdata} name="city" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='City'/>
                            </div>

                            <div class="col-md-12">
                            <input type="text" value={inpval.hospital} onChange={setdata} name="hospital" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Hospital Name'/>
                            </div>

                            
                           {/* <div class="col-md-12">
                                <select class="form-select mt-3" required>
                                      <option selected disabled value="">Type</option>
                                      <option value="jweb">Tablet</option>
                                      <option value="sweb">Syrup</option>
                               </select>
                                <div class="valid-feedback">You selected a position!</div>
                                <div class="invalid-feedback">Please select Type of medicine</div>
                           </div> */}



                          
                        

                            <div class="form-button mt-3">
                                <button id="submit" type="submit" class="btn btn-primary" onClick={updateDoctors}>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>









            {/* <form className="mt-4">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Mg</label>
                        <input type="number" value={inpval.mg} onChange={setdata} name="mg" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Type</label>
                        <input type="text" value={inpval.type} onChange={setdata} name="type" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Quantity</label>
                        <input type="number" value={inpval.quantity} onChange={setdata} name="quantity" class="form-control" id="exampleInputPassword1" />
                    </div>
                    
                    <button type="submit" onClick={updateMedicne} class="btn btn-primary">Submit</button>
                </div>
            </form> */}
        </div>
        </>
    )
}

export default Edit;
