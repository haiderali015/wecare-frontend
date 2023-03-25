import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


const PatientList = () => {
  const [getPatientData,setPatientData]=useState([])
  const [query,setQuery]=useState("");


  const deleteuser = async (id) => {
    console.log("id is" + id)

    const res2 = await fetch(`/deletePatient/${id}`, {
      
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
      console.log("User deleted");
      // setDLTdata(deletedata);
      setPatientData(getPatientData.filter((User) => User.id !== id)); // remove deleted Uder from state
    }
  }

  const getdata = async () => {
    const res = await fetch("/getAllPatients", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setPatientData(data)
    }
  }
  
  useEffect(() => {
    getdata();
  }, [])


  return (
    <>
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>All Users</h1>

        <br/>
        <input type="text" placeholder='Search User' className='search' onChange={e => setQuery(e.target.value)}/>
      </div>
    
    {getPatientData.length > 0 ? (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>CNIC</th>
            <th>Phone</th>
            <th>Password</th>
            <th></th>

          </tr>
        </thead>
        <tbody>
          {getPatientData.filter((element)=>element.name.toLowerCase().includes(query)).map((element) => (
            <tr key={element.id}>
              <th scope="row">{element.id}</th>
              <td>{element.name}</td>
              <td>{element.cnic}</td>
              <td>{element.phonenumber}</td>
              <td>{element.password.substring(0, 10)+"..."}</td>
              <td className="d-flex justify-content-between">
                  <button className="btn btn-danger" onClick={() => deleteuser(element.id)}><DeleteOutlineIcon /></button>
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

export default PatientList
