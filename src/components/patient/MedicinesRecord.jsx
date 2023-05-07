import React, { useState, useEffect, useContext } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { NavLink, useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';



const MedicinesRecord = () => {
    
  const [getmedicinedata, setMedicinedata] = useState([]);
  const navigate = useNavigate();
  console.log(getmedicinedata);
  const shoot = () => {
    alert("Great Shot!");
  }
  const token = localStorage.getItem('userToken');

    const decodedToken = jwtDecode(token);
    const PatientName = decodedToken.username; 
 

const prescription =()=>{
  navigate("/medicalrecord")
}




const getdata = async () => {
  console.log("Patient name is " + PatientName);
  
  const res = await fetch(`/getMedicineRecord/${PatientName}`, {
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
    setMedicinedata(data);
    console.log("get data");
  }
}


  useEffect(() => {
    getdata();
  }, [])

  
    
  return (
    <>

          <div className="mt-5">
          <div className='heading'>
              <h1 style={{ textAlign: "center" }}> Medicines Record </h1>
          </div>

            <div className="container">
              

              <table class="table" style={{ marginTop: "40px" }}>

                <thead>
                  <tr className="table-dark" style={{ height: "40px" }}>
                    <th scope="col" style={{ fontSize: "17px" }}>Patient's Name</th>
                    <th scope="col" style={{ fontSize: "17px" }}>Pharmacy</th>
                    <th scope="col" style={{ fontSize: "17px" }}>Pharmacy Address</th>
                    <th scope="col" style={{ fontSize: "17px" }}>Medicine</th>
                    <th scope="col" style={{ fontSize: "17px" }}  >Quantity</th>
                    <th scope="col" style={{ fontSize: "17px" }}  >Total</th>
                    <th scope="col" style={{ fontSize: "17px" }}  >Date</th>

                    <th></th>


                  </tr>
                </thead>
                <tbody >
                {
  getmedicinedata.map((element, id) => {
    return (
      <>
        <tr>
          <td>{element.name}</td>
          <td>{element.pharmacyName}</td>
          <td>{element.pharmacyAddress}</td>
          <td>{element.medicine}</td>
          <td>{element.quantity}</td>
          <td>{element.total}</td>
          <td>{element.date}</td>
        </tr>

      </>
    )
  })
}
                  
                  </tbody>
                    </table>


                </div>
            </div>
        </>
    )
}
export default MedicinesRecord


