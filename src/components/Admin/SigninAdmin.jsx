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
import NavbarAdmin from "./NavbarAdmin"
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

export default function SigninAdmin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const setToken = (token) => {
      localStorage.setItem('token', token);
    }
  
    const login = async (event) => {
      event.preventDefault();
      try {
        const userData = await Axios.post('http://localhost:8001/login', {
          username: username,
          password: password,
        });
    
        if (userData.data.code === 200) {
          setToken(userData.data.token); // set the token in the local storage
          navigate('/Admin');
        } else {
          setError('Wrong username or password');
        }
      } catch (error) {
        console.log(error);
        setError('An error occurred. Please try again.');
      }
    };
  
  return (
    <>
    {/* <Navbar/> */}
    <NavbarAdmin/>
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h2">
            Sign in as Admin
          </Typography>
          {error && <p style={{ color: 'red' ,textAlign:"center"}}>{error}</p>} {/* display error message if there is an error */}
          <TextField
              margin="normal"
              required
              fullWidth
              type='text'
              className='form-control'
              placeholder='name'
              style={{ textTransform: 'lowercase' }}
              onChange={(e) => {
              setUsername(e.target.value);
              setError(null); // clear error message when the user types in the username field
                }}/>


<TextField
              margin="normal"
              required
              fullWidth
              type='password'
              className='form-control'
              placeholder='Password'
              style={{ textTransform: 'lowercase' }}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(null); // clear error message when the user types in the password field
                  }}
                />

                
        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} value="LOGIN" onClick={login}>Sign In </Button>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
      <Footer/>
    </ThemeProvider>
    
</>
  );
}