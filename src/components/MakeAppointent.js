import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Avatar, Grid, Typography, Chip, Divider, Box, Button, Card, CardContent } from '@mui/material';
import React from 'react'
import DCard from './Patient/Cards';
import Navbar2 from './Navbar2'
import "./PatientHome.css";

const Booking = () => {
  function leftClicked() {
    // document.getElementById('scrolltimline').scrollBy(30, 0); // for right scroll
    document.getElementById('scrolltimline').scrollBy(-30, 0); // for left scroll
  }
  function rightClicked() {
    document.getElementById('scrolltimline').scrollBy(30, 0); // for right scroll
    // document.getElementById('scrolltimline').scrollBy(-30, 0); // for left scroll
  }
  // let Doctor_name = [{ doctor: "Haider", des: "MBBS", image: require("../assets/doctor6.jpg") }, { doctor: "Ali", des: "Specialist", image: require("../assets/doctor3.jpg") }, { doctor: "ahsan", des: "Medical Specialist", image: require("../assets/doctor2.jpg") }];
  let appoint = [{ day: "Mon, 09 Jan", slots: "24 slots available" }, { day: "Mon, 09 Jan", slots: "24 slots available" }, { day: "Mon, 09 Jan", slots: "24 slots available" }, { day: "Mon, 09 Jan", slots: "24 slots available" }, { day: "Mon, 09 Jan", slots: "24 slots available" }, { day: "Mon, 09 Jan", slots: "24 slots available" }, { day: "Mon, 09 Jan", slots: "24 slots available" }, { day: "Mon, 09 Jan", slots: "24 slots available" }, { day: "Mon, 09 Jan", slots: "24 slots available" }]
  return (
    <>
      <Navbar2 />
      <div className='page-width' style={{ backgroundColor: "#eaf1f7", boxShadow: "5px 5px 20px" }}>
        <Grid container xs={12} >
          <Grid item xs={1.5} ml={1} mt={1}>
            <Avatar src={require("../assets/doctor1.jpg")} sx={{ height: '70px', width: '70px' }} />
          </Grid>
          <Grid item xs={8} mt={1}>
            <Typography variant="h8" color={"text.secondary"}>Available Tommorrow</Typography>
            <Typography variant="h4" color={"inherit"}>Zuhad Ul Hadi</Typography>
            <Typography variant="h6" color={"text.secondary"}>Dermatologist</Typography>
            <Typography variant="h6" color={"text.secondary"}>16 years of experience</Typography>
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
          <Avatar variant="small" style={{ position: "absolute", margin: "40px 15px", zIndex: "100", right: 0 ,width:"16px",height:"16px",opacity:0.8,color:"black"}} >
            <NavigateNext onClick={rightClicked} />
          </Avatar>
          <Box className="scrolling_cont" id="scrolltimline" style={{ overflow: 'auto' }}>
            <Grid container sx={{ minWidth: "1500px" }} justifyContent="space-between" mb={2}>

              {appoint.map((each) => {
                return (
                  <Grid item my={2} >
                    <Button
                      sx={{
                        textTransform: 'unset',
                      }}
                      variant={'text'}
                      rel={'noreferrer'}
                    >
                      <Card >
                        <CardContent>
                          <Typography variant="body1" color={"inherit"}>{each.day}</Typography>
                          <Typography variant="body2" color={"inherit"}>{each.slots}</Typography>
                        </CardContent>
                      </Card>
                    </Button>

                  </Grid>

                )
              })}

            </Grid>
          </Box>
          <Avatar variant="small" style={{ position: "absolute", margin: "40px 15px", zIndex: "100",width:"16px",height:"16px" ,opacity:0.8,color:"black"}} >
            <NavigateBefore onClick={leftClicked} />
          </Avatar>
        </Grid>
      </div>
    </>
  )
}

export default Booking;