import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { Box, Card, Button ,CardActionArea, CardContent, CardMedia, FormControl, FormControlLabel, FormHelperText, FormLabel, Grid, Input, InputLabel, NativeSelect, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import doctor1 from '../../assets/doctor1.jpg';

const PatientHome = (props) => {
  const [userdata, setUserdata] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [userToken, setuserToken] = useState(localStorage.getItem('userToken'));
  const [query,setQuery]=useState("");
  const [speciality, setSpeciality] = useState("");
  const [selectedhospital, sethospital] = useState("");

  let { city, hospital } = useParams();
  const navigate = useNavigate();
  
  const getdata = async () => {
    let url = `http://localhost:8001/getDoctors?city=${city}&hospital=${hospital}`;
    if (speciality) {
      url += `&speciality=${speciality}`;
      console.log(url); 
    }
    if (selectedhospital) {
      url += `&hospital=${selectedhospital}`;
      console.log(url); 

    }
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    });

    const data = await res.json();
    if (res.status === 422 || !data || data.length === 0) {
      console.log("error ");
      setUserdata([]);
    } else {
      setUserdata(data)
    }
  };

  const routes = (id) => {
    navigate(`/booking/${id}`);
  };

  useEffect(() => {
    getdata();
  }, [speciality, selectedhospital]);

  return (
    <>
      <Grid xs={12} m={5} style={{marginTop:"50px"}}>
        <TextField type="text" placeholder='Search Doctor' className='search' onChange={e => setQuery(e.target.value)} />
      </Grid>
      {city &&
        <Grid xs={12} m={5} >
          <Typography variant="h4" color={"inherit"}>Doctors in {hospital ? `${hospital}` : `${city}`}</Typography>
        </Grid>
      }
      <Grid container>
        <Grid item xs={3} px={3}>
          <Box sx={{ width: "80%", background: "#f4f6f9" }} m={5} p={2}>
            <FormControl fullWidth sx={{ marginBottom: "50px" }}>
              <FormLabel sx={{ fontSize: "18px" }} id="demo-radio-buttons-group-label">Specialities</FormLabel>
              <NativeSelect
                defaultValue={"All Specialities"}
                inputProps={{
                  name: 'speciality',
                  id: 'uncontrolled-native',
                }}
                onChange={(e) => setSpeciality(e.target.value)}
                
              >
                <option value="">All Specialities</option>
                <option value="dentist">Dentist</option>
                <option value="dermatologist">Dermatologist</option>
                <option value="Hair Transplant Surgeon">Hair Transplant Surgeon</option>
                <option value="physiotherapist">Physiotherapist</option>
                <option value="sports-medicine-specialist">Sports Medicine Specialist</option>
                <option value="plastic-surgeon">Plastic Surgeon</option>
                <option value="cosmetologist">Cosmetologist</option>
                <option value="homeopathic-doctor">Homeopathic Doctor</option>
                <option value="orthopedic-surgeon">Orthopedic Surgeon</option>
                <option value="neurosurgeon">Neurosurgeon</option>
                <option value="gastroenterologist">Gastroenterologist</option>
                <option value="general-surgeon">General Surgeon</option>
                <option value="nephrologist">Nephrologist</option>
                <option value="ophthalmologist">Ophthalmologist</option>
                <option value="gynecologist">Gynecologist</option>
                <option value="sonologist">Sonologist</option>
                <option value="pulmonologist">Pulmonologist</option>
                <option value="cardiologist">Cardiologist</option>
                <option value="urologist">Urologist</option>

              </NativeSelect>
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: "20px" }}>
              <FormLabel sx={{ fontSize: "18px" }} id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>

            <FormControl fullWidth sx={{ marginBottom: "50px" }}>
              <FormLabel sx={{ fontSize: "18px" }} id="demo-radio-buttons-group-label">Hospitals</FormLabel>
              <NativeSelect
                defaultValue={"All Hospitals"}
                inputProps={{
                  name: 'selectedhospital',
                  id: 'uncontrolled-native',
                }}
                onChange={(e) => sethospital(e.target.value)}
                
              >
                <option value="">All Hospitals</option>
                <option value="Gurki">Gurki</option>
                <option value="CMH">CMH</option>
                <option value="Fatima Memorial">Fatima Memorial</option>
                <option value="Shayk Zayed">Shayk Zayed</option>
                
              </NativeSelect>
            </FormControl>

          </Box>
        </Grid>
        <Grid item xs={9}>
        {userdata.filter((element)=>element.username.toLowerCase().includes(query)).map((each, index) => {
          return each.name && each.Type.toLowerCase().includes(speciality.toLowerCase()) || each.Type.toLowerCase().includes(speciality.toLowerCase())  ?
            <Grid item m={5} key={index}>
                <Card
                  sx={{
                    display: "flex",
                    maxWidth: "750px",
                    backgroundColor: "white",
                    padding: "14px",
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{ height: 200, width: 320, borderRadius: "16px", padding: "1%", objectFit: "contain" }}
                    image={doctor1}
                    alt="Leaves"
                  />
                  <Box
                    sx={{ display: "flex", flexDirection: "column", borderRadius: "16px" }}
                  >
                    <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography variant="h3" sx={{ fontWeight: 600 }}>
                        {each.username}
                      </Typography>
                      <Typography
                        variant="h5"
                        color="text.secondary"
                        component="div"
                      >
                        {each.Type}
                      </Typography>
                      <Typography
                        variant="h5"
                        color="text.secondary"
                        component="div"
                      >
                        {each.Experience} Years Experience
                      </Typography>
                      <Typography
                        variant="h5"
                        color="text.secondary"
                        component="div"
                      >
                        {each.hospital} Hospital
                      </Typography>
                    </CardContent>
                    <CardActionArea>
                      <Button variant="contained" size='large' sx={{ padding: "10px", margin: "0px 10px" }}>
                        View Profile
                      </Button>
                      <Button variant="contained" size='large' sx={{ padding: "10px", margin: "0px 10px" }}  onClick={() => { routes(each.Id) }}>
                        Quick Appointment
                      </Button>
                    </CardActionArea>
                  </Box>
                </Card>
              </Grid> : <></>
          })}
        </Grid>
      </Grid>
    </>)
}

export default PatientHome;