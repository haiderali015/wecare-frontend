import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { updatedata } from '../context/ContextProvider'
import { useNavigate } from 'react-router-dom';
import NavbarAdmin from './NavbarAdmin';


const Editpharmacy = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

   const {updata, setUPdata} = useContext(updatedata)

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


    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`/inPharmacy/${id}`, {
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


    const updatePharmacyList = async(e)=>{
        e.preventDefault();

        const {name, address, city, password, phonenumber} = inpval;

        const res2 = await fetch(`/updatePharmacylist/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                name, address, city, password, phonenumber
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
        <NavbarAdmin/>
        <div className="container">

            <div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3>Update Inventory</h3>
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
                                <button id="submit" type="submit" class="btn btn-primary" onClick={updatePharmacyList}>Update</button>
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

export default Editpharmacy;
