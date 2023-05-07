import React from 'react'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Box from "@mui/material/Box";
import jwtDecode from 'jwt-decode';


import "./pharmacy.css";
import { useState } from 'react';


const Invoice = () => {
  const navigate = useNavigate();

  const [gotobill, setgotobill] = useState(false);
  if (gotobill) {
    return <Navigate to="/bill" />
  }
  const currDate = new Date().toLocaleDateString();

  const token = localStorage.getItem('pharmacytoken');
  const decodedToken = jwtDecode(token);
  const PharmacyName = decodedToken.name;
  const PharmacyAddress = decodedToken.address;


  const [inpval, setINP] = useState({
    name: "",
    cnic: "",
    address: "",
    medicinename: "",
    quantity: "",
    price: "",
    total: "",
    PName:`${PharmacyName}`,
    PAddress:`${PharmacyAddress}`,
    date:`${currDate}`,
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

    const { name, cnic, address, medicinename, quantity, price, total , PName, PAddress,date} = inpval;


    const res = await fetch("/medicinesrecord", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, cnic, address, medicinename, quantity, price, total, PName, PAddress,date
      })
    });


    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
      alert("error");

    } else {
      alert("Record Added")

    }


  }






  return (
    <>
      <Box height={20} />
      <div >

        <Grid >

          <Card style={{ maxWidth: 1000, padding: "20px 5px", margin: "auto" }}>
            <CardContent>
              <Typography variant="h5" color="textPrimary" component="h5" gutterBottom >
                <h2 style={{ fontWeight: "600", fontSize: "20px" }}> <PersonAddIcon fontSize='inherit' /> New Invoice</h2> <br /> 
                <h5 style={{ fontWeight: "550", fontSize: "20px", marginTop: "-30px" }}>Create New Invoice</h5>
                <h2 style={{ fontWeight: "550", fontSize: "15px", marginTop: "-30px" ,textAlign:"right" }}>Date: {`${currDate}`}</h2>
                <hr style={{ height: 1, borderTop: "3px solid red " }} />
              </Typography>

              <form>

                <Grid container spacing={2}>
                  <Grid xs={12} sm={3} item>
                    <p style={{ fontSize: "15px", fontWeight: "550" }}>Customer name:</p>
                    <TextField
                      hiddenLabel
                      value={inpval.name} onChange={setdata} name="name"
                      id="filled-hidden-label-normal"
                      placeholder='Name'
                      variant="filled"
                      fullWidth required />
                  </Grid>

                  <Grid xs={12} sm={3} item>
                    <p style={{ fontSize: "15px", fontWeight: "550" }}>CNIC:</p>

                    <TextField
                      hiddenLabel
                      value={inpval.cnic} onChange={setdata} name="cnic"
                      id="filled-hidden-label-normal"
                      placeholder='CNIC'
                      variant="filled"
                      fullWidth required />
                  </Grid>
                  <Grid xs={12} sm={3} item>
                    <p style={{ fontSize: "15px", fontWeight: "550" }}>Address:</p>

                    <TextField
                      hiddenLabel
                      value={inpval.address} onChange={setdata} name="address"
                      id="filled-hidden-label-normal"
                      placeholder='Address'
                      variant="filled"
                      fullWidth required />
                  </Grid>

                  <Grid xs={12} sm={3} item>
                    <p style={{ fontSize: "15px", fontWeight: "550" }}>Pharmacy Name:</p>
                    <TextField
                      placeholder="Search Medicines"
                      variant="filled"
                      fullWidth
                      required
                      value={`${PharmacyName}`}
                      InputProps={{
                        readOnly: true,
                        style: {
                          color: '#000000', // set placeholder text color to dark black
                        },
                      }}
                    />
                  </Grid>


                  <Grid xs={12} sm={3} item>
                    <p style={{ fontSize: "15px", fontWeight: "550" }}>Pharmacy Address:</p>
                    <TextField
                      variant="filled"
                      fullWidth
                      required
                      value={`${PharmacyAddress}`}
                      InputProps={{
                        readOnly: true,
                        style: {
                          color: '#000000', // set placeholder text color to dark black
                        },
                      }}
                    />
                  </Grid>
                  {/* <Grid item xs={12}>
                    <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="filled" fullWidth required />
                  </Grid> */}
                  {/* 
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                  </Grid> */}


                  <Grid xs={12} sm={3} item>
                    <p style={{ fontSize: "15px", fontWeight: "550" }}>Medicine name:</p>
                    <TextField
                      hiddenLabel
                      value={inpval.medicinename} onChange={setdata} name="medicinename"
                      id="filled-hidden-label-normal"
                      placeholder='Medicine'
                      variant="filled"
                      fullWidth required />
                  </Grid>
                  <Grid xs={12} sm={3} item>
                    <p style={{ fontSize: "15px", fontWeight: "550" }}>Quantity:</p>

                    <TextField
                      hiddenLabel
                      value={inpval.quantity} onChange={setdata} name="quantity"
                      id="filled-hidden-label-normal"
                      placeholder='Quantity'
                      variant="filled"
                      fullWidth required />
                  </Grid>

                  <Grid xs={12} sm={3} item>
                    <p style={{ fontSize: "15px", fontWeight: "550" }}>price:</p>

                    <TextField
                      hiddenLabel
                      value={inpval.price} onChange={setdata} name="price"
                      id="filled-hidden-label-normal"
                      placeholder='Price'
                      variant="filled"
                      fullWidth required />
                  </Grid>
                  <Grid xs={12} sm={3} item>
                    <p style={{ fontSize: "15px", fontWeight: "550" }}>Total:</p>

                    <TextField
                      hiddenLabel
                      value={inpval.total} onChange={setdata} name="total"
                      id="filled-hidden-label-normal"
                      placeholder='Total Bill'
                      variant="filled"
                      fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" onClick={addinpdata} fullWidth>Finalize Bill</Button>

                    {/* <Button type="submit" variant="contained" color="primary"  onClick={()=>{setgotobill(true)}} fullWidth>Print Reciept</Button> */}
                  </Grid>

                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </>)
}

export default Invoice