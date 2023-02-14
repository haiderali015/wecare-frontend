import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./medicine.css";


import "./pharmacy.css";



 const AddMedicine = () => {
  const navigate = useNavigate();

  const [inpval, setINP] = useState({
    name: "",
    mg: "",
    type: "",
    quantity: "",
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

    const { name, mg, type, quantity} = inpval;


    if (name === "") {
        alert("name is required")
    } else if (mg === "") {
        alert("mg is required")
    } 
    else if (quantity === "") {
        alert("quantity is required")
    } 
    else {

        const res = await fetch("/addMedicine", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, mg, type, quantity
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
            alert("error");

        } else {
            navigate('/pharmacy')
            // setUdata(data)
            console.log("medicine added");

        }
    }

   


}
  return (
    <>
    <div className="container">

      <div class="form-body">
        <div class="row">
            <div class="form-holder">
                <div class="form-content">
                    <div class="form-items">
                        <h3 style={{color:"black"}}>Add Medicine</h3>
                        <form class="requires-validation" novalidate>

                            <div class="col-md-12">
                            <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name of Medicine' />
                            </div>

                            <div class="col-md-12">
                            <input type="text" value={inpval.mg} onChange={setdata}  name="mg" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Mg'/>
                            </div>

                           {/* <div class="col-md-12">
                                <select class="form-select mt-3" required>
                                      <option  onChange={setdata} name="type" nameselected disabled value={inpval.type}>Type</option>
                                      <option onChange={setdata} name="type" value={inpval.type}>Tablet</option>
                                      <option onChange={setdata} name="type" value={inpval.type}>Syrup</option>
                               </select>
                                <div class="valid-feedback">You selected a position!</div>
                                <div class="invalid-feedback">Please select Type of medicine</div>
                           </div> */}

                           <div class="col-md-12">
                            <input type="text" value={inpval.type} onChange={setdata} name="type" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Syrup or Tablet'/>
                            </div>

                           <div class="col-md-12">
                            <input type="text" value={inpval.quantity} onChange={setdata}  name="quantity" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Quantity'/>
                            </div>


                          
                        

                            <div class="form-button mt-3">
                                <button id="submit" type="submit" class="btn btn-primary" onClick={addinpdata}>Add Medicine</button>
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
export default AddMedicine