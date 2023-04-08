import React, { useState, useEffect, useContext } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink, useNavigate } from 'react-router-dom';
import { adddata, deldata } from '../context/ContextProvider';
import { updatedata } from '../context/ContextProvider'
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
  

  const { udata, setUdata } = useContext(adddata);

  const { updata, setUPdata } = useContext(updatedata);

  const { dltdata, setDLTdata } = useContext(deldata);

//   const deleteuser = async (id) => {

//     const res2 = await fetch(`/deleteuser/${id}`, {
//         method: "DELETE",
//         headers: {
//             "Content-Type": "application/json"
//         }
//     });

//     const deletedata = await res2.json();
//     console.log(deletedata);

//     if (res2.status === 422 || !deletedata) {
//         console.log("error");
//     } else {
//         console.log("user deleted");
//         // setDLTdata(deletedata)
//         // getdata();
//     }

// }


const deleteuser = async (id) => {
  const res2 = await fetch(`/deleteuser/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });

  const deletedata = await res2.json();
  console.log(deletedata);

  if (res2.status === 422 || !deletedata) {
    console.log("error");
  } else {
    console.log("Medicine deleted");
    // setDLTdata(deletedata);
    setUserdata(getuserdata.filter((pharmacy1) => pharmacy1.id !== id)); // remove deleted doctor from state
  }
}

const prescription =()=>{
  navigate("/medicalrecord")
}




  const getdata = async () => {
    const res = await fetch(`/getAllAppointments/${PatientID}`, {
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
      setUserdata(data)
      console.log("get data");

    }

  }

  useEffect(() => {
    getdata();
  }, [])

  
    
  return (
    <>

    
      

       {
        udata ?
            <>
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>{udata.name}</strong>  added succesfully!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </> : ""
       }
        {
        updata ?
            <>
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>{updata.name}</strong>  updated succesfully!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </> : ""
        }

        {
        dltdata ?
            <>
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>{dltdata.name}</strong>  deleted succesfully!
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={shoot}></button>
                </div>
            </> : ""
        }


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


