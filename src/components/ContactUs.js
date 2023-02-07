import React from 'react'
import PlaceIcon from '@mui/icons-material/Place';
import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import Navbar from './navbar';
import Footer from '../components/Footer';
// import './App.css';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import { useRef } from "react";
// import emailjs from '@emailjs/browser';


const ContactUs = () => {
    return (
        <><Navbar />

            <div className="App">
                <Typography gutterBottom variant="h2" align="center" style={{marginTop:"30px"}}>
                    Contact us
                </Typography>
                <Grid>
                    <Card style={{ maxWidth: 650, padding: "20px 5px", margin: "auto" }}>
                        <CardContent>
                            <Typography variant="h4" color="textSecondary" component="h4" gutterBottom style={{textAlign:"center"}}>
                                Fill up the form and our team will get back to you within 24 hours.
                            </Typography>
                            {/* <form ref={form} onSubmit={sendEmail}> */}
                            <form  action="https://formspree.io/f/xdovaoqz" method="POST">
                                <Grid container spacing={2}>
                                    <Grid xs={12} sm={6} item>
                                        <TextField placeholder="Enter first name" label="First Name" name="userName" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField placeholder="Enter last name" label="LastName" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" name="Email" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField label="Message" multiline rows={4} name="Message" placeholder="Type your message here" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                                    </Grid>

                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.316627701372!2d74.30744071448427!3d31.570364051831913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191ca7d960f837%3A0xc0bb6ddf0568a651!2sPunjab%20University%20College%20of%20Information%20Technology%20Old%20Campus!5e0!3m2!1sfr!2s!4v1674746232399!5m2!1sfr!2s" width="100%" height="400" style={{border:0}}  allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer/>

        </>
    )
}

export default ContactUs