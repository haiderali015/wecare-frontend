import React, { useEffect, useState } from 'react';
import { Grid, Typography, Card, CardContent, CardMedia, CardActionArea, FormControl, Input, InputLabel, FormHelperText } from '@mui/material';
import { Row, Col, Container,Button, ButtonGroup } from "react-bootstrap";
// import { useNavigate, useParams } from "react-router-dom";
import DoctorsList from './DoctorsList';
import PatientList from './PatientList';
import PharmaciesList from "./PharmaciesList"


const Admin = () => {


  
  const [showDoctors, setShowDoctors] = useState(false);
  const [showPatients, setShowPatients] = useState(false);
  const [showPharmacies,setShowPharmacies] =useState(false);

  const handleDoctorsButtonClick = () => {
    setShowDoctors(true);
    setShowPatients(false);
    setShowPharmacies(false);

  }

  const handlePatientsButtonClick = () => {
    setShowPatients(true);
    setShowDoctors(false);
    setShowPharmacies(false);

  }

  const handlePharmacyButtonClick =()=>{
    setShowDoctors(false);
    setShowPatients(false);
    setShowPharmacies(true);
  }

  

  return (
    <Container>
      <Row style={{width: "100%"}}>
        <h1 className='text-center bg-dark text-light p-2' >Admin Panel</h1>
        <Col md={3}>
          <ButtonGroup vertical style={{minHeight:"400px",minWidth:"250px"}}>
            <Button style={{backgroundColor:"#008CBA",color:"white",fontSize: "24px"}} onClick={handleDoctorsButtonClick}>All Doctors</Button>
            <br/>
            <Button style={{backgroundColor:"#008CBA",color:"white",fontSize: "24px"}} onClick={handlePatientsButtonClick}>All Patients</Button>
            <br/>
            <Button style={{backgroundColor:"#008CBA",color:"white",fontSize: "24px"}} onClick={handlePharmacyButtonClick}>All Pharmacies</Button>

          </ButtonGroup>
        </Col>

        <Col md={9}>
          {showDoctors && <DoctorsList />}
          {showPatients && <PatientList />}
          {showPharmacies && <PharmaciesList/>}
        </Col>
      </Row>
    </Container>
  );
}

export default Admin;
