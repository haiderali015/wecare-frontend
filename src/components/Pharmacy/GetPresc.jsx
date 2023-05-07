import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Axios from 'axios';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from '../navbar';
import Footer from '../Footer';
import NavbarPharmacy from "./NavbarPharmacy"
import jwtDecode from 'jwt-decode';
import GetUserPresc from './GetUserPresc';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        wecare
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function GetPresc() {
  const [date, setdate] = useState('');
  const [PID, setPID] = useState('');
  const [error, setError] = useState(null);
  const [showPresc, setShowPresc] = useState(false);

  const GetPresc = async (event) => {
    event.preventDefault();
    console.log(PID + ' ' + date);
    try {
      const userData = await Axios.post('http://localhost:8001/getprescpharmacy', {
        Time: date,
        UserID: PID,
      });
      if (userData.data.code === 200) {
        setShowPresc(true);
      } else {
        setError('UserID and Time do not match');
      }
    } catch (error) {
      console.log(error);
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      {/* <Navbar/> */}
      <NavbarPharmacy />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h2">
              Enter Customer's PID
            </Typography>
            {error && <p style={{ color: 'red', textAlign: "center" }}>{error}</p>} {/* display error message if there is an error */}
          
            <TextField
              margin="normal"
              required
              fullWidth
              type='text'
              label="Enter Date"
              className='form-control'
              placeholder='date/month/year'
              style={{ textTransform: 'lowercase' }}
              onChange={(e) => {
                setdate(e.target.value);
                setError(null); 
              }}
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              type='password'
              className='form-control'
              placeholder='PID'
              style={{ textTransform: 'lowercase' }}
              onChange={(e) => {
                setPID(e.target.value);
                setError(null); // clear error message when the user types in the password field
              }}
            />


            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} value="GetPresc" onClick={GetPresc}>Get Prescription </Button>

            <Grid container>
              
            </Grid>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            {showPresc && <GetUserPresc />}
        </Box>
      </ThemeProvider>

    </>
  );
}