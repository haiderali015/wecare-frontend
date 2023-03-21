import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';


const PatientList = () => {
  const [getPatientData,setPatientData]=useState([])

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
    <h1>All Users</h1>
    {getPatientData.length > 0 ? (
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>CNIC</th>
            <th>Phone</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {getPatientData.map((element) => (
            <tr key={element.id}>
              <th scope="row">{element.id}</th>
              <td>{element.name}</td>
              <td>{element.cnic}</td>
              <td>{element.phonenumber}</td>
              <td>{element.password.substring(0, 10)+"..."}</td>
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
