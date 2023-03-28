import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Avatar, Grid, Typography, Chip, Divider, Box, Button, Card, CardContent } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import DCard from './Cards';
import Navbar2 from '../Navbar3'
import "./PatientHome.css";
import jwtDecode from 'jwt-decode';

const MakeAppointment = () => {
    const token = localStorage.getItem('userToken');

    const decodedToken = jwtDecode(token);
    const userId=decodedToken.userId;
    
    const [userdata, setUserdata] = useState([]);
    const [doc, setDoc] = useState({Name:"",Experience:"",Type:""});
    const [bookdate, setBookdate] = useState(new Date());
    const [days, setDays] = useState([]);
    const [times, setTimes] = useState([8, 9, 10, 11,12]);
    let { id } = useParams();
    const getslots = async () => {
        const res = await fetch(`http://localhost:8001/slots`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id
            })

        });

        const data = await res.json();
        if (res.status === 422 || !data) {
            console.log("error ");

        } else {
            setUserdata(data[1]);
            setDoc(data[0][0]);
        }
    }
    const savedata = async () => {
        const res = await fetch(`http://localhost:8001/bookdoc`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id,bookdate,userId
            })

        });
        alert("Booking added");
    }
    const available = (date) => {
        for (let i = 0; i < userdata.length; i++) {
            console.log(new Date(userdata[i].Time).getDate());
            
            if (new Date(userdata[i].Time).getDate() == date.getDate()) {
                const all = [8, 9, 10, 11,12];
                let temp=new Array;
                for (var j = 0; j <= 4; j++) {
                    console.log(new Date(userdata[i].Time).getHours() , all[j]);
                    if (new Date(userdata[i].Time).getHours() == all[j]) {
                    }
                    else
                    {
                        temp.push(all[j]);
                    }

                }
                console.log(temp);
                setTimes(temp);
            }
            else
            {
                setTimes([8, 9, 10, 11]);
            }
        }
    }
    useEffect(() => {
        getslots();
        dates();
    }, []);

    const dates = () => {
        var days = [];
        var dt = new Date();
        var temp = new Date();
        for (var i = 0; i < 5; i++) {
            days.push(new Date(dt.setDate(temp.getDate() + i)));
        }
        setDays(days);
    }


    function leftClicked() {
        // document.getElementById('scrolltimline').scrollBy(30, 0); // for right scroll
        document.getElementById('scrolltimline').scrollBy(-30, 0); // for left scroll
    }
    function rightClicked() {
        document.getElementById('scrolltimline').scrollBy(30, 0); // for right scroll
        // document.getElementById('scrolltimline').scrollBy(-30, 0); // for left scroll
    }
    // let Doctor_name = [{ doctor: "Haider", des: "MBBS", image: require("../assets/doctor6.jpg") }, { doctor: "Ali", des: "Specialist", image: require("../assets/doctor3.jpg") }, { doctor: "ahsan", des: "Medical Specialist", image: require("../assets/doctor2.jpg") }];
    let appoint = [{ day: "Mon, 09 Jan", slots: "5 slots available" },]
    return (
        <>
            <Navbar2 />
            <div className='page-width' style={{ backgroundColor: "#eaf1f7", boxShadow: "5px 5px 20px" }}>
                <Grid container xs={12} >
                    <Grid item xs={1.5} ml={1} mt={1}>
                        <Avatar src={require("../../assets/doctor1.jpg")} sx={{ height: '70px', width: '70px' }} />
                    </Grid>
                    <Grid item xs={8} mt={1}>
                        <Typography variant="h4" color={"inherit"}>{doc.username}</Typography>
                        <Typography variant="h8" color={"text.secondary"}>Available</Typography>
                        <Typography variant="h6" color={"text.secondary"}>{doc.Degree}</Typography>
                        <Typography variant="h6" color={"text.secondary"}>{doc.Experience} of experience</Typography>
                    </Grid>
                </Grid>
                <Grid container m={1}>
                    <Grid item m={1}>
                        <Chip variant="contained" color="primary" label="ABC Hospital" />
                    </Grid>
                    <Grid item m={1}>
                        <Chip variant="contained" color="primary" label="DEF Hospital" />
                    </Grid>
                    <Grid item m={1}>
                        <Chip variant="contained" color="primary" label="GHI Hospital" />
                    </Grid>
                </Grid>
                <Divider />
                <Box ml={1} mt={2}>
                    <Typography variant="h5" color={"inherit"}>Select Day</Typography>
                </Box>
                <Grid container style={{ position: "relative" }}>
                    <Avatar variant="small" style={{ position: "absolute", margin: "40px 15px", zIndex: "100", right: 0, width: "16px", height: "16px", opacity: 0.8, color: "black" }} >
                        <NavigateNext onClick={rightClicked} />
                    </Avatar>

                    <Box className="scrolling_cont" id="scrolltimline" style={{ overflow: 'auto' }}>
                        <Grid container sx={{ minWidth: "1000px" }} justifyContent="space-between" mb={2}>

                            {days.map((each) => {
                                return (
                                    <Grid item my={2} >
                                        <Button
                                            onClick={() => {
                                                setBookdate(each);
                                                available(each);
                                            }}
                                            sx={{
                                                textTransform: 'unset',
                                            }}
                                            variant={'text'}
                                            rel={'noreferrer'}
                                        >
                                            <Card >
                                                <CardContent>
                                                    <Typography variant="body1" color={"inherit"}>{each.toDateString()}</Typography>
                                                    {/* <Typography variant="body2" color={"inherit"}>{"Select Time below"}</Typography> */}
                                                </CardContent>
                                            </Card>
                                        </Button>

                                    </Grid>

                                )
                            })}

                        </Grid>
                    </Box>
                    <Avatar variant="small" style={{ position: "absolute", margin: "40px 15px", zIndex: "100", width: "16px", height: "16px", opacity: 0.8, color: "black" }} >
                        <NavigateBefore onClick={leftClicked} />
                    </Avatar>
                    <Grid container>
                        <Typography variant="h5" color={"text.secondary"}>Choose Time:</Typography>
                        {times.map((each) => {
                            return   <Button onClick={()=>{setBookdate(new Date(new Date(bookdate).setHours(each,0,0)));console.log(new Date(new Date(bookdate).setHours(each,0,0)))}} m={2} variant='contained'>{each+":00"}</Button>
                        })}
                    </Grid>
                    <Grid container m={3}>
                        <form>
                            <div class="form-group">
                                <Typography variant="h6" color={"text.secondary"}>Booking Fee</Typography>
                                <Typography variant="h8" color={"text.secondary"}>Rs 3000</Typography>
                            </div>
                            <div class="form-group">
                                <Typography variant="h6" color={"text.secondary"}>Date</Typography>
                                <Typography variant="h8" color={"text.secondary"}>{new Date(bookdate).toDateString()}</Typography>
                            </div>
                            <div class="form-group">
                                <Typography variant="h6" color={"text.secondary"}>Location</Typography>
                                <Typography variant="h8" color={"text.secondary"}>
                                    Plot 435 Block D Phase 1, Johar Town, Lahore, Punjab, Pakistan</Typography>
                            </div>
                            <div class="form-group">
                                <Typography variant="h6" color={"text.secondary"}>Appointment Time</Typography>
                                <Typography variant="h8" color={"text.secondary"}>{new Date(bookdate).getHours()}:00 AM</Typography>
                            </div>
                            <Button mx={2} onClick={savedata} variant='outlined'>Book</Button>
                        </form>
                    </Grid>
                </Grid>


            </div>
        </>
    )
}

export default MakeAppointment;