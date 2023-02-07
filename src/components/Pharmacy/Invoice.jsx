import React from 'react'
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Navigate } from 'react-router-dom';
import Box from "@mui/material/Box";



import "./pharmacy.css";
import Sidebar from './Sidebar';
import { useState } from 'react';


const Invoice = () => {

  const [gotobill,setgotobill]=useState(false);
  if(gotobill){
    return <Navigate to="/bill" />
  }
  
  return (
    <>
    <Box height={20}/>
      <div >

        <Grid >

          <Card style={{ maxWidth: 1000, padding: "20px 5px", margin: "auto" }}>
            <CardContent>
              <Typography variant="h5" color="textPrimary" component="h5" gutterBottom >
                <h2 style={{ fontWeight: "600", fontSize: "20px"}}> <PersonAddIcon fontSize='inherit' /> New Invoice</h2> <br /> <h5 style={{ fontWeight: "550", fontSize: "20px", marginTop: "-30px" }}>Create New Invoice</h5>
                <hr style={{ height: 1, borderTop: "3px solid red " }} />
              </Typography>

              <form>

                <Grid container spacing={2}>
                  <Grid xs={12} sm={3} item>
                    <p style={{fontSize:"15px", fontWeight:"550"}}>Customer name:</p>
                    <TextField placeholder="Enter name" label="First Name" name="user_name" variant="filled" fullWidth required />
                  </Grid>
                  <Grid xs={12} sm={3} item>
                    <p style={{fontSize:"15px", fontWeight:"550"}}>CNIC:</p>

                    <TextField placeholder="CNIC" label="cnic" variant="filled" fullWidth required />
                  </Grid>
                  <Grid xs={12} sm={3} item>
                    <p style={{fontSize:"15px", fontWeight:"550"}}>Address:</p>

                    <TextField placeholder="Address" label="Address" variant="filled" fullWidth required />
                  </Grid>
                  <Grid xs={12} sm={3} item>
                    <p style={{fontSize:"15px", fontWeight:"550"}}>Payment Type:</p>

                    <TextField placeholder="Cash or Credit Card" label="Payment Type" name="paymenttype" variant="filled" fullWidth required />
                  </Grid>
                  {/* <Grid item xs={12}>
                    <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="filled" fullWidth required />
                  </Grid> */}
{/* 
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                  </Grid> */}


                  <Grid xs={12} sm={3} item>
                    <p style={{fontSize:"15px", fontWeight:"550"}}>Medicine name:</p>
                    <TextField placeholder="Medicine name" label="medicine" name="medicine" variant="filled" fullWidth required />
                  </Grid>
                  <Grid xs={12} sm={3} item>
                    <p style={{fontSize:"15px", fontWeight:"550"}}>Quantity:</p>

                    <TextField placeholder="Quantity" label="Quantity" variant="filled" fullWidth required />
                  </Grid>
                  <Grid xs={12} sm={3} item>
                    <p style={{fontSize:"15px", fontWeight:"550"}}>price:</p>

                    <TextField placeholder="Price" label="Price" variant="filled" fullWidth required />
                  </Grid>
                  <Grid xs={12} sm={3} item>
                    <p style={{fontSize:"15px", fontWeight:"550"}}>Total:</p>

                    <TextField type="number" placeholder="Total Bill" label="Phone" variant="filled" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <Button type="submit" variant="contained" color="primary"  onClick={()=>{setgotobill(true)}} fullWidth>Print Reciept</Button>
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