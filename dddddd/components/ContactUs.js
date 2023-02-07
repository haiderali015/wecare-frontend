import React from 'react';
// import './App.css';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import Navbar from './navbar';
import {useRef} from "react";
// import emailjs from '@emailjs/browser';




function App() {
    // const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_j1l9g6b', 'template_872u13s', form.current, '0Xe6Lbyj3bFicHzQg')
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    //     e.target.reset();    
    // };


    return (
        <>
        <Navbar/>
            <div className="App">
                <Typography gutterBottom variant="h2" align="center">
                    Contact us
                </Typography>
                <Grid>
                    <Card style={{ maxWidth: 650, padding: "20px 5px", margin: "auto" }}>
                        <CardContent>
                            <Typography variant="h4" color="textSecondary" component="h4" gutterBottom>
                            Please note that we will get back to you within 24 hours.
                            </Typography>
                            {/* <form ref={form} onSubmit={sendEmail}> */}
                            <form>
                                <Grid container spacing={2}>
                                    <Grid xs={12} sm={6} item>
                                        <TextField placeholder="Enter first name" label="First Name" name="user_name" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" name="user_email" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button type="submit" sx={{fontSize: 24}} variant="contained" color="primary" fullWidth>Submit</Button>
                                    </Grid>

                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>
            </div>
        </>
    );
}

export default App;


























// import React from 'react'
// import PlaceIcon from '@mui/icons-material/Place';
// import SettingsPhoneIcon from '@mui/icons-material/SettingsPhone';
// import MarkunreadIcon from '@mui/icons-material/Markunread';
// import Navbar from './navbar';
// import "./HomePage.css";

// const ContactUs = () => {
//     return (
//     <><Navbar/>

//         <div className='aboutimage'>
//             <div className='contactcontents'>
//                 <section className="mb-4">

//                     <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
//                     <h4 className="text-center w-responsive mx-auto mb-5 ">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
//                        <br/> a matter of hours to help you.</h4>

//                     <div className="row">

//                         <div className="col-md-9 mb-md-0 mb-5">
//                             <form id="contact-form" name="contact-form" action="mail.php" method="POST">

//                                 <div className="row">

//                                     <div className="col-md-12">
//                                         <div className="md-form mb-12">
//                                             <input type="text" id="name" name="name" class="form-control" />
//                                             <label for="name" class="">Your name</label>
//                                         </div>
//                                     </div>

//                                     <div className="col-md-12">
//                                         <div className="md-form mb-12">
//                                             <input type="text" id="email" name="email" class="form-control" />
//                                             <label for="email" class="">Your email</label>
//                                         </div>
//                                     </div>

//                                 </div>

//                                 <div className="row">
//                                     <div className="col-md-12">
//                                         <div className="md-form mb-0">
//                                             <input type="text" id="subject" name="subject" class="form-control" />
//                                             <label for="subject" class="">Subject</label>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="row">

//                                     <div className="col-md-12">

//                                         <div className="md-form">
//                                             <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
//                                             <label for="message">Your message</label>
//                                         </div>

//                                     </div>
//                                 </div>

//                             </form>

//                             <div class="d-grid gap-2">
//                                 <a className="btn btn-primary py-3 " onclick="document.getElementById('contact-form').submit();">Send</a>
//                             </div>
//                             <div className="status"></div>
//                         </div>

//                         <div className="col-md-3 text-center">
//                             <ul className="list-unstyled mb-0">
//                                 <li><PlaceIcon />
//                                     <p>LAhore,Pak</p>
//                                 </li>

//                                 <li><SettingsPhoneIcon />
//                                     <p>090078601</p>
//                                 </li>

//                                 <li><MarkunreadIcon />
//                                     <p>contact@WeCare.com</p>
//                                 </li>
//                             </ul>
//                         </div>

//                     </div>

//                 </section>
//             </div>
//         </div></>
//     )
// }

// export default ContactUs