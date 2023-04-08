import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { adddata, deldata } from '../context/ContextProvider';
import { updatedata } from '../context/ContextProvider'
import Button from 'react-bootstrap/Button';
import "./doctorlist.css"

const Pharmacylist = () => {
  const navigate =useNavigate();
  const [getpharmacydata, setPharmacydata] = useState([]);
  
  const { udata, setUdata } = useContext(adddata);

  const { updata, setUPdata } = useContext(updatedata);

  const { dltdata, setDLTdata } = useContext(deldata);
  const [query,setQuery]=useState("");

  const deleteuser = async (id) => {
    const res2 = await fetch(`/deletepharmacy/${id}`, {
      
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
      console.log("Pharmacy deleted");
      // setDLTdata(deletedata);
      setPharmacydata(getpharmacydata.filter((pharmacy) => pharmacy.id !== id)); // remove deleted pharmacy from state
    }
  }
  

  const getdata = async () => {
    const res = await fetch("/getAllPharmacies", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setPharmacydata(data)
    }
  }

  useEffect(() => {
    getdata();
  }, [])

  const handleAddPharmacyClick = () => {
    navigate("/Admin/AddPharmacy");
  };

  return (
    <>
     <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: 0 }}>All Pharmacies</h1>

        <Button className="btn-add-doctor" variant="outline-primary" onClick={handleAddPharmacyClick}>Add Pharmacy +</Button>
        <br/>
        <input type="text" placeholder='Search Pharmacy' className='search' onChange={e => setQuery(e.target.value)}/>
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
      {getpharmacydata.length > 0 ? (
        <Table striped bordered hover variant="dark">
          <thead>

            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Password</th>
              <th>Phone Number</th>
            
              <th scope="col" style={{ fontSize: "17px" }}></th>

            </tr>
          </thead>
          <tbody>
            {getpharmacydata.filter((element)=>element.name.toLowerCase().includes(query)).map((element) => (
              <tr key={element.id}>
                <th scope="row">{element.id}</th>
                <td>{element.name}</td>
                <td>{element.address}</td>
                <td>{element.city}</td>
                <td>*******</td>
                <td>{element.phonenumber}</td>


                <td className="d-flex justify-content-between">
                  <NavLink to={`editPharmacy/${element.id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink>
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

export default Pharmacylist
