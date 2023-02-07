import React from 'react'
import { Link } from 'react-router-dom';
import "./medicine.css";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '@mui/material/Button';




const Medicine = () => {
  console.log("hi");
  return (
    <>
      <div className="mt-5">
      <div className='heading'>
      <h1 style={{textAlign:"center"}}> Medicine Inventory </h1>

      </div>

        <div className="container">
        <div className="add_btn mt-2 mb-3">
          </div>

          <table class="table" style={{marginTop:"40px"}}>

            <thead>
              <tr className="table-dark" style={{height:"40px"}}>
                <th scope="col" style={{fontSize:"17px"}}>id</th>
                <th scope="col" style={{fontSize:"17px"}}>Medicine</th>
                <th scope="col" style={{fontSize:"17px"}}>Mg</th>
                <th scope="col" style={{fontSize:"17px"}}>Type</th>
                <th scope="col" style={{fontSize:"17px"}}>Quantity</th>
                <th scope="col" style={{fontSize:"17px"}}></th>
                <th scope="col" style={{fontSize:"17px"}}></th>
                <th scope="col" style={{fontSize:"17px"}}></th>

              </tr>
            </thead>
            <tbody >
              <tr>
                <th scope="row">1</th>
                <td>Panadol</td>
                <td>50mg</td>
                <td>Tablet</td>
                <td>300 Tablets</td>

                <td><button className="btn btn-success"><RemoveRedEyeIcon /></button></td>
                <td><button className="btn btn-primary"><CreateIcon /></button></td>
                <td><button className="btn btn-danger"><DeleteOutlineIcon /></button></td>

              </tr>
              <tr>
              <th scope="row">2</th>
                <td>Panadol</td>
                <td>50mg</td>
                <td>Tablet</td>
                <td>300 Tablets</td>

                <td><button className="btn btn-success"><RemoveRedEyeIcon /></button></td>
                <td><button className="btn btn-primary"><CreateIcon /></button></td>
                <td><button className="btn btn-danger"><DeleteOutlineIcon /></button></td>
              </tr>
              <tr>
              <th scope="row">3</th>
                <td>Panadol</td>
                <td>50mg</td>
                <td>Tablet</td>
                <td>300 Tablets</td>

                <td><button className="btn btn-success"><RemoveRedEyeIcon /></button></td>
                <td><button className="btn btn-primary"><CreateIcon /></button></td>
                <td><button className="btn btn-danger"><DeleteOutlineIcon /></button></td>
              </tr>
            </tbody>

          </table>


        </div>
      </div>
    </>)
}

export default Medicine