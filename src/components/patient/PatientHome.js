import React, { useState, useEffect, useContext } from 'react'
import "./PatientHome.css";
import { useNavigate, useSearchParams, useParams } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { NavLink } from 'react-router-dom';
import Navbar3 from '../Navbar3';
import Footer from '../Footer';
import { Box } from '@mui/system';
import { Radio, RadioGroup, FormLabel, NativeSelect, FormControlLabel, Grid, TextField, Typography, Card, CardContent, Avatar, CardMedia, CardActionArea, Button, FormControl, Input, InputLabel, FormHelperText } from '@mui/material';
import doctor1 from '../../assets/doctor1.jpg';
const PatientHome = (props) => {
  const [userdata, setUserdata] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const [userToken, setuserToken] = useState(localStorage.getItem('userToken'));
  
  useEffect(() => {
    if (!userToken) {
      navigate('/signin');
    }
  }, [userToken, navigate]);


  let { city, hospital } = useParams();
  const navigate = useNavigate();
  const getdata = async () => {
    const res = await fetch(`http://localhost:8001/getDoctors?city=${city}&hospital=${hospital}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },

    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      console.log("error ");

    } else {
      setUserdata(data)
    }

  }
  const routes = (id) => {
    navigate(`/booking/${id}`);
  }
  useEffect(() => {
    getdata();
  }, [])






  return (
    <><Navbar3 />
      <Grid xs={12} m={5} >
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search doctor by degree,name"
          onChange={(event) => {
            setSearchVal(event.target.value);
          }}
        />
      </Grid>
      {city &&
        <Grid xs={12} m={5} >
          <Typography variant="h4" color={"inherit"}>Doctors in {hospital ? `${hospital}` : `${city}`}</Typography>
        </Grid>
      }
      <Grid container >
        <Grid item xs={5} px={5}>
          <Box sx={{ width: "100%", background: "#f4f6f9" }} m={5} p={2}>
            <FormControl fullWidth sx={{ marginBottom: "50px" }}>
              <FormLabel sx={{ fontSize: "18px" }} id="demo-radio-buttons-group-label">Specialities</FormLabel>
              <NativeSelect
                defaultValue={"All Specialities"}
                inputProps={{
                  name: 'age',
                  id: 'uncontrolled-native',
                }}
              >
                <option value="">All Specialities</option><option value="dentist">Dentist</option>
                <option value="dermatologist">Dermatologist</option>
                <option value="hair-transplant-surgeon">Hair Transplant Surgeon</option>
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
            <FormControl fullWidth sx={{ marginBottom: "20px" }}>
              <FormLabel sx={{ fontSize: "18px" }} id="radio-buttons-group-label">Availability</FormLabel>
              <RadioGroup
                row
                aria-labelledby="radio-buttons-group-label"
                defaultValue="Today"
                name="radio-buttons-group"
              >
                <FormControlLabel value="Today" control={<Radio />} label="Today" />
                <FormControlLabel value="Tommorrow" control={<Radio />} label="Tommorrow" />
              </RadioGroup>
            </FormControl>

          </Box>
        </Grid>
        <Grid item xs={7}>
        {userdata.map((each, index) => {
          return each.name && each.Type && each.name.toLowerCase().includes(searchVal.toLowerCase()) || each.Type.toLowerCase().includes(searchVal.toLowerCase()) ?
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
                        {each.Name}
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
                        {each.Degree}
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

export default PatientHome;