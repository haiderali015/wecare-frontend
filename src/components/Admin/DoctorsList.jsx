import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { adddata, deldata } from '../context/ContextProvider';
import { updatedata } from '../context/ContextProvider'
import Button from 'react-bootstrap/Button';
import "./doctorlist.css"

const DoctorsList = () => {
  const navigate =useNavigate();
  const [getdoctordata, setDoctordata] = useState([]);
  
  const { udata, setUdata } = useContext(adddata);

  const { updata, setUPdata } = useContext(updatedata);

  const { dltdata, setDLTdata } = useContext(deldata);
  const [query,setQuery]=useState("");

  const deleteuser = async (id) => {
    console.log("id is" + id)

    const res2 = await fetch(`/deleteDoctor/${id}`, {
      
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
      console.log("Doctor deleted");
      // setDLTdata(deletedata);
      setDoctordata(getdoctordata.filter((doctor) => doctor.Id !== id)); // remove deleted doctor from state
    }
  }
  

  const getdata = async () => {
    const res = await fetch("/getAllDoctors", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setDoctordata(data)
    }
  }

  useEffect(() => {
    getdata();
  }, [])

  const handleAddDoctorClick = () => {
    navigate("/Admin/AddDoctor");
  };

  return (
    <>
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>All Doctors</h1>

        <Button className="btn-add-doctor" variant="outline-primary" onClick={handleAddDoctorClick}>Add Doctor +</Button>
        <br/>
        <input type="text" placeholder='Search Doctor' className='search' onChange={e => setQuery(e.target.value)}/>
      </div>
    

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
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </> : ""
        }
      {getdoctordata.length > 0 ? (
        <Table striped bordered hover variant="dark">
          <thead>

            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Experience</th>
              <th>Degree</th>
              <th>Hospital</th>
              <th>CNIC</th>
              <th>City</th>
              <th>Hospital Id</th>
              <th>Password</th>
              <th scope="col" style={{ fontSize: "17px" }}></th>

            </tr>
          </thead>
          <tbody>
            {getdoctordata.filter((element)=>element.username.toLowerCase().includes(query)).map((element) => (
              <tr key={element.Id}>
                <th scope="row">{element.Id}</th>
                <td>{element.username}</td>
                <td>{element.Experience}</td>
                <td>{element.Degree}</td>
                <td>{element.hospital}</td>
                <td>{element.cnic}</td>
                <td>{element.city}</td>
                <td>{element.HospitalId}</td>
                <td> {"**Confidential**"} </td>

                <td className="d-flex justify-content-between">
                  <NavLink to={`editDoctor/${element.Id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink>
                  <button className="btn btn-danger" onClick={() => deleteuser(element.Id)}><DeleteOutlineIcon /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p>No data available.</p>
      )}
    </>
  )
}

export default DoctorsList
