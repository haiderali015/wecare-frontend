import React, { useState, useEffect, useContext } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { NavLink, useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';



const Appointments = () => {
  const [getuserdata, setUserdata] = useState([]);
  const navigate = useNavigate();
  console.log(getuserdata);
  const shoot = () => {
    alert("Great Shot!");
  }
  const token = localStorage.getItem('userToken');

    const decodedToken = jwtDecode(token);
    const PatientID = decodedToken.userId; 
 

const prescription =()=>{
  navigate("/medicalrecord")
}




  const getdata = async () => {
    const res = await fetch(`/getAllAppointments/${PatientID}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
      
    }, console.log("Patient id is "+ PatientID));

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");

    } else {
      setUserdata(data)
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
              <h1 style={{ textAlign: "center" }}> Appointments Record </h1>
          </div>

            <div className="container">
              

              <table class="table" style={{ marginTop: "40px" }}>

                <thead>
                  <tr className="table-dark" style={{ height: "40px" }}>
                    <th scope="col" style={{ fontSize: "17px" }}>Doctor's Name</th>
                    <th scope="col" style={{ fontSize: "17px" }}>Hospital</th>
                    <th scope="col" style={{ fontSize: "17px" }}>Doctor Fee</th>
                    <th scope="col" style={{ fontSize: "17px" }}>Date</th>
                    <th scope="col" style={{ fontSize: "17px" }}  >Prescription</th>
                    <th></th>


                  </tr>
                </thead>
                <tbody >
                {
  getuserdata.map((element, id) => {
    return (
      <>
        <tr>
          <td>{element.DoctorName}</td>
          <td>{element.Hospital}</td>
          <td>{element.DoctorFee} /-</td>
          <td>{element.Time}</td>
          <td style={{ cursor:"pointer" }} onClick={prescription}><RemoveRedEyeIcon/></td>
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
export default Appointments


