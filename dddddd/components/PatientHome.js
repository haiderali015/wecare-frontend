import { Grid, Typography } from '@mui/material';
import React from 'react'
import DCard from './Cards';
import Navbar2 from './Navbar2'
import "./PatientHome.css";

const PatientHome = () => {
  // let Doctor_name = [{ doctor: "Haider", des: "MBBS", image: require("../assets/doctor6.jpg") }, { doctor: "Ali", des: "Specialist", image: require("../assets/doctor3.jpg") }, { doctor: "ahsan", des: "Medical Specialist", image: require("../assets/doctor2.jpg") }];
  return (
    <>
      <Navbar2 />
      <Grid container justifyContent="space-evenly" my={2}>
        <Grid item >
          <DCard />
        </Grid>
        <Grid item >
          <DCard />
        </Grid>
        <Grid item>
          <DCard />
        </Grid>
      </Grid>
      <Grid container justifyContent="space-evenly" my={2}>
        <Grid item >
          <DCard />
        </Grid>
        <Grid item >
          <DCard />
        </Grid>
        <Grid item>
          <DCard />
        </Grid>
      </Grid>
    </>
  )
}

export default PatientHome;